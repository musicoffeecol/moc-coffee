/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState, type ReactNode } from 'react'
import type { CartItem, MomentSelection, Product } from '../types'
import { cartStorageKey, clampQuantity } from '../utils'
import { cartItemKey, resolveMoment } from '../coffeeJourney'
import { moods } from '../data/moods'

type CartState = { items: CartItem[] }
type CartAction =
  | { type: 'add'; item: CartItem }
  | { type: 'quantity'; id: string; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'clear' }

const parseStoredCart = (): CartState => {
  if (typeof window === 'undefined') return { items: [] }
  try {
    const parsed = JSON.parse(window.localStorage.getItem(cartStorageKey) ?? '[]') as unknown
    if (!Array.isArray(parsed)) return { items: [] }
    const items = parsed.filter((item): item is CartItem => {
      if (!item || typeof item !== 'object') return false
      const candidate = item as Partial<CartItem>
      return typeof candidate.id === 'string' && typeof candidate.name === 'string' &&
        typeof candidate.productId === 'string' && typeof candidate.image === 'string' &&
        typeof candidate.unitPrice === 'number' && Number.isFinite(candidate.unitPrice) &&
        typeof candidate.quantity === 'number' && candidate.quantity > 0 &&
        typeof candidate.presentation === 'string'
    }).map((item) => ({ ...item, quantity: clampQuantity(item.quantity), moment: resolveMoment(moods, item.moment, item.productId)?.selection }))
    return { items }
  } catch {
    return { items: [] }
  }
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((item) => item.id === action.item.id)
      if (existing) return { items: state.items.map((item) => item.id === action.item.id ? { ...item, quantity: clampQuantity(item.quantity + action.item.quantity) } : item) }
      return { items: [...state.items, { ...action.item, quantity: clampQuantity(action.item.quantity) }] }
    }
    case 'quantity':
      return { items: state.items.map((item) => item.id === action.id ? { ...item, quantity: clampQuantity(action.quantity) } : item) }
    case 'remove': return { items: state.items.filter((item) => item.id !== action.id) }
    case 'clear': return { items: [] }
  }
}

type AddOptions = { presentation?: string; grind?: string; subscriptionFrequency?: string; quantity?: number; moment?: MomentSelection }
type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isDrawerOpen: boolean
  toast: string
  addProduct: (product: Product, options?: AddOptions) => void
  setQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, parseStoredCart)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [toast, setToast] = useState('')
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  useEffect(() => {
    window.localStorage.setItem(cartStorageKey, JSON.stringify(state.items))
  }, [state.items])

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(''), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  const value = useMemo<CartContextValue>(() => ({
    items: state.items,
    count: state.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: state.items.reduce((total, item) => total + item.unitPrice * item.quantity, 0),
    isDrawerOpen,
    toast,
    addProduct: (product, options = {}) => {
      const presentation = options.presentation ?? product.presentations[0] ?? 'Única'
      const grind = options.grind ?? product.grindOptions[0]
      const frequency = options.subscriptionFrequency
      const moment = resolveMoment(moods, options.moment, product.id)?.selection
      const id = cartItemKey(product.id, presentation, grind, frequency, moment)
      dispatch({ type: 'add', item: { id, productId: product.id, name: product.name, image: product.images[0] ?? product.id, unitPrice: product.price, quantity: options.quantity ?? 1, presentation, grind, subscriptionFrequency: frequency, moment } })
      setToast(`${product.name} se agregó a tu momento.`)
    },
    setQuantity: (id, quantity) => dispatch({ type: 'quantity', id, quantity }),
    removeItem: (id) => dispatch({ type: 'remove', id }),
    clearCart: () => dispatch({ type: 'clear' }),
    openDrawer: () => setDrawerOpen(true),
    closeDrawer,
  }), [state.items, isDrawerOpen, toast, closeDrawer])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
  return context
}

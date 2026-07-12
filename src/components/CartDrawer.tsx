import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { formatCOP } from '../utils'
import { CartLine } from './CartLine'
import { EmptyState } from './EmptyState'
import { Icon } from './Icon'

export function CartDrawer() {
  const { items, subtotal, isDrawerOpen, closeDrawer } = useCart()
  useEffect(() => {
    document.body.classList.toggle('drawer-open', isDrawerOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [isDrawerOpen])
  useEffect(() => {
    if (!isDrawerOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') closeDrawer() }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isDrawerOpen, closeDrawer])

  return (
    <div className={`drawer-layer ${isDrawerOpen ? 'is-open' : ''}`} aria-hidden={!isDrawerOpen}>
      <button className="drawer-backdrop" onClick={closeDrawer} tabIndex={isDrawerOpen ? 0 : -1} aria-label="Cerrar carrito" />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <header><div><p className="eyebrow">Tu selección</p><h2 id="drawer-title">Carrito</h2></div><button className="icon-button" onClick={closeDrawer} aria-label="Cerrar carrito"><Icon name="close" /></button></header>
        <div className="drawer-content">{items.length ? items.map((item) => <CartLine key={item.id} item={item} compact />) : <EmptyState />}</div>
        {items.length > 0 && <footer><div><span>Subtotal</span><strong>{formatCOP(subtotal)}</strong></div><Link className="button primary full" to="/carrito" onClick={closeDrawer}>Ver carrito <Icon name="arrow" /></Link></footer>}
      </aside>
    </div>
  )
}

import { useCart } from '../cart/CartContext'

export function Toast() {
  const { toast } = useCart()
  return <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">{toast}</div>
}

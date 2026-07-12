import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { formatCOP } from '../utils'
import { Icon } from './Icon'

export function CartSummary({ checkout = true }: { checkout?: boolean }) {
  const { subtotal } = useCart()
  return (
    <aside className="cart-summary">
      <p className="eyebrow">Resumen</p>
      <div><span>Total parcial</span><strong>{formatCOP(subtotal)}</strong></div>
      <div><span>Envío</span><span>Calculado en el siguiente paso</span></div>
      <div className="cart-total"><span>Total estimado</span><strong>{formatCOP(subtotal)}</strong></div>
      {checkout && <Link className="button primary full" to="/checkout">Continuar al checkout <Icon name="arrow" /></Link>}
      <small>No se realizará ningún cobro en este MVP.</small>
    </aside>
  )
}

import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { useCart } from '../cart/CartContext'

export function EmptyState() {
  const { closeDrawer } = useCart()
  return (
    <div className="empty-state">
      <span><Icon name="coffee" size={34} /></span>
      <h2>Tu próximo momento todavía no está aquí.</h2>
      <p>Elige un mood o recorre la tienda para encontrar la taza que acompaña tu día.</p>
      <Link className="button primary" to="/tienda" onClick={closeDrawer}>Encontrar mi café <Icon name="arrow" /></Link>
    </div>
  )
}

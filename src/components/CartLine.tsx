import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { journeyPath, resolveMoment } from '../coffeeJourney'
import { moods } from '../data/moods'
import type { CartItem } from '../types'
import { formatCOP } from '../utils'
import { Icon } from './Icon'
import { ProductVisual } from './ProductVisual'
import { QuantitySelector } from './QuantitySelector'

export function CartLine({ item, compact = false }: { item: CartItem; compact?: boolean }) {
  const { setQuantity, removeItem, closeDrawer } = useCart()
  const moment = resolveMoment(moods, item.moment, item.productId)
  return (
    <article className={`cart-line ${compact ? 'is-compact' : ''}`}>
      <ProductVisual token={item.image} name={item.name} />
      <div className="cart-line-main">
        <div><h3>{item.name}</h3><p>{[item.presentation, item.grind, item.subscriptionFrequency].filter(Boolean).join(' · ')}</p>{moment && <div className="cart-moment"><strong>Tu momento · {moment.mood.name}</strong><p>“{moment.thought}”</p><Link to={journeyPath('mood', moment.selection)} onClick={closeDrawer}>Volver a mi combinación</Link></div>}</div>
        <strong>{formatCOP(item.unitPrice * item.quantity)}</strong>
        <div className="cart-line-actions">
          <QuantitySelector value={item.quantity} onChange={(quantity) => setQuantity(item.id, quantity)} />
          <button className="remove-button" onClick={() => removeItem(item.id)} aria-label={`Eliminar ${item.name}`}><Icon name="trash" size={18} /> <span>Eliminar</span></button>
        </div>
      </div>
    </article>
  )
}

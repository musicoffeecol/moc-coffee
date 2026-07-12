import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export function EmptyState() {
  return (
    <div className="empty-state">
      <span><Icon name="coffee" size={34} /></span>
      <h2>Tu próximo momento todavía no está aquí.</h2>
      <p>Elige un mood o recorre la tienda para encontrar la taza que acompaña tu día.</p>
      <Link className="button primary" to="/mood-lab">Encontrar mi café <Icon name="arrow" /></Link>
    </div>
  )
}

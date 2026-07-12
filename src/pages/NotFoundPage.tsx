import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'

export function NotFoundPage() {
  return <main className="not-found section-dark"><section><span>404</span><p className="eyebrow">Fuera de ritmo</p><h1>Este momento<br />no existe.</h1><p>La ruta no corresponde a una página disponible.</p><Link className="button primary" to="/">Volver al inicio <Icon name="arrow" /></Link></section></main>
}

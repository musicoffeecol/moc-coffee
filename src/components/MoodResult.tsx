import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { findProduct } from '../data/products'
import { momentQuery, selectMoment } from '../coffeeJourney'
import type { Mood } from '../types'
import { Icon } from './Icon'
import { ProductVisual } from './ProductVisual'

export function MoodResult({ mood, thought }: { mood: Mood; thought: string }) {
  const product = findProduct(mood.recommendedProductId)
  const { addProduct, openDrawer } = useCart()
  if (!product) return null
  const moment = selectMoment(mood, thought)
  return (
    <article className="mood-result" style={{ '--mood-accent': mood.accent } as React.CSSProperties} aria-live="polite">
      <div className="mood-result-visual"><ProductVisual token={product.images[0]} name={product.name} /></div>
      <div className="mood-result-copy">
        <p className="eyebrow">Tu combinación MØC</p>
        <h2>{product.name}</h2>
        <p className="result-intro">{product.shortDescription}</p>
        <div className="result-grid">
          <div className="result-playlist"><Icon name="music" /><span>Playlist</span><strong>{mood.playlist.name}</strong></div>
          <blockquote className="result-thought"><Icon name="spark" /><p>“{thought}”</p></blockquote>
          <div className="result-ritual"><Icon name="coffee" /><span>Ritual</span><strong>{mood.ritual}</strong></div>
        </div>
        <div className="button-row">
          <Link className="button primary" to={`/tienda/${product.slug}?${momentQuery(moment)}`}>Elegir preparación <Icon name="arrow" /></Link>
          <button className="button secondary" onClick={() => { addProduct(product, { moment }); openDrawer() }}>Agregar {product.presentations[0]} en grano</button>
          <a className="text-link" href={mood.playlist.url} target="_blank" rel="noreferrer"><Icon name="play" /> Abrir playlist</a>
        </div>
      </div>
    </article>
  )
}

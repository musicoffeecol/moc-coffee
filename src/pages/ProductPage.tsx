import { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { findProduct, productDisclaimer, products } from '../data/products'
import { moods } from '../data/moods'
import { journeyPath, readMoment } from '../coffeeJourney'
import type { Product } from '../types'
import { formatCOP } from '../utils'
import { Icon } from '../components/Icon'
import { ProductGrid } from '../components/ProductGrid'
import { ProductVisual } from '../components/ProductVisual'
import { QuantitySelector } from '../components/QuantitySelector'
import { NotFoundPage } from './NotFoundPage'

export function ProductPage() {
  const { slug = '' } = useParams()
  const product = findProduct(slug)
  return product ? <ProductDetails key={product.id} product={product} /> : <NotFoundPage />
}

function ProductDetails({ product }: { product: Product }) {
  const [params] = useSearchParams()
  const moment = readMoment(moods, params, product.id)
  const { addProduct, openDrawer } = useCart()
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [presentation, setPresentation] = useState(product.presentations[0] ?? '')
  const [grind, setGrind] = useState(product.grindOptions[0] ?? '')
  const [frequency, setFrequency] = useState('Cada mes')
  const [quantity, setQuantity] = useState(1)
  const related = useMemo(() => products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3), [product])
  const isSubscription = product.category === 'Suscripciones'
  return (
    <main>
      <section className="product-detail section-light">
        <div className="breadcrumbs"><Link to={journeyPath(moment ? 'mood' : 'catalogo', moment?.selection)}>{moment ? 'Volver a mi combinación' : 'Nuestros cafés'}</Link><span>/</span><span>{product.name}</span></div>
        <div className="product-detail-grid">
          <div className="product-gallery">
            <ProductVisual token={product.images[galleryIndex]} name={product.name} className="main-product-visual" />
            <div className="gallery-thumbs">{product.images.map((image, index) => <button key={image} className={galleryIndex === index ? 'is-active' : ''} onClick={() => setGalleryIndex(index)} aria-label={`Ver imagen ${index + 1}`}><ProductVisual token={image} name={product.name} /></button>)}</div>
            {moment && <section className="product-moment" aria-labelledby="product-moment-title">
              <p className="eyebrow">La combinación que elegiste</p><h2 id="product-moment-title">Tu momento: {moment.mood.name}</h2>
              <blockquote>“{moment.thought}”</blockquote>
              <dl><div><dt>Playlist</dt><dd><a href={moment.mood.playlist.url} target="_blank" rel="noreferrer">{moment.mood.playlist.name} <Icon name="play" size={18} /></a></dd></div><div><dt>Ritual</dt><dd>{moment.mood.ritual}</dd></div></dl>
              <Link className="text-link" to={journeyPath('mood', moment.selection)}>Cambiar mi intención <Icon name="arrow" /></Link>
            </section>}
          </div>
          <div className="product-info">
            <p className="eyebrow">{product.category} · {product.process}</p>
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <div className="price-line"><strong>{formatCOP(product.price)}</strong><span>Precio demostrativo</span></div>
            <div className="tasting-block"><span>Notas</span><div>{product.tastingNotes.map((note) => <strong key={note}>{note}</strong>)}</div></div>
            <dl className="origin-grid">
              <div><dt>Origen</dt><dd>{product.origin}</dd></div>
              <div><dt>Región</dt><dd>{product.region}</dd></div>
              <div><dt>Lugar</dt><dd>{product.locationDetail ?? 'Por confirmar'}</dd></div>
              <div><dt>Fecha de tueste</dt><dd>{product.roastDate ?? 'No aplica'}</dd></div>
              <div><dt>Variedad</dt><dd>{product.variety ?? 'Por confirmar'}</dd></div>
              <div><dt>Altitud</dt><dd>{product.altitude ?? 'Por confirmar'}</dd></div>
            </dl>
            {product.producer && <section className="producer-story" aria-labelledby="producer-title">
              <p className="eyebrow">Quien está detrás de este café</p>
              <h2 id="producer-title">{product.producer.farm}</h2>
              <strong>{product.producer.name}</strong>
              <p>{product.producer.story}</p>
            </section>}
            {moment && <div className="preparation-heading"><p className="eyebrow">03 · A tu manera</p><h2>Ahora, ¿cómo lo preparas?</h2><p>Elige la presentación y el método. Tu combinación te acompaña al carrito.</p></div>}
            <div className="option-group"><label>Presentación</label><div role="group" aria-label="Presentación">{product.presentations.map((option) => <button key={option} aria-pressed={presentation === option} className={presentation === option ? 'is-selected' : ''} onClick={() => setPresentation(option)}>{option}</button>)}</div></div>
            {product.grindOptions.length > 0 && <div className="option-group"><label htmlFor="grind">¿Cómo preparas tu café?</label><select id="grind" value={grind} onChange={(event) => setGrind(event.target.value)}>{product.grindOptions.map((option) => <option key={option}>{option}</option>)}</select><small>Seleccionamos la molienda adecuada para el método que usas.</small></div>}
            {isSubscription && <div className="option-group"><label htmlFor="frequency">Frecuencia</label><select id="frequency" value={frequency} onChange={(event) => setFrequency(event.target.value)}><option>Cada mes</option><option>Cada 15 días</option></select></div>}
            <div className="purchase-row"><QuantitySelector value={quantity} onChange={setQuantity} /><button className="button primary" disabled={!product.available} onClick={() => { addProduct(product, { presentation, grind: grind || undefined, subscriptionFrequency: isSubscription ? frequency : undefined, quantity, moment: moment?.selection }); openDrawer() }}>Agregar al carrito <Icon name="bag" /></button></div>
            <p className="availability"><span className={product.available ? 'available' : ''} />{product.available ? 'Disponible en esta demostración' : 'No disponible'}</p>
            {product.playlistUrl && <section className="playlist-story" aria-labelledby="playlist-story-title">
              <Icon name="music" size={30} />
              <div><p className="eyebrow">La intención detrás de la música</p><h2 id="playlist-story-title">¿Por qué esta playlist?</h2><p>{product.playlistReason}</p></div>
              <a className="text-link" href={product.playlistUrl} target="_blank" rel="noreferrer">Escuchar playlist <Icon name="arrow" /></a>
            </section>}
            <p className="data-disclaimer compact">{productDisclaimer}</p>
          </div>
        </div>
      </section>
      {related.length > 0 && <section className="related-products section-cream"><div className="section-heading"><p className="eyebrow">Sigue explorando</p><h2>Otros momentos.</h2></div><ProductGrid products={related} /></section>}
    </main>
  )
}

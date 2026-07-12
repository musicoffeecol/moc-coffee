import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import type { Product } from '../types'
import { formatCOP } from '../utils'
import { Icon } from './Icon'
import { ProductVisual } from './ProductVisual'

export function ProductCard({ product }: { product: Product }) {
  const { addProduct } = useCart()
  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/tienda/${product.slug}`} aria-label={`Ver ${product.name}`}>
        <ProductVisual token={product.images[0]} name={product.name} />
        <span className="product-index">{product.category}</span>
        {product.isNew && <span className="product-badge">Nuevo</span>}
      </Link>
      <div className="product-card-body">
        <div className="product-meta"><span>{product.region}</span><span>{product.process}</span></div>
        <h3><Link to={`/tienda/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.tastingNotes.join(' · ')}</p>
        <div className="product-card-footer">
          <div><small>Desde</small><strong>{formatCOP(product.price)}</strong></div>
          <button className="round-add" onClick={() => addProduct(product)} aria-label={`Agregar ${product.name} al carrito`}><Icon name="plus" /></button>
        </div>
      </div>
    </article>
  )
}

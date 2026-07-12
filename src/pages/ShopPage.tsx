import { useMemo, useState } from 'react'
import { productDisclaimer, products } from '../data/products'
import { ProductGrid } from '../components/ProductGrid'

const filters = ['Todos', 'Lavado', 'Honey', 'Natural', 'Edición limitada', 'Suscripción', 'Accesorios']

export function ShopPage() {
  const [filter, setFilter] = useState('Todos')
  const [sort, setSort] = useState('recommended')
  const visible = useMemo(() => {
    let filtered = products.filter((product) => {
      if (filter === 'Todos') return true
      if (filter === 'Suscripción') return product.category === 'Suscripciones'
      if (filter === 'Accesorios') return product.category === 'Accesorios'
      return product.process === filter
    })
    if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
    if (sort === 'new') filtered = [...filtered].sort((a, b) => Number(b.isNew) - Number(a.isNew))
    return filtered
  }, [filter, sort])

  return (
    <main>
      <section className="page-hero shop-hero section-dark"><div><p className="eyebrow">Tienda · Selección actual</p><h1>No compres café.<br /><em>Encuentra tu ritmo.</em></h1></div><p>Perfiles para distintas formas de habitar el día. Todos los datos comerciales son demostrativos.</p></section>
      <section className="shop-section section-light">
        <div className="shop-toolbar">
          <div className="filter-list" role="group" aria-label="Filtrar productos">{filters.map((item) => <button key={item} className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <label className="sort-control">Ordenar <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Recomendados</option><option value="price-asc">Precio ascendente</option><option value="price-desc">Precio descendente</option><option value="new">Novedades</option></select></label>
        </div>
        <div className="results-line"><span>{visible.length} resultados</span><span>{filter}</span></div>
        <ProductGrid products={visible} />
        <p className="data-disclaimer">{productDisclaimer}</p>
      </section>
    </main>
  )
}

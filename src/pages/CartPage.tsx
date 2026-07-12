import { useCart } from '../cart/CartContext'
import { CartLine } from '../components/CartLine'
import { CartSummary } from '../components/CartSummary'
import { EmptyState } from '../components/EmptyState'

export function CartPage() {
  const { items, clearCart } = useCart()
  return (
    <main className="section-light cart-page">
      <section className="cart-page-inner">
        <header className="cart-title"><div><p className="eyebrow">Tu selección</p><h1>Carrito</h1></div>{items.length > 0 && <button className="text-button" onClick={clearCart}>Vaciar carrito</button>}</header>
        {!items.length ? <EmptyState /> : <div className="cart-layout"><div className="cart-list">{items.map((item) => <CartLine key={item.id} item={item} />)}</div><CartSummary /></div>}
      </section>
    </main>
  )
}

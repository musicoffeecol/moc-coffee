import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { formatCOP } from '../utils'
import { CartLine } from './CartLine'
import { EmptyState } from './EmptyState'
import { Icon } from './Icon'

export function CartDrawer() {
  const { items, subtotal, isDrawerOpen, closeDrawer } = useCart()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    document.body.classList.toggle('drawer-open', isDrawerOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [isDrawerOpen])
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isDrawerOpen && !dialog.open) {
      dialog.showModal()
      closeButtonRef.current?.focus({ preventScroll: true })
    }
    else if (!isDrawerOpen && dialog.open) dialog.close()
  }, [isDrawerOpen])

  return (
    <dialog ref={dialogRef} className={`drawer-layer ${isDrawerOpen ? 'is-open' : ''}`} aria-labelledby="drawer-title" onCancel={(event) => { event.preventDefault(); closeDrawer() }} onKeyDown={(event) => { if (event.key === 'Escape') { event.preventDefault(); closeDrawer() } }} onClose={closeDrawer}>
      <button className="drawer-backdrop" onClick={closeDrawer} tabIndex={-1} aria-label="Cerrar carrito" />
      <aside className="cart-drawer">
        <header><div><p className="eyebrow">Tu selección</p><h2 id="drawer-title">Carrito</h2></div><button ref={closeButtonRef} className="icon-button" onClick={closeDrawer} aria-label="Cerrar carrito"><Icon name="close" /></button></header>
        <div className="drawer-content">{items.length ? items.map((item) => <CartLine key={item.id} item={item} compact />) : <EmptyState />}</div>
        {items.length > 0 && <footer><div><span>Subtotal</span><strong>{formatCOP(subtotal)}</strong></div><Link className="button primary full" to="/carrito" onClick={closeDrawer}>Ver carrito <Icon name="arrow" /></Link></footer>}
      </aside>
    </dialog>
  )
}

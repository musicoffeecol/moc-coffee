import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { Icon } from './Icon'

const nav = [
  ['Nuestros cafés', '/tienda'],
  ['Experiencias', '/experiencias'],
  ['Nuestro café', '/nuestro-cafe'],
  ['Historias', '/historias'],
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, openDrawer } = useCart()
  const { pathname } = useLocation()
  return (
    <header className={`site-header ${pathname === '/' ? '' : 'is-solid'}`}>
      <Link className="brand-lockup" to="/" aria-label="MØC Coffee Mood Music, ir al inicio">
        <span>MØC</span>
        <small>Coffee · Mood · Music</small>
      </Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {nav.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button cart-button" onClick={openDrawer} aria-label={`Abrir carrito, ${count} productos`}>
          <Icon name="bag" /><span>{count}</span>
        </button>
        <button className="icon-button menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación móvil">
        {nav.map(([label, path], index) => <NavLink key={path} to={path} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</NavLink>)}
        <NavLink to="/contacto" onClick={() => setMenuOpen(false)}><span>05</span>Contacto</NavLink>
      </nav>
    </header>
  )
}

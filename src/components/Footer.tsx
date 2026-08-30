import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-mark" to="/">MØC</Link>
        <p>Coffee • Mood • Music</p>
      </div>
      <div className="footer-links">
        <a href="https://www.instagram.com/moc.coffee.bta/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">Spotify</a>
        <Link to="/contacto">Contacto</Link>
        <Link to="/tienda">Nuestros cafés</Link>
      </div>
      <p className="footer-note">MVP demostrativo · Bogotá, Colombia · © 2026 MØC</p>
    </footer>
  )
}

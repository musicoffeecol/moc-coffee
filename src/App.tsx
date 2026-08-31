import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CartDrawer } from './components/CartDrawer'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Toast } from './components/Toast'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { CoffeePage } from './pages/CoffeePage'
import { ContactPage } from './pages/ContactPage'
import { ExperiencesPage } from './pages/ExperiencesPage'
import { HomePage } from './pages/HomePage'
import { MoodLabPage } from './pages/MoodLabPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ShopPage } from './pages/ShopPage'
import { StoriesPage } from './pages/StoriesPage'
import { StoryPage } from './pages/StoryPage'

function ScrollAndTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const titles: Record<string, string> = { '/': 'MØC Coffee | Coffee • Mood • Music', '/mood-lab': 'Nuestros cafés | MØC Coffee', '/tienda': 'Nuestros cafés | MØC Coffee', '/experiencias': 'Experiencias | MØC Coffee', '/nuestro-cafe': 'Nuestro café | MØC Coffee', '/historias': 'Historias | MØC Coffee', '/contacto': 'Contacto | MØC Coffee', '/carrito': 'Carrito | MØC Coffee', '/checkout': 'Checkout simulado | MØC Coffee' }
    document.title = titles[pathname] ?? (pathname.startsWith('/tienda/') ? 'Producto | MØC Coffee' : pathname.startsWith('/historias/') ? 'Historia | MØC Coffee' : 'MØC Coffee')
  }, [pathname])
  return null
}

export function App() {
  return (
    <div className="app-shell">
      <ScrollAndTitle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mood-lab" element={<MoodLabPage />} />
        <Route path="/tienda" element={<ShopPage />} />
        <Route path="/tienda/:slug" element={<ProductPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/experiencias" element={<ExperiencesPage />} />
        <Route path="/nuestro-cafe" element={<CoffeePage />} />
        <Route path="/historias" element={<StoriesPage />} />
        <Route path="/historias/:slug" element={<StoryPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  )
}

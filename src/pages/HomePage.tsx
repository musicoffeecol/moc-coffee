import { useState } from 'react'
import { Link } from 'react-router-dom'
import { experiences, stories } from '../data/content'
import { createThoughtSelections, moods } from '../data/moods'
import { products } from '../data/products'
import type { Mood } from '../types'
import { ExperienceCard } from '../components/ExperienceCard'
import { Icon } from '../components/Icon'
import { MoodResult } from '../components/MoodResult'
import { MoodSelector } from '../components/MoodSelector'
import { NewsletterForm } from '../components/NewsletterForm'
import { ProductGrid } from '../components/ProductGrid'
import { StoryCard } from '../components/StoryCard'

export function HomePage() {
  const [selectedMood, setSelectedMood] = useState<Mood>(moods[0])
  const [thoughts] = useState(createThoughtSelections)
  return (
    <>
      <main>
        <section className="hero section-dark">
          <div className="hero-copy">
            <h1>Tu café.<br />Tu canción.<br /><em>Tu momento.</em></h1>
            <a className="scroll-cue" href="#mood-home"><span>Explorar</span><Icon name="arrow" /></a>
          </div>
          <span className="hero-city">Bogotá · Colombia</span>
        </section>

        <section id="mood-home" className="mood-home section-cream">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Mood check · 01</p><h2>Elige cómo quieres sentirte</h2></div>
            <p>Nosotros seleccionamos un café, una canción y pequeños detalles para acompañar ese momento.</p>
          </div>
          <MoodSelector moods={moods} selectedId={selectedMood.id} onSelect={setSelectedMood} />
          <MoodResult mood={selectedMood} thought={thoughts[selectedMood.id]} />
        </section>

        <section className="featured-products section-light">
          <div className="section-heading split-heading"><div><p className="eyebrow">La selección · 02</p><h2>Cafés con intención.</h2></div><Link className="text-link" to="/tienda">Ver nuestros cafés <Icon name="arrow" /></Link></div>
          <ProductGrid products={products.filter((product) => product.featured).slice(0, 3)} />
          <p className="data-disclaimer">Selección y precios de demostración. La información comercial definitiva está por confirmar.</p>
        </section>

        <section className="month-feature section-copper">
          <div className="month-number">07</div>
          <div><p className="eyebrow">Café del mes</p><h2>Órbita</h2><p>Un origen invitado para salir de la rutina. Cada mes, un perfil distinto y una nueva playlist.</p><Link className="button dark" to="/tienda/edicion-julio">Conocer la edición <Icon name="arrow" /></Link></div>
          <blockquote>“Lo inesperado también puede sentirse familiar.”</blockquote>
        </section>

        <section className="experience-preview section-cream">
          <div className="section-heading split-heading"><div><p className="eyebrow">Fuera de la pantalla · 03</p><h2>Experiencias para compartir.</h2></div><p>El café como punto de encuentro: pequeño, atento y diseñado alrededor de las personas.</p></div>
          <div className="experience-grid">{experiences.filter((experience) => ['cata', 'coffee-party'].includes(experience.id)).map((experience, index) => <ExperienceCard key={experience.id} experience={experience} index={index} />)}</div>
          <Link className="button secondary" to="/experiencias">Ver experiencias</Link>
        </section>

        <section className="mobile-point section-dark">
          <div className="point-art"><span className="pulse-dot" /><div className="city-lines" /></div>
          <div><p className="eyebrow">Punto móvil · Bogotá</p><h2>Hoy servimos<br />en movimiento.</h2><p>La ubicación exacta cambia. La publicamos cada mañana en Instagram.</p><a className="button primary" href="https://www.instagram.com/moc.coffee.bta/" target="_blank" rel="noreferrer"><Icon name="pin" /> Encontrarnos hoy</a></div>
        </section>

        <section className="stories-preview section-light">
          <div className="section-heading split-heading"><div><p className="eyebrow">Historias · 04</p><h2>Para leer con café.</h2></div><Link className="text-link" to="/historias">Todas las historias <Icon name="arrow" /></Link></div>
          <div className="story-grid">{stories.slice(0, 3).map((story, index) => <StoryCard key={story.slug} story={story} index={index} />)}</div>
        </section>

        <section className="newsletter section-cream"><div><p className="eyebrow">Una nota ocasional</p><h2>Tu próxima canción<br />puede llegar por correo.</h2></div><NewsletterForm /></section>
      </main>
    </>
  )
}

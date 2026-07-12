import { useState } from 'react'
import { Link } from 'react-router-dom'
import { experiences, stories } from '../data/content'
import { moods } from '../data/moods'
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
  return (
    <>
      <main>
        <section className="hero section-dark">
          <div className="hero-copy">
            <p className="hero-kicker">Coffee <span /> Mood <span /> Music</p>
            <h1>Un café.<br />Una canción.<br /><em>Tu momento.</em></h1>
            <p className="hero-lead">No elegimos por categorías. Empezamos por cómo quieres sentir tu día.</p>
            <a className="scroll-cue" href="#mood-home"><span>Explorar</span><Icon name="arrow" /></a>
          </div>
          <div className="hero-brand-visual" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}brand/moc-logo-2.png`} alt="" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <span className="vertical-note">Bogotá · Colombia</span>
          </div>
        </section>

        <section id="mood-home" className="mood-home section-cream">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Mood check · 01</p><h2>¿Cómo te sientes hoy?</h2></div>
            <p>Elige una intención. Nosotros conectamos café, música y un ritual breve para acompañarla.</p>
          </div>
          <MoodSelector moods={moods} selectedId={selectedMood.id} onSelect={setSelectedMood} />
          <MoodResult mood={selectedMood} />
        </section>

        <section className="flow-section section-dark">
          <div className="section-heading"><p className="eyebrow">La experiencia MØC · 02</p><h2>Cuatro gestos.<br />Un momento distinto.</h2></div>
          <div className="ritual-flow">
            {[['coffee', 'Café', 'Un origen elegido por su perfil.'], ['music', 'Playlist', 'Un ritmo que acompaña tu intención.'], ['spark', 'Frase', 'Una idea breve, sin ruido.'], ['play', 'Momento', 'El espacio para estar donde estás.']].map(([icon, title, copy], index) => (
              <div key={title}><span className="flow-number">0{index + 1}</span><Icon name={icon as 'coffee'} size={30} /><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </section>

        <section className="featured-products section-light">
          <div className="section-heading split-heading"><div><p className="eyebrow">La selección · 03</p><h2>Cafés con intención.</h2></div><Link className="text-link" to="/tienda">Ver toda la tienda <Icon name="arrow" /></Link></div>
          <ProductGrid products={products.filter((product) => product.featured).slice(0, 3)} />
          <p className="data-disclaimer">Selección y precios de demostración. La información comercial definitiva está por confirmar.</p>
        </section>

        <section className="month-feature section-copper">
          <div className="month-number">07</div>
          <div><p className="eyebrow">Café del mes</p><h2>Órbita</h2><p>Un origen invitado para salir de la rutina. Cada mes, un perfil distinto y una nueva playlist.</p><Link className="button dark" to="/tienda/edicion-julio">Conocer la edición <Icon name="arrow" /></Link></div>
          <blockquote>“Lo inesperado también puede sentirse familiar.”</blockquote>
        </section>

        <section className="experience-preview section-cream">
          <div className="section-heading split-heading"><div><p className="eyebrow">Fuera de la pantalla · 04</p><h2>Experiencias para compartir.</h2></div><p>El café como punto de encuentro: pequeño, atento y diseñado alrededor de las personas.</p></div>
          <div className="experience-grid">{experiences.slice(0, 2).map((experience, index) => <ExperienceCard key={experience.id} experience={experience} index={index} />)}</div>
          <Link className="button secondary" to="/experiencias">Ver experiencias</Link>
        </section>

        <section className="mobile-point section-dark">
          <div className="point-art"><span className="pulse-dot" /><div className="city-lines" /></div>
          <div><p className="eyebrow">Punto móvil · Bogotá</p><h2>Hoy servimos<br />en movimiento.</h2><p>La ubicación exacta cambia. La publicamos cada mañana en Instagram.</p><a className="button primary" href="https://www.instagram.com/moc.coffee.bta/" target="_blank" rel="noreferrer"><Icon name="pin" /> Encontrarnos hoy</a></div>
        </section>

        <section className="stories-preview section-light">
          <div className="section-heading split-heading"><div><p className="eyebrow">Historias · 05</p><h2>Para leer con café.</h2></div><Link className="text-link" to="/historias">Todas las historias <Icon name="arrow" /></Link></div>
          <div className="story-grid">{stories.slice(0, 3).map((story, index) => <StoryCard key={story.slug} story={story} index={index} />)}</div>
        </section>

        <section className="newsletter section-cream"><div><p className="eyebrow">Una nota ocasional</p><h2>Tu próxima canción<br />puede llegar por correo.</h2></div><NewsletterForm /></section>
      </main>
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { createThoughtSelections, moods } from '../data/moods'
import { journeyPath, readMoment, selectMoment } from '../coffeeJourney'
import { CoffeeCatalog } from '../components/CoffeeCatalog'
import { Icon } from '../components/Icon'
import { MoodResult } from '../components/MoodResult'
import { MoodSelector } from '../components/MoodSelector'
import type { Mood } from '../types'

export function ShopPage() {
  const [params, setParams] = useSearchParams()
  const [thoughts] = useState(createThoughtSelections)
  const view = params.get('vista') === 'catalogo' ? 'catalogo' : 'mood'
  const restored = readMoment(moods, params)
  const selected = restored?.mood ?? moods.find((mood) => mood.id === params.get('mood')) ?? moods[0]
  const thought = restored?.thought ?? thoughts[selected.id]
  const selection = selectMoment(selected, thought)
  const previousView = useRef(view)

  useEffect(() => {
    if (view !== 'mood' || readMoment(moods, params)) return
    const next = new URLSearchParams(params)
    next.set('mood', selected.id)
    next.set('pensamiento', String(selected.thoughts.indexOf(thought)))
    setParams(next, { replace: true })
  }, [params, selected, thought, setParams, view])

  useEffect(() => {
    if (previousView.current === view) return
    previousView.current = view
    const heading = document.getElementById(view === 'mood' ? 'guide-title' : 'catalog-title')
    heading?.focus({ preventScroll: true })
    heading?.scrollIntoView({ block: 'start' })
  }, [view])

  const chooseMood = (mood: Mood) => {
    const next = new URLSearchParams({ vista: 'mood', mood: mood.id, pensamiento: String(mood.thoughts.indexOf(thoughts[mood.id])) })
    setParams(next, { replace: true })
  }

  return (
    <main>
      <section className="page-hero shop-hero section-dark"><div><p className="eyebrow">Nuestros cafés · Coffee · Mood · Music</p><h1>Encuentra tu café.<br /><em>A tu manera.</em></h1></div><p>Empieza por cómo quieres sentirte o explora la selección. Dos formas de llegar a tu próxima taza.</p></section>
      <nav className="coffee-paths section-cream" aria-label="Cómo quieres encontrar tu café">
        <Link to={journeyPath('mood', selection)} className={`coffee-path ${view === 'mood' ? 'is-active' : ''}`} aria-current={view === 'mood' ? 'page' : undefined}>
          <Icon name="spark" size={30} /><div><span className="path-label">El recorrido MØC</span><strong>Encuentra tu café<br />según tu momento</strong><p>Elige una intención. Descubre un café, una playlist, un pensamiento y un ritual.</p><span className="path-action">{view === 'mood' ? 'Estás aquí · Elige tu mood' : 'Elegir mi mood'} <Icon name="arrow" size={18} /></span></div>
        </Link>
        <Link to={journeyPath('catalogo', selection)} className={`coffee-path ${view === 'catalogo' ? 'is-active' : ''}`} aria-current={view === 'catalogo' ? 'page' : undefined}>
          <Icon name="coffee" size={30} /><div><span className="path-label">La selección completa</span><strong>Explora todos<br />los cafés</strong><p>Recorre los perfiles, filtra y compara. Tú eliges por dónde empezar.</p><span className="path-action">{view === 'catalogo' ? 'Estás aquí · Catálogo' : 'Ir al catálogo'} <Icon name="arrow" size={18} /></span></div>
        </Link>
      </nav>
      <p className="sr-only" role="status">{view === 'mood' ? 'Recorrido por mood seleccionado.' : 'Catálogo completo seleccionado.'}</p>
      {view === 'mood' ? <section className="coffee-guide section-cream" aria-labelledby="guide-title">
        <ol className="journey-progress" aria-label="Tu recorrido"><li><span>01</span> Elige una intención</li><li><span>02</span> Descubre tu combinación</li><li><span>03</span> Prepara tu café</li></ol>
        <div className="section-heading split-heading"><div><p className="eyebrow">01 · Tu punto de partida</p><h2 id="guide-title" tabIndex={-1}>Elige cómo<br />quieres sentirte.</h2></div><p>No es un test. Es una intención para este momento; puedes cambiarla cuando quieras.</p></div>
        <MoodSelector moods={moods} selectedId={selected.id} onSelect={chooseMood} />
        <div className="guide-result-heading"><p className="eyebrow">02 · Café, música y pequeños detalles</p><p>Tu combinación para <strong>{selected.name.toLowerCase()}</strong>. En el siguiente paso eliges presentación y preparación.</p></div>
        <MoodResult mood={selected} thought={thought} />
        <div className="guide-exit"><p>¿Prefieres comparar otros perfiles? Tu combinación seguirá aquí cuando vuelvas.</p><Link className="text-link" to={journeyPath('catalogo', selection)}>Explorar el catálogo <Icon name="arrow" /></Link></div>
        <p className="lab-note">Recomendaciones y playlists demostrativas. Si agregas un café, su combinación se conserva solo en este navegador junto con el carrito. No se realizan pagos.</p>
      </section> : <CoffeeCatalog />}
    </main>
  )
}

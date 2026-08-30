import { useState } from 'react'
import { createThoughtSelections, moods } from '../data/moods'
import type { Mood } from '../types'
import { MoodResult } from '../components/MoodResult'
import { MoodSelector } from '../components/MoodSelector'

export function MoodLabPage() {
  const [selected, setSelected] = useState<Mood>(moods[2])
  const [thoughts] = useState(createThoughtSelections)
  return (
    <main className="mood-lab-page">
      <section className="page-hero section-dark compact-hero">
        <p className="eyebrow">Mood Lab · Experimento 01</p>
        <h1>Empieza por<br /><em>cómo quieres estar.</em></h1>
        <p>No hay respuestas correctas. Solo una combinación distinta para este momento.</p>
      </section>
      <section className="mood-lab-workspace section-cream" style={{ '--mood-accent': selected.accent } as React.CSSProperties}>
        <div className="lab-step"><span>01</span><div><p className="eyebrow">Selecciona</p><h2>Tu intención de hoy</h2></div></div>
        <MoodSelector moods={moods} selectedId={selected.id} onSelect={setSelected} />
        <div className="lab-step"><span>02</span><div><p className="eyebrow">Recibe</p><h2>Tu combinación</h2></div></div>
        <MoodResult mood={selected} thought={thoughts[selected.id]} />
        <p className="lab-note">Las recomendaciones y playlists son demostrativas. No usamos ni almacenamos datos personales para generar esta combinación.</p>
      </section>
    </main>
  )
}

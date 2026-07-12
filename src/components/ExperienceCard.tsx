import { Link } from 'react-router-dom'
import type { Experience } from '../types'
import { Icon } from './Icon'

export function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <article className="experience-card">
      <div className="experience-art" role="img" aria-label={`Ambiente conceptual para ${experience.name}`}><span>0{index + 1}</span><Icon name={index === 1 ? 'coffee' : 'spark'} size={40} /></div>
      <div><p className="eyebrow">{experience.audience}</p><h3>{experience.name}</h3><p>{experience.description}</p><dl><div><dt>Capacidad</dt><dd>{experience.capacity}</dd></div><div><dt>Incluye</dt><dd>{experience.includes.join(' · ')}</dd></div></dl><Link className="text-link" to={`/contacto?experiencia=${experience.id}`}>Solicitar información <Icon name="arrow" /></Link></div>
    </article>
  )
}

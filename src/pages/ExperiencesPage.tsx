import { experiences } from '../data/content'
import { ExperienceCard } from '../components/ExperienceCard'

export function ExperiencesPage() {
  return (
    <main>
      <section className="page-hero section-dark"><div><p className="eyebrow">Experiencias · Bogotá</p><h1>El café como<br /><em>punto de encuentro.</em></h1></div><p>Catas, barras y rituales que se adaptan al contexto sin perder atención al detalle.</p></section>
      <section className="experiences-page section-cream"><div className="experience-grid">{experiences.map((experience, index) => <ExperienceCard key={experience.id} experience={experience} index={index} />)}</div><p className="data-disclaimer">Capacidades, contenidos, precios y disponibilidad sujetos a confirmación. Esta versión no realiza reservas.</p></section>
    </main>
  )
}

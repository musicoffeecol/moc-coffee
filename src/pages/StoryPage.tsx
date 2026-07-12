import { Link, useParams } from 'react-router-dom'
import { stories } from '../data/content'
import { Icon } from '../components/Icon'
import { NotFoundPage } from './NotFoundPage'

export function StoryPage() {
  const { slug } = useParams()
  const story = stories.find((item) => item.slug === slug)
  if (!story) return <NotFoundPage />
  return (
    <main className="story-page section-cream">
      <article>
        <Link className="back-link" to="/historias"><Icon name="arrow" /> Volver a historias</Link>
        <header><p className="eyebrow">{story.category} · {story.readTime}</p><h1>{story.title}</h1><p>{story.excerpt}</p></header>
        <div className="story-hero-art"><span>MØC / {story.category}</span></div>
        <div className="story-body">{story.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<blockquote>Una taza no cambia el día por sí sola. El ritual puede cambiar cómo lo atraviesas.</blockquote><p className="data-disclaimer">Contenido editorial demostrativo. Los datos sobre productores u ofertas comerciales se publicarán solo cuando estén confirmados.</p></div>
      </article>
    </main>
  )
}

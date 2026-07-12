import { Link } from 'react-router-dom'
import type { Story } from '../types'
import { Icon } from './Icon'

export function StoryCard({ story, index, featured = false }: { story: Story; index: number; featured?: boolean }) {
  return (
    <article className={`story-card ${featured ? 'is-featured' : ''}`}>
      <Link className="story-art" to={`/historias/${story.slug}`} aria-label={`Leer ${story.title}`}><span>0{index + 1}</span><div>{story.category}</div></Link>
      <div className="story-copy"><p className="eyebrow">{story.category} · {story.readTime}</p><h3><Link to={`/historias/${story.slug}`}>{story.title}</Link></h3><p>{story.excerpt}</p><Link className="text-link" to={`/historias/${story.slug}`}>Leer historia <Icon name="arrow" /></Link></div>
    </article>
  )
}

import { stories } from '../data/content'
import { StoryCard } from '../components/StoryCard'

export function StoriesPage() {
  const featured = stories.find((story) => story.featured) ?? stories[0]
  return (
    <main>
      <section className="page-hero section-dark"><div><p className="eyebrow">Historias · Café, mood y música</p><h1>Ideas para<br /><em>leer despacio.</em></h1></div><p>No hacemos contenido por llenar una página. Buscamos conexiones útiles entre una taza, una ciudad y lo que suena alrededor.</p></section>
      <section className="stories-page section-light"><StoryCard story={featured} index={1} featured /><div className="story-grid">{stories.filter((story) => story.slug !== featured.slug).map((story, index) => <StoryCard key={story.slug} story={story} index={index + 2} />)}</div></section>
    </main>
  )
}

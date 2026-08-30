import { Icon } from '../components/Icon'

const pillars = [
  ['Origen', 'El territorio no es una etiqueta. Es clima, altura, decisiones y trabajo que deben documentarse con precisión.'],
  ['Proceso', 'Lavado, honey o natural cambian la forma en que la fruta y la fermentación aparecen en la taza.'],
  ['Trazabilidad', 'Publicaremos nombres, lotes y relaciones comerciales solo cuando la información esté confirmada.'],
  ['Escucha', 'Pensamos el café y la música como lenguajes: ambos tienen ritmo, capas, pausas y memoria.'],
]

export function CoffeePage() {
  return (
    <main>
      <section className="coffee-manifesto section-dark"><div className="manifesto-mark">MØC</div><div><p className="eyebrow">Nuestro café</p><h1>Territorio<br />que se puede<br /><em>escuchar.</em></h1><p>El café de especialidad empieza antes de la taza. Nuestra tarea es hacer visible esa cadena sin convertirla en una promesa vacía.</p></div></section>
      <section className="coffee-pillars section-cream"><div className="section-heading split-heading"><div><p className="eyebrow">Principios · no certificados</p><h2>Lo que queremos<br />hacer bien.</h2></div><p>Estos son criterios editoriales del MVP, no afirmaciones sobre proveedores o certificaciones actuales.</p></div><div className="pillar-grid">{pillars.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><Icon name={index === 3 ? 'music' : 'coffee'} /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="flavor-wheel-section section-light">
        <div className="flavor-wheel-copy"><p className="eyebrow">Mapa sensorial</p><h2>Ponerle palabras<br />a una taza.</h2><p>La rueda de sabores ayuda a pasar de una impresión general a descriptores más precisos. Empieza en el centro, identifica una familia y avanza hacia afuera sin forzar una respuesta.</p><p>No es una prueba ni una lista que deba completarse: es una guía para entrenar la atención y conversar sobre lo que percibimos.</p></div>
        <figure><img src={`${import.meta.env.BASE_URL}brand/moc-flavor-wheel.png`} alt="Rueda de sabores MØC con familias como afrutado, floral, dulce, cacao, especias, tostado, vegetal y fermentado" /><figcaption>Referencia visual suministrada por MØC, basada en el vocabulario sensorial de café. Su uso no implica una certificación comercial.</figcaption></figure>
      </section>
      <section className="process-band section-copper"><p className="eyebrow">De origen a momento</p><div>{['Territorio', 'Cosecha', 'Proceso', 'Tueste', 'Preparación', 'Escucha'].map((step, index) => <span key={step}><small>0{index + 1}</small>{step}</span>)}</div></section>
    </main>
  )
}

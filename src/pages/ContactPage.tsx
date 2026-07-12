import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Icon } from '../components/Icon'

export function ContactPage() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }
  return (
    <main className="contact-page section-dark">
      <section className="contact-intro"><p className="eyebrow">Contacto · Bogotá</p><h1>Hablemos de<br /><em>tu momento.</em></h1><p>Cuéntanos qué experiencia imaginas. Este formulario es demostrativo y no envía datos.</p><div className="contact-links"><a href="https://www.instagram.com/moc.coffee.bta/" target="_blank" rel="noreferrer">Instagram <Icon name="arrow" /></a><a href="mailto:hola@moc.coffee">hola@moc.coffee <small>Dirección demostrativa</small></a></div></section>
      <form className="contact-form" onSubmit={submit}>
        <label className="field"><span>Nombre</span><input required /></label>
        <label className="field"><span>Correo</span><input type="email" required /></label>
        <label className="field"><span>Me interesa</span><select defaultValue={params.get('experiencia') ?? 'general'}><option value="general">Conocer MØC</option><option value="cata">Cata sensorial</option><option value="barra">Barra para eventos</option><option value="empresas">Experiencia empresarial</option><option value="privadas">Experiencia privada</option></select></label>
        <label className="field"><span>Mensaje</span><textarea rows={5} required /></label>
        <button className="button primary" type="submit">Preparar mensaje <Icon name="arrow" /></button>
        <p aria-live="polite">{sent ? 'Mensaje preparado. El envío real estará disponible próximamente; no se transmitieron datos.' : 'Sin envíos automáticos en este MVP.'}</p>
      </form>
    </main>
  )
}

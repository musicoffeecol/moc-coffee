import { useState, type FormEvent } from 'react'

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true) }
  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label htmlFor="newsletter-email">Correo electrónico</label>
      <div><input id="newsletter-email" type="email" placeholder="tu@correo.com" required /><button className="button primary" type="submit">Quiero escuchar</button></div>
      <p aria-live="polite">{submitted ? 'Listo. Este MVP no envía datos; la suscripción real estará disponible próximamente.' : 'Sin ruido. Solo historias, café y música cuando valga la pena.'}</p>
    </form>
  )
}

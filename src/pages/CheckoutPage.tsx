import { useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { CartSummary } from '../components/CartSummary'
import { Icon } from '../components/Icon'

type Errors = Record<string, string>

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const [errors, setErrors] = useState<Errors>({})
  const [completed, setCompleted] = useState(false)
  const [orderCount, setOrderCount] = useState(0)

  if (!items.length && !completed) return <Navigate to="/carrito" replace />

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const required = ['name', 'email', 'phone', 'address', 'city', 'delivery']
    const nextErrors: Errors = {}
    for (const field of required) if (!String(form.get(field) ?? '').trim()) nextErrors[field] = 'Este campo es obligatorio.'
    const email = String(form.get('email') ?? '')
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Ingresa un correo válido.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setOrderCount(items.reduce((total, item) => total + item.quantity, 0))
    setCompleted(true)
    clearCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (completed) return (
    <main className="checkout-complete section-dark"><section><span className="complete-mark"><Icon name="coffee" size={42} /></span><p className="eyebrow">Solicitud simulada</p><h1>Tu momento<br />está casi listo.</h1><p>Registramos localmente un resumen de {orderCount} producto{orderCount === 1 ? '' : 's'} por un total de demostración de {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(subtotal)}.</p><div className="payment-notice">El pago en línea estará disponible próximamente.</div><p className="privacy-note">No se envió información a ningún servidor y no se almacenaron los datos del formulario.</p><Link className="button primary" to="/">Volver al inicio <Icon name="arrow" /></Link></section></main>
  )

  return (
    <main className="checkout-page section-cream">
      <section className="checkout-inner">
        <div className="checkout-heading"><p className="eyebrow">Checkout · Simulación</p><h1>¿Dónde ocurre<br />tu próximo momento?</h1><p>Completa los datos para ver el resumen. Nada se enviará ni se cobrará.</p></div>
        <form className="checkout-form" onSubmit={submit} noValidate>
          <div className="form-section"><span>01</span><h2>Contacto</h2></div>
          <div className="field-grid">
            <Field name="name" label="Nombre completo" error={errors.name} />
            <Field name="email" label="Correo" type="email" error={errors.email} />
            <Field name="phone" label="Teléfono" type="tel" error={errors.phone} />
          </div>
          <div className="form-section"><span>02</span><h2>Entrega</h2></div>
          <div className="field-grid">
            <Field name="address" label="Dirección" error={errors.address} />
            <Field name="city" label="Ciudad" defaultValue="Bogotá" error={errors.city} />
          </div>
          <fieldset className="delivery-options"><legend>Método de entrega</legend><label><input type="radio" name="delivery" value="bogota" /> <span><strong>Envío en Bogotá</strong><small>Tarifa por confirmar</small></span></label><label><input type="radio" name="delivery" value="pickup" /> <span><strong>Recoger en punto MØC</strong><small>Ubicación coordinada posteriormente</small></span></label>{errors.delivery && <p className="field-error">{errors.delivery}</p>}</fieldset>
          <label className="field full-field"><span>Notas del pedido <small>Opcional</small></span><textarea name="notes" rows={4} placeholder="Algo que debamos saber sobre tu momento" /></label>
          <div className="checkout-submit"><button className="button primary full" type="submit">Revisar solicitud <Icon name="arrow" /></button><p>No solicitamos datos bancarios.</p></div>
        </form>
        <CartSummary checkout={false} />
      </section>
    </main>
  )
}

function Field({ name, label, type = 'text', error, defaultValue }: { name: string; label: string; type?: string; error?: string; defaultValue?: string }) {
  return <label className={`field ${error ? 'has-error' : ''}`}><span>{label}</span><input name={name} type={type} defaultValue={defaultValue} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />{error && <small id={`${name}-error`} className="field-error">{error}</small>}</label>
}

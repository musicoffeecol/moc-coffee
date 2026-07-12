import { clampQuantity } from '../utils'
import { Icon } from './Icon'

export function QuantitySelector({ value, onChange, label = 'Cantidad' }: { value: number; onChange: (value: number) => void; label?: string }) {
  return (
    <div className="quantity-selector" aria-label={label}>
      <button type="button" onClick={() => onChange(clampQuantity(value - 1))} aria-label="Disminuir cantidad"><Icon name="minus" size={16} /></button>
      <span aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(clampQuantity(value + 1))} aria-label="Aumentar cantidad"><Icon name="plus" size={16} /></button>
    </div>
  )
}

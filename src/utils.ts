export const formatCOP = (value: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)

export const clampQuantity = (value: number) => Math.min(99, Math.max(1, Math.trunc(value) || 1))

export const cartStorageKey = 'moc-coffee-cart-v1'

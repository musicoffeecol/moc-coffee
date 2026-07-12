import type { Product } from '../types'

export const productDisclaimer =
  'Los productos, productores, precios y disponibilidad son datos de demostración.'

export const products: Product[] = [
  {
    id: 'huila-luz', slug: 'huila-luz', name: 'Huila Luz',
    shortDescription: 'Una taza limpia para empezar con claridad.',
    description: 'Perfil demostrativo inspirado en cafés lavados del Huila: luminoso, balanceado y fácil de recorrer durante el día.',
    category: 'Café de especialidad', price: 48000, images: ['luz', 'luz-detail'],
    origin: 'Colombia', region: 'Huila', altitude: '1.700–1.900 m s. n. m.', variety: 'Caturra y Castillo', process: 'Lavado',
    tastingNotes: ['Panela', 'Mandarina', 'Chocolate'], presentations: ['250 g', '500 g'],
    grindOptions: ['Grano entero', 'Espresso', 'V60', 'Aeropress', 'Prensa francesa'],
    recommendedMoods: ['Energía', 'Enfoque'], playlistUrl: 'https://open.spotify.com/', available: true, featured: true,
  },
  {
    id: 'tolima-pulso', slug: 'tolima-pulso', name: 'Tolima Pulso',
    shortDescription: 'Fruta madura y ritmo para salir de lo predecible.',
    description: 'Una interpretación demostrativa de un café natural del Tolima, de cuerpo envolvente y final prolongado.',
    category: 'Café de especialidad', price: 54000, images: ['pulso', 'pulso-detail'],
    origin: 'Colombia', region: 'Tolima', altitude: '1.650–1.850 m s. n. m.', variety: 'Variedades mixtas', process: 'Natural',
    tastingNotes: ['Frutos rojos', 'Cacao', 'Ciruela'], presentations: ['250 g', '500 g'],
    grindOptions: ['Grano entero', 'Espresso', 'V60', 'Aeropress', 'Prensa francesa'],
    recommendedMoods: ['Inspiración', 'Sorpresa'], playlistUrl: 'https://open.spotify.com/', available: true, featured: true, isNew: true,
  },
  {
    id: 'cundinamarca-pausa', slug: 'cundinamarca-pausa', name: 'Cundinamarca Pausa',
    shortDescription: 'Dulzor sereno para bajar el volumen.',
    description: 'Perfil demostrativo honey, pensado como una taza dulce, redonda y sin prisa para el final de la tarde.',
    category: 'Café de especialidad', price: 51000, images: ['pausa', 'pausa-detail'],
    origin: 'Colombia', region: 'Cundinamarca', altitude: '1.600–1.800 m s. n. m.', variety: 'Castillo', process: 'Honey',
    tastingNotes: ['Miel', 'Durazno', 'Nuez'], presentations: ['250 g', '500 g'],
    grindOptions: ['Grano entero', 'Espresso', 'V60', 'Aeropress', 'Prensa francesa'],
    recommendedMoods: ['Calma'], playlistUrl: 'https://open.spotify.com/', available: true,
  },
  {
    id: 'edicion-julio', slug: 'edicion-julio', name: 'Órbita — Edición del mes',
    shortDescription: 'Un origen invitado para escuchar con atención.',
    description: 'Selección mensual demostrativa. La ficha definitiva dependerá del café y del productor confirmados para cada edición.',
    category: 'Café del mes', price: 59000, images: ['orbita', 'orbita-detail'],
    origin: 'Colombia', region: 'Origen por confirmar', process: 'Edición limitada',
    tastingNotes: ['Perfil por descubrir', 'Dulzor', 'Fruta'], presentations: ['250 g'],
    grindOptions: ['Grano entero', 'Espresso', 'V60', 'Aeropress', 'Prensa francesa'],
    recommendedMoods: ['Sorpresa', 'Inspiración'], playlistUrl: 'https://open.spotify.com/', available: true, featured: true, isNew: true,
  },
  {
    id: 'suscripcion-ritmo', slug: 'suscripcion-ritmo', name: 'Ritmo mensual',
    shortDescription: 'Un café distinto para abrir cada mes.',
    description: 'Suscripción demostrativa con una selección mensual de café. Frecuencia, origen y condiciones finales están por definir.',
    category: 'Suscripciones', price: 56000, images: ['ritmo', 'ritmo-detail'],
    origin: 'Colombia', region: 'Rotativa', process: 'Selección mensual', tastingNotes: ['Curaduría mensual'], presentations: ['250 g', '500 g'],
    grindOptions: ['Grano entero', 'Espresso', 'V60', 'Aeropress', 'Prensa francesa'],
    recommendedMoods: ['Sorpresa'], available: true,
  },
  {
    id: 'vaso-termico', slug: 'vaso-termico', name: 'Vaso térmico MØC',
    shortDescription: 'Tu ritual, en movimiento.',
    description: 'Accesorio conceptual reutilizable para acompañar el punto móvil. Materiales y especificaciones son demostrativos.',
    category: 'Accesorios', price: 72000, images: ['vaso', 'vaso-detail'],
    origin: 'Diseño MØC', region: 'Bogotá', process: 'Accesorio', tastingNotes: ['No aplica'], presentations: ['350 ml'],
    grindOptions: [], recommendedMoods: ['Energía', 'Enfoque'], available: true,
  },
  {
    id: 'gift-card', slug: 'gift-card', name: 'Gift Card — Un momento',
    shortDescription: 'Regala la libertad de elegir el mood.',
    description: 'Tarjeta digital demostrativa para redimir en productos o experiencias MØC. Condiciones finales por definir.',
    category: 'Gift Cards', price: 100000, images: ['gift', 'gift-detail'],
    origin: 'Digital', region: 'Colombia', process: 'Gift Card', tastingNotes: ['Elección libre'], presentations: ['$100.000 COP'],
    grindOptions: [], recommendedMoods: ['Sorpresa'], available: true,
  },
]

export const findProduct = (idOrSlug: string) =>
  products.find((product) => product.id === idOrSlug || product.slug === idOrSlug)

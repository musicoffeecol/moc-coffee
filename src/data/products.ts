import type { Product } from '../types'

export const productDisclaimer =
  'Los productos, productores, fechas de tueste, precios y disponibilidad son datos de demostración.'

const preparationOptions = [
  'Grano entero (Moler justo antes de preparar)',
  'Máquina Espresso',
  'V60, Moka italiana',
  'Aeropress, Cafetera de filtro (goteo)',
  'Chemex',
  'Prensa francesa, Cold Brew',
]

const pendingProducer = {
  name: 'Productor por confirmar',
  farm: 'Finca por confirmar',
  story: 'Publicaremos aquí la historia de la finca y de las personas detrás del lote cuando el café haya sido confirmado.',
}

export const products: Product[] = [
  {
    id: 'huila-luz', slug: 'huila-luz', name: 'Huila Luz',
    shortDescription: 'Una taza limpia para empezar con claridad.',
    description: 'Perfil demostrativo inspirado en cafés lavados del Huila: luminoso, balanceado y fácil de recorrer durante el día.',
    category: 'Café de especialidad', price: 48000, images: ['luz', 'luz-detail'],
    origin: 'Colombia', region: 'Huila', locationDetail: 'Municipio y vereda por confirmar · Huila', producer: pendingProducer,
    altitude: '1.700–1.900 m s. n. m.', variety: 'Caturra y Castillo', process: 'Lavado', roastDate: 'Se informará con cada lote',
    tastingNotes: ['Panela', 'Mandarina', 'Chocolate'], presentations: ['250 g', '500 g'],
    grindOptions: preparationOptions,
    recommendedMoods: ['Energía', 'Enfoque'], playlistUrl: 'https://open.spotify.com/',
    playlistReason: 'Este café tiene una acidez brillante, un cuerpo sedoso y un final limpio. Elegimos una selección de música que mantiene ese mismo ritmo: ligero, optimista y constante.',
    available: true, featured: true,
  },
  {
    id: 'tolima-pulso', slug: 'tolima-pulso', name: 'Tolima Pulso',
    shortDescription: 'Fruta madura y ritmo para salir de lo predecible.',
    description: 'Una interpretación demostrativa de un café natural del Tolima, de cuerpo envolvente y final prolongado.',
    category: 'Café de especialidad', price: 54000, images: ['pulso', 'pulso-detail'],
    origin: 'Colombia', region: 'Tolima', locationDetail: 'Municipio y vereda por confirmar · Tolima', producer: pendingProducer,
    altitude: '1.650–1.850 m s. n. m.', variety: 'Variedades mixtas', process: 'Natural', roastDate: 'Se informará con cada lote',
    tastingNotes: ['Frutos rojos', 'Cacao', 'Ciruela'], presentations: ['250 g', '500 g'],
    grindOptions: preparationOptions,
    recommendedMoods: ['Inspiración', 'Sorpresa'], playlistUrl: 'https://open.spotify.com/',
    playlistReason: 'Su fruta madura y su cuerpo envolvente piden una selección con capas, cambios de textura y espacio para lo inesperado.',
    available: true, featured: true, isNew: true,
  },
  {
    id: 'cundinamarca-pausa', slug: 'cundinamarca-pausa', name: 'Cundinamarca Pausa',
    shortDescription: 'Dulzor sereno para bajar el volumen.',
    description: 'Perfil demostrativo honey, pensado como una taza dulce, redonda y sin prisa para el final de la tarde.',
    category: 'Café de especialidad', price: 51000, images: ['pausa', 'pausa-detail'],
    origin: 'Colombia', region: 'Cundinamarca', locationDetail: 'Municipio y vereda por confirmar · Cundinamarca', producer: pendingProducer,
    altitude: '1.600–1.800 m s. n. m.', variety: 'Castillo', process: 'Honey', roastDate: 'Se informará con cada lote',
    tastingNotes: ['Miel', 'Durazno', 'Nuez'], presentations: ['250 g', '500 g'],
    grindOptions: preparationOptions,
    recommendedMoods: ['Calma'], playlistUrl: 'https://open.spotify.com/',
    playlistReason: 'El dulzor redondo y el final sereno de este perfil se acompañan con música de tempo amplio, cálida y sin cambios bruscos.',
    available: true,
  },
  {
    id: 'edicion-julio', slug: 'edicion-julio', name: 'Órbita — Edición del mes',
    shortDescription: 'Un origen invitado para escuchar con atención.',
    description: 'Selección mensual demostrativa. La ficha definitiva dependerá del café y del productor confirmados para cada edición.',
    category: 'Café del mes', price: 59000, images: ['orbita', 'orbita-detail'],
    origin: 'Colombia', region: 'Origen por confirmar', locationDetail: 'Municipio y vereda por confirmar', producer: pendingProducer,
    process: 'Edición limitada', roastDate: 'Se informará con cada lote',
    tastingNotes: ['Perfil por descubrir', 'Dulzor', 'Fruta'], presentations: ['250 g'],
    grindOptions: preparationOptions,
    recommendedMoods: ['Sorpresa', 'Inspiración'], playlistUrl: 'https://open.spotify.com/',
    playlistReason: 'La playlist cambia con la edición para traducir su perfil sensorial en ritmo. La selección definitiva se publicará junto con el lote confirmado.',
    available: true, featured: true, isNew: true,
  },
  {
    id: 'suscripcion-ritmo', slug: 'suscripcion-ritmo', name: 'Ritmo mensual',
    shortDescription: 'Un café distinto para abrir cada mes.',
    description: 'Suscripción demostrativa con una selección mensual de café. Frecuencia, origen y condiciones finales están por definir.',
    category: 'Suscripciones', price: 56000, images: ['ritmo', 'ritmo-detail'],
    origin: 'Colombia', region: 'Rotativa', locationDetail: 'Origen detallado con cada entrega', producer: pendingProducer,
    process: 'Selección mensual', roastDate: 'Se informará en cada empaque', tastingNotes: ['Curaduría mensual'], presentations: ['250 g', '500 g'],
    grindOptions: preparationOptions,
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

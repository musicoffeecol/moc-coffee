export type ProductCategory =
  | 'Café de especialidad'
  | 'Café del mes'
  | 'Suscripciones'
  | 'Accesorios'
  | 'Gift Cards'

export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  category: ProductCategory
  price: number
  images: string[]
  origin: string
  producer?: {
    name: string
    farm: string
    story: string
  }
  region: string
  locationDetail?: string
  altitude?: string
  variety?: string
  process: string
  roastDate?: string
  tastingNotes: string[]
  presentations: string[]
  grindOptions: string[]
  recommendedMoods: string[]
  playlistUrl?: string
  playlistReason?: string
  available: boolean
  featured?: boolean
  isNew?: boolean
}

export type Mood = {
  id: string
  name: string
  description: string
  accent: string
  thoughts: string[]
  ritual: string
  recommendedProductId: string
  playlist: {
    name: string
    url: string
  }
}

export type MomentSelection = {
  moodId: string
  thoughtIndex: number
}

export type CartItem = {
  id: string
  productId: string
  name: string
  image: string
  unitPrice: number
  quantity: number
  presentation: string
  grind?: string
  subscriptionFrequency?: string
  moment?: MomentSelection
}

export type Experience = {
  id: string
  name: string
  description: string
  audience: string
  capacity: string
  includes: string[]
}

export type Story = {
  slug: string
  title: string
  category: string
  excerpt: string
  readTime: string
  body: string[]
  featured?: boolean
}

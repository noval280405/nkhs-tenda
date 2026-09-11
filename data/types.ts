export interface TentModel {
  id: number
  slug: string
  name: string
  category: string
  description: string
  pricePerSquareMeter: number
  image: string
  gallery: string[]
  availableColors: string[]
  features: string[]
}
export interface MakeupModel {
  summary: string
  highlights: string[]
  id: number
  slug: string
  name: string
  category: string
  description: string
  price: number
  image: string
  gallery: string[]
  included: string[]
}
export interface Option {
  id: string
  name: string
  price: number
  unit?: string
  image?: string
}
export interface WeddingProject {
  id: number
  slug: string
  title: string
  location: string
  year: number
  tentModel: string
  theme: string
  area: number
  makeup?: string
  decoration: string
  image: string
  gallery: string[]
}

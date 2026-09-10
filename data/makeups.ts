import type { MakeupModel, Option } from './types'
export const makeups: MakeupModel[] = [
  {
    id: 1,
    slug: 'natural-bride',
    name: 'Natural Bride',
    category: 'Natural',
    description:
      'Rias pengantin dengan complexion halus, detail mata yang elegan, dan sentuhan personal yang merayakan kecantikan Anda.',
    price: 1200000,
    image: '/images/makeup/bridal.jpg',
    gallery: ['/images/makeup/bridal.jpg', '/images/tents/model-4.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hair / hijab styling',
      'Basic accessories',
    ],
  },
  {
    id: 2,
    slug: 'soft-glam-bride',
    name: 'Soft Glam Bride',
    category: 'Soft Glam',
    description:
      'Rias pengantin dengan complexion halus, detail mata yang elegan, dan sentuhan personal yang merayakan kecantikan Anda.',
    price: 1500000,
    image: '/images/makeup/bridal.jpg',
    gallery: ['/images/makeup/bridal.jpg', '/images/tents/model-4.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hair / hijab styling',
      'Basic accessories',
    ],
  },
  {
    id: 3,
    slug: 'modern-elegance',
    name: 'Modern Elegance',
    category: 'Modern',
    description:
      'Rias pengantin dengan complexion halus, detail mata yang elegan, dan sentuhan personal yang merayakan kecantikan Anda.',
    price: 1750000,
    image: '/images/makeup/bridal.jpg',
    gallery: ['/images/makeup/bridal.jpg', '/images/tents/model-4.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hair / hijab styling',
      'Basic accessories',
    ],
  },
  {
    id: 4,
    slug: 'classic-beauty',
    name: 'Classic Beauty',
    category: 'Classic',
    description:
      'Rias pengantin dengan complexion halus, detail mata yang elegan, dan sentuhan personal yang merayakan kecantikan Anda.',
    price: 1600000,
    image: '/images/makeup/bridal.jpg',
    gallery: ['/images/makeup/bridal.jpg', '/images/tents/model-4.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hair / hijab styling',
      'Basic accessories',
    ],
  },
  {
    id: 5,
    slug: 'paes-jawa',
    name: 'Paes Jawa',
    category: 'Traditional Jawa',
    description:
      'Rias pengantin dengan complexion halus, detail mata yang elegan, dan sentuhan personal yang merayakan kecantikan Anda.',
    price: 2200000,
    image: '/images/makeup/bridal.jpg',
    gallery: ['/images/makeup/bridal.jpg', '/images/tents/model-4.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hair / hijab styling',
      'Basic accessories',
    ],
  },
  {
    id: 6,
    slug: 'sunda-siger',
    name: 'Sunda Siger',
    category: 'Traditional Sunda',
    description:
      'Rias pengantin dengan complexion halus, detail mata yang elegan, dan sentuhan personal yang merayakan kecantikan Anda.',
    price: 2300000,
    image: '/images/makeup/bridal.jpg',
    gallery: ['/images/makeup/bridal.jpg', '/images/tents/model-4.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hair / hijab styling',
      'Basic accessories',
    ],
  },
  {
    id: 7,
    slug: 'hijab-bride',
    name: 'Hijab Bride',
    category: 'Hijab Bride',
    description:
      'Rias pengantin dengan complexion halus, detail mata yang elegan, dan sentuhan personal yang merayakan kecantikan Anda.',
    price: 1700000,
    image: '/images/makeup/bridal.jpg',
    gallery: ['/images/makeup/bridal.jpg', '/images/tents/model-4.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hair / hijab styling',
      'Basic accessories',
    ],
  },
]
export const makeupExtras: Option[] = [
  {
    id: 'bride',
    name: 'Pengantin Wanita Tambahan',
    price: 1500000,
    unit: 'orang',
  },
  { id: 'groom', name: 'Pengantin Pria', price: 500000, unit: 'orang' },
  { id: 'mother', name: 'Ibu Pengantin', price: 350000, unit: 'orang' },
  { id: 'bridesmaid', name: 'Bridesmaid', price: 250000, unit: 'orang' },
]

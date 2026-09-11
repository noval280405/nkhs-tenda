import type { MakeupModel, Option } from './types'
export const makeups: MakeupModel[] = [
  {
    id: 1,
    slug: 'natural-bride',
    name: 'Natural Bride',
    category: 'Natural',
    description:
      'Sentuhan ringan yang menyempurnakan kecantikan alami. Complexion segar, rona peach, dan bibir rose tint untuk akad atau pernikahan yang intim.',
    price: 1200000,
    image: '/images/makeup/natural-bride.jpg',
    gallery: ['/images/makeup/natural-bride.jpg'],
    included: ['Makeup pengantin wanita', 'Hair styling', 'Basic accessories'],
    summary: 'Kulit segar · Rias lembut · Bibir rose tint',
    highlights: [
      'Complexion natural',
      'Eyeshadow cokelat lembut',
      'Rose lip tint',
    ],
  },
  {
    id: 2,
    slug: 'soft-glam-bride',
    name: 'Soft Glam Bride',
    category: 'Soft Glam',
    description:
      'Kilau champagne pada mata, rona peach yang lembut, dan bibir rosy menyatu dalam rias pengantin yang hangat dan romantis.',
    price: 1500000,
    image: '/images/makeup/soft-glam-bride.jpg',
    gallery: ['/images/makeup/soft-glam-bride.jpg'],
    included: ['Makeup pengantin wanita', 'Hair styling', 'Basic accessories'],
    summary: 'Mata champagne · Pipi peach · Bibir rosy',
    highlights: ['Satin complexion', 'Champagne eye makeup', 'Rosy nude lips'],
  },
  {
    id: 3,
    slug: 'modern-elegance',
    name: 'Modern Elegance',
    category: 'Modern',
    description:
      'Garis mata yang rapi, complexion bercahaya, dan tatanan rambut sleek untuk pengantin dengan gaya modern yang bersih dan elegan.',
    price: 1750000,
    image: '/images/makeup/modern-elegance.jpg',
    gallery: ['/images/makeup/modern-elegance.jpg'],
    included: ['Makeup pengantin wanita', 'Hair styling', 'Basic accessories'],
    summary: 'Eyeliner tegas · Sleek bun · Bibir nude',
    highlights: [
      'Luminous complexion',
      'Defined eyeliner',
      'Sleek hair styling',
    ],
  },
  {
    id: 4,
    slug: 'classic-beauty',
    name: 'Classic Beauty',
    category: 'Classic',
    description:
      'Keanggunan klasik melalui complexion halus, eyeliner bersayap, bibir deep rose, dan sanggul yang tertata rapi.',
    price: 1600000,
    image: '/images/makeup/classic-beauty.jpg',
    gallery: ['/images/makeup/classic-beauty.jpg'],
    included: ['Makeup pengantin wanita', 'Hair styling', 'Basic accessories'],
    summary: 'Winged liner · Sanggul klasik · Bibir rose',
    highlights: [
      'Soft matte complexion',
      'Classic winged liner',
      'Deep rose lips',
    ],
  },
  {
    id: 5,
    slug: 'paes-jawa',
    name: 'Paes Jawa',
    category: 'Traditional Jawa',
    description:
      'Inspirasi pengantin Jawa dengan paes hitam yang membingkai dahi, sanggul, cunduk mentul bernuansa emas, dan roncean melati. Detail adat dikonfirmasi saat konsultasi.',
    price: 2200000,
    image: '/images/makeup/paes-jawa.jpg',
    gallery: ['/images/makeup/paes-jawa.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Sanggul & penataan aksesori',
      'Basic accessories',
    ],
    summary: 'Paes hitam · Cunduk mentul · Roncean melati',
    highlights: ['Rias paes Jawa', 'Sanggul & cunduk mentul', 'Roncean melati'],
  },
  {
    id: 6,
    slug: 'sunda-siger',
    name: 'Sunda Siger',
    category: 'Traditional Sunda',
    description:
      'Pesona pengantin Sunda dengan siger bernuansa perak, rias lembut, dan untaian melati yang memperindah siluet pengantin. Detail adat dikonfirmasi saat konsultasi.',
    price: 2300000,
    image: '/images/makeup/sunda-siger.jpg',
    gallery: ['/images/makeup/sunda-siger.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Sanggul & penataan aksesori',
      'Basic accessories',
    ],
    summary: 'Siger Sunda · Rona pink · Untaian melati',
    highlights: [
      'Rias pengantin Sunda',
      'Siger & tatanan rambut',
      'Untaian melati',
    ],
  },
  {
    id: 7,
    slug: 'hijab-bride',
    name: 'Hijab Bride',
    category: 'Hijab Bride',
    description:
      'Rias bercahaya dengan hijab ivory yang tertata rapi, veil lembut, dan detail mutiara. Rambut serta leher tertutup untuk tampilan pengantin yang anggun.',
    price: 1700000,
    image: '/images/makeup/hijab-bride.jpg',
    gallery: ['/images/makeup/hijab-bride.jpg'],
    included: [
      'Makeup pengantin wanita',
      'Hijab / veil styling',
      'Basic accessories',
    ],
    summary: 'Hijab ivory · Veil lembut · Rias radiant',
    highlights: [
      'Radiant bridal makeup',
      'Hijab & veil styling',
      'Aksesori mutiara dasar',
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

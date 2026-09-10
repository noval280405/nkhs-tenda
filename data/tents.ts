import type { TentModel } from './types'
export const tents: TentModel[] = [
  {
    id: 1,
    slug: 'classic-cream-wedding',
    name: 'Classic Cream Wedding',
    category: 'Classic',
    description:
      'Pilihan tenda classic dengan detail kain yang lembut, komposisi warna harmonis, dan suasana hangat untuk hari istimewa Anda.',
    pricePerSquareMeter: 60000,
    image: '/images/tents/model-1.jpg',
    gallery: [
      '/images/tents/model-1.jpg',
      '/images/tents/model-2.jpg',
      '/images/tents/model-3.jpg',
    ],
    availableColors: ['Cream', 'Champagne', 'White'],
    features: [
      'Plafon dekor',
      'Curtain',
      'Basic lighting',
      'Pemasangan dan pembongkaran',
    ],
  },
  {
    id: 2,
    slug: 'modern-sage-wedding',
    name: 'Modern Sage Wedding',
    category: 'Modern',
    description:
      'Pilihan tenda modern dengan detail kain yang lembut, komposisi warna harmonis, dan suasana hangat untuk hari istimewa Anda.',
    pricePerSquareMeter: 75000,
    image: '/images/tents/model-2.jpg',
    gallery: [
      '/images/tents/model-2.jpg',
      '/images/tents/model-3.jpg',
      '/images/tents/model-4.jpg',
    ],
    availableColors: ['Sage Green', 'White', 'Cream'],
    features: [
      'Plafon dekor',
      'Curtain',
      'Basic lighting',
      'Pemasangan dan pembongkaran',
    ],
  },
  {
    id: 3,
    slug: 'rustic-wedding-tent',
    name: 'Rustic Wedding Tent',
    category: 'Rustic',
    description:
      'Pilihan tenda rustic dengan detail kain yang lembut, komposisi warna harmonis, dan suasana hangat untuk hari istimewa Anda.',
    pricePerSquareMeter: 70000,
    image: '/images/tents/model-3.jpg',
    gallery: [
      '/images/tents/model-3.jpg',
      '/images/tents/model-4.jpg',
      '/images/tents/model-5.jpg',
    ],
    availableColors: ['Cream', 'Sage Green'],
    features: [
      'Plafon dekor',
      'Curtain',
      'Basic lighting',
      'Pemasangan dan pembongkaran',
    ],
  },
  {
    id: 4,
    slug: 'royal-premium-wedding',
    name: 'Royal Premium Wedding',
    category: 'Premium',
    description:
      'Pilihan tenda premium dengan detail kain yang lembut, komposisi warna harmonis, dan suasana hangat untuk hari istimewa Anda.',
    pricePerSquareMeter: 95000,
    image: '/images/tents/model-4.jpg',
    gallery: [
      '/images/tents/model-4.jpg',
      '/images/tents/model-5.jpg',
      '/images/tents/model-6.jpg',
    ],
    availableColors: ['Champagne', 'White', 'Dusty Pink'],
    features: [
      'Plafon dekor',
      'Curtain',
      'Basic lighting',
      'Pemasangan dan pembongkaran',
    ],
  },
  {
    id: 5,
    slug: 'traditional-wedding',
    name: 'Traditional Wedding',
    category: 'Traditional',
    description:
      'Pilihan tenda traditional dengan detail kain yang lembut, komposisi warna harmonis, dan suasana hangat untuk hari istimewa Anda.',
    pricePerSquareMeter: 85000,
    image: '/images/tents/model-5.jpg',
    gallery: [
      '/images/tents/model-5.jpg',
      '/images/tents/model-6.jpg',
      '/images/tents/model-1.jpg',
    ],
    availableColors: ['Maroon', 'Cream', 'Champagne'],
    features: [
      'Plafon dekor',
      'Curtain',
      'Basic lighting',
      'Pemasangan dan pembongkaran',
    ],
  },
  {
    id: 6,
    slug: 'minimalist-white-tent',
    name: 'Minimalist White Tent',
    category: 'Minimalis',
    description:
      'Pilihan tenda minimalis dengan detail kain yang lembut, komposisi warna harmonis, dan suasana hangat untuk hari istimewa Anda.',
    pricePerSquareMeter: 55000,
    image: '/images/tents/model-6.jpg',
    gallery: [
      '/images/tents/model-6.jpg',
      '/images/tents/model-1.jpg',
      '/images/tents/model-2.jpg',
    ],
    availableColors: ['White', 'Cream'],
    features: [
      'Plafon dekor',
      'Curtain',
      'Basic lighting',
      'Pemasangan dan pembongkaran',
    ],
  },
]

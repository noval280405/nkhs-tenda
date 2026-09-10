import { siteConfig } from '../data/site'
export const rupiah = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
export const whatsappUrl = (
  message = 'Halo NKHS TENDA, saya melihat website NKHS TENDA dan ingin berkonsultasi mengenai kebutuhan acara pernikahan.',
) => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
export const safeNumber = (value: unknown, max = 1000000) => {
  const n = Number(value)
  return Number.isFinite(n) ? Math.min(max, Math.max(0, n)) : 0
}

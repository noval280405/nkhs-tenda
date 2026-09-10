import { tents } from '../data/tents'
import { makeups, makeupExtras } from '../data/makeups'
import { decorations } from '../data/decorations'
import { furniture } from '../data/furniture'
import { lighting } from '../data/lighting'
import { transport } from '../data/transport'
import { rupiah, safeNumber } from './format'
export interface EstimateArea {
  id: number
  name: string
  method: 'dimensions' | 'direct'
  length: number
  width: number
  direct: number
  tentSlug: string
  color: string
}
export interface EventInfo {
  name: string
  date: string
  location: string
  guests: number
  notes: string
}
export interface EstimateConfig {
  areas: EstimateArea[]
  decoration: string
  makeup: string
  extras: Record<string, number>
  furniture: Record<string, number>
  lighting: string
  transport: string
}
export interface EstimateLine {
  label: string
  detail: string
  price: number
}
export const areaSize = (area: EstimateArea) =>
  area.method === 'direct'
    ? safeNumber(area.direct)
    : safeNumber(area.length, 1000) * safeNumber(area.width, 1000)
export const estimateLines = (config: EstimateConfig): EstimateLine[] => {
  const lines: EstimateLine[] = config.areas.map((area) => {
    const tent = tents.find((t) => t.slug === area.tentSlug)
    return {
      label: `${area.name || 'Area'} · ${tent?.name || 'Pilih model'}`,
      detail: `${area.method === 'dimensions' ? `${safeNumber(area.length, 1000)} × ${safeNumber(area.width, 1000)} m · ` : ''}${areaSize(area)} m² × ${rupiah(tent?.pricePerSquareMeter || 0)} · ${area.color}`,
      price: areaSize(area) * (tent?.pricePerSquareMeter || 0),
    }
  })
  for (const [options, id, label] of [
    [decorations, config.decoration, 'Pelaminan'],
    [makeups, config.makeup, 'Tata rias'],
    [lighting, config.lighting, 'Lighting'],
    [transport, config.transport, 'Transportasi'],
  ] as const) {
    const item = options.find((item) => String(item.id) === id)
    if (item)
      lines.push({
        label: `${label} · ${item.name}`,
        detail: '1 layanan',
        price: item.price,
      })
  }
  for (const [options, quantities] of [
    [makeupExtras, config.extras],
    [furniture, config.furniture],
  ] as const)
    for (const item of options) {
      const qty = Math.floor(safeNumber(quantities[item.id], 100000))
      if (qty)
        lines.push({
          label: item.name,
          detail: `${qty} ${item.unit || 'unit'} × ${rupiah(item.price)}`,
          price: qty * item.price,
        })
    }
  return lines
}
export const quotationMessage = (event: EventInfo, config: EstimateConfig) => {
  const lines = estimateLines(config)
  return [
    'Halo NKHS TENDA,',
    'Saya tertarik menggunakan layanan wedding.',
    '',
    `Nama: ${event.name}`,
    `Tanggal Acara: ${event.date || 'Belum ditentukan'}`,
    `Lokasi: ${event.location}`,
    `Jumlah Tamu: ${safeNumber(event.guests)}`,
    '',
    'RINCIAN PILIHAN',
    ...lines.map((l) => `${l.label}\n${l.detail}\n${rupiah(l.price)}`),
    '',
    `Total Area: ${config.areas.reduce((n, a) => n + areaSize(a), 0)} m²`,
    'ESTIMASI WEBSITE',
    rupiah(lines.reduce((n, l) => n + l.price, 0)),
    '',
    `Catatan: ${event.notes || '-'}`,
    'Harga demo merupakan estimasi dan perlu dikonfirmasi setelah survei.',
    'Mohon informasi dan konfirmasi lebih lanjut.',
  ].join('\n')
}

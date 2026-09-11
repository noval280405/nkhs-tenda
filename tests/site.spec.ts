import { test, expect } from '@playwright/test'
import { tents } from '../data/tents'
import { makeups } from '../data/makeups'
import { projects } from '../data/projects'
import {
  areaSize,
  estimateLines,
  quotationMessage,
  type EstimateConfig,
} from '../utils/estimate'
import { safeNumber } from '../utils/format'
const routes = [
  '/',
  '/tenda',
  '/tata-rias',
  '/paket',
  '/estimasi',
  '/galeri',
  '/tentang',
  '/faq',
  '/kontak',
  ...tents.map((t) => `/tenda/${t.slug}`),
  ...makeups.map((m) => `/tata-rias/${m.slug}`),
  ...projects.map((p) => `/galeri/${p.slug}`),
]
test('Harga 100/150 m², multi-area, seluruh tambahan, dan pesan quotation', () => {
  const config: EstimateConfig = {
    areas: [
      {
        id: 1,
        name: 'Tenda Tamu',
        method: 'dimensions',
        length: 10,
        width: 10,
        direct: 150,
        tentSlug: 'modern-sage-wedding',
        color: 'Sage Green',
      },
    ],
    decoration: '',
    makeup: '',
    extras: {},
    furniture: {},
    lighting: '',
    transport: 'tangerang',
  }
  expect(estimateLines(config).reduce((n, l) => n + l.price, 0)).toBe(7500000)
  config.areas[0]!.width = 15
  expect(areaSize(config.areas[0]!)).toBe(150)
  config.decoration = 'garden'
  config.makeup = '2'
  config.furniture = { chair: 100, table: 10 }
  config.lighting = 'warm'
  config.transport = 'jakbar'
  expect(estimateLines(config).reduce((n, l) => n + l.price, 0)).toBe(22050000)
  config.areas.push({
    id: 2,
    name: 'Catering',
    method: 'direct',
    length: 0,
    width: 0,
    direct: 100,
    tentSlug: 'classic-cream-wedding',
    color: 'Cream',
  })
  config.extras = { mother: 2, bridesmaid: 3, groom: 1, bride: 1 }
  config.furniture.carpet = 10
  config.furniture.stage = 1
  expect(estimateLines(config).reduce((n, l) => n + l.price, 0)).toBe(32500000)
  const message = quotationMessage(
    {
      name: 'Alya & Rizky',
      date: '2027-01-25',
      location: 'Tangerang',
      guests: 250,
      notes: 'Akses gang & parkir',
    },
    config,
  )
  for (const text of [
    'Alya & Rizky',
    '2027-01-25',
    'Catering',
    '250 m²',
    'Sage Green',
    'Garden Wedding',
    'Soft Glam Bride',
    'Bridesmaid',
    'Panggung',
    'Jakarta Barat',
    'Akses gang & parkir',
  ])
    expect(message).toContain(text)
  for (const value of [-2, NaN, Infinity, '', undefined])
    expect(safeNumber(value)).toBe(0)
  config.areas[0]!.length = -10
  expect(areaSize(config.areas[0]!)).toBe(0)
})
test('Semua route, SEO, console Vue, dan 404', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => {
    if (m.type() === 'warning' && /Vue|hydration/i.test(m.text()))
      errors.push(m.text())
  })
  for (const route of routes) {
    const response = await page.goto(route)
    expect(response?.status(), route).toBe(200)
    await expect(page.locator('h1'), route).toHaveCount(1)
    await expect(page).toHaveTitle(/NKHS TENDA/)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /.+/,
    )
    await expect(page.locator('img:not([alt])')).toHaveCount(0)
  }
  for (const route of [
    '/tenda/tidak-ada',
    '/tata-rias/tidak-ada',
    '/galeri/tidak-ada',
  ])
    expect((await page.goto(route))?.status()).toBe(404)
  expect(errors).toEqual([])
})
test('Filter katalog dan galeri, pilihan warna, FAQ', async ({ page }) => {
  await page.goto('/tenda')
  await page.getByRole('button', { name: 'Modern', exact: true }).click()
  await expect(
    page.locator('.catalog-card').filter({ has: page.locator('.card-price') }),
  ).toHaveCount(1)
  await page.getByRole('link', { name: /^Lihat Model/ }).click()
  await expect(page).toHaveURL(/modern-sage-wedding/)
  await page.getByRole('button', { name: 'White', exact: true }).click()
  await page
    .getByRole('link', { name: /^Buat Estimasi/ })
    .last()
    .click()
  await expect(
    page.locator('.color-options button[aria-pressed=true]'),
  ).toContainText('White')
  await page.goto('/tata-rias')
  await page.getByRole('button', { name: 'Soft Glam', exact: true }).click()
  await expect(page.locator('.catalog-card')).toHaveCount(1)
  await page.goto('/galeri')
  await page.getByRole('button', { name: 'Jakarta Barat', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(2)
  await page.goto('/faq')
  await page.locator('summary').first().click()
  await expect(page.locator('details').first()).toHaveAttribute('open', '')
})
test('Kalkulator UI, multi-area, quantity, dan WhatsApp', async ({ page }) => {
  await page.goto('/estimasi')
  await expect(page.getByTestId('total')).toContainText('7.500.000')
  await page.getByLabel('Nama Anda').fill('Alya & Rizky')
  await page.getByLabel('Lokasi / alamat acara').fill('Tangerang')
  await page.getByLabel('Lebar (meter)').fill('15')
  await expect(page.getByTestId('total')).toContainText('11.250.000')
  await page.getByRole('radio', { name: 'Garden Wedding' }).check()
  await page.getByRole('radio', { name: 'Soft Glam Bride' }).check()
  await page
    .getByRole('spinbutton', { name: 'Jumlah Kursi', exact: true })
    .fill('100')
  await page
    .getByRole('spinbutton', { name: 'Jumlah Meja', exact: true })
    .fill('10')
  await page.getByRole('radio', { name: 'Warm Wedding Lighting' }).check()
  await page.getByLabel('Area layanan').selectOption('jakbar')
  await expect(page.getByTestId('total')).toContainText('22.050.000')
  const href = await page.getByTestId('quotation').getAttribute('href')
  const url = new URL(href!)
  expect(url.hostname).toBe('wa.me')
  expect(url.pathname).toBe('/6281234567890')
  expect(url.searchParams.get('text')).toContain('Alya & Rizky')
  expect(url.searchParams.get('text')).toContain('22.050.000')
  await page.getByRole('button', { name: '+ Tambah Area', exact: true }).click()
  await page
    .getByLabel('Model tenda')
    .last()
    .selectOption('classic-cream-wedding')
  await expect(page.getByTestId('total')).toContainText('28.050.000')
  await page.getByRole('button', { name: 'Hapus Area 2', exact: true }).click()
  await expect(page.getByTestId('total')).toContainText('22.050.000')
  await page.getByRole('button', { name: 'Masukkan Luas', exact: true }).click()
  await page.getByLabel('Luas (m²)', { exact: true }).fill('100')
  await expect(page.getByTestId('total')).toContainText('18.300.000')
  await page.getByLabel('Luas (m²)', { exact: true }).fill('')
  await expect(page.getByTestId('quotation')).toHaveCount(0)
  await expect(page.locator('.area-card .validation')).toBeVisible()
  await page
    .getByRole('spinbutton', { name: 'Jumlah Kursi', exact: true })
    .fill('-5')
  await page
    .getByRole('spinbutton', { name: 'Jumlah Kursi', exact: true })
    .blur()
  await expect(
    page.getByRole('spinbutton', { name: 'Jumlah Kursi', exact: true }),
  ).toHaveValue('0')
})
for (const width of [360, 390, 768, 1024, 1280, 1440])
  test(`Responsive ${width}px dan menu`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    for (const route of [
      '/',
      '/tenda',
      '/tata-rias',
      '/galeri',
      '/estimasi',
      '/kontak',
      '/tenda/modern-sage-wedding',
    ]) {
      await page.goto(route)
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        route,
      ).toBe(true)
    }
    if (width < 1024) {
      await page.getByRole('button', { name: 'Buka atau tutup menu' }).click()
      await expect(page.locator('#mobile-nav')).toBeVisible()
      await page
        .locator('#mobile-nav')
        .getByRole('link', { name: 'FAQ', exact: true })
        .click()
      await expect(page).toHaveURL(/faq/)
      await expect(page.locator('#mobile-nav')).toHaveCount(0)
    }
    if (width === 1440 || width === 390) {
      await page.goto('/')
      await page.screenshot({
        path: `tests/screenshots/home-${width}.png`,
        fullPage: true,
      })
      await page.goto('/estimasi')
      await page.screenshot({
        path: `tests/screenshots/estimate-${width}.png`,
        fullPage: true,
      })
    }
  })

test('Gambar rias sesuai seluruh filter, detail, dan pilihan estimasi', async ({
  page,
}) => {
  await page.goto('/tata-rias')
  expect(new Set(makeups.map((m) => m.image)).size).toBe(makeups.length)
  for (const makeup of makeups) {
    await page
      .getByRole('button', { name: makeup.category, exact: true })
      .click()
    const card = page.locator('.makeup-card')
    await expect(card).toHaveCount(1)
    await expect(card.locator('h3')).toHaveText(makeup.name)
    await expect(card.locator('img')).toHaveAttribute('src', makeup.image)
    await expect(card.locator('.makeup-summary')).toHaveText(makeup.summary)
    await expect(card.locator('img')).toBeVisible()
    await expect
      .poll(() =>
        card
          .locator('img')
          .evaluate((image: HTMLImageElement) => image.naturalWidth),
      )
      .toBeGreaterThan(0)
  }
  await page.goto('/tata-rias?category=Traditional%20Jawa')
  await expect(page.locator('.makeup-card h3')).toHaveText('Paes Jawa')
  await page.getByRole('link', { name: /^Lihat Detail/ }).click()
  await expect(page.locator('.detail-portrait')).toHaveAttribute(
    'src',
    '/images/makeup/paes-jawa.jpg',
  )
  await expect(page.locator('.makeup-highlights')).toContainText(
    'Rias paes Jawa',
  )
  await page.getByRole('link', { name: /^Pilih Tata Rias/ }).click()
  const selected = page.locator('.makeup-options .option-card.chosen')
  await expect(selected).toContainText('Paes Jawa')
  await expect(selected.locator('img')).toHaveAttribute(
    'src',
    '/images/makeup/paes-jawa.jpg',
  )
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 950 })
    for (const [path, name] of [
      ['/', 'home'],
      ['/tenda', 'tenda'],
      ['/tata-rias', 'rias'],
    ]) {
      await page.goto(path!)
      await page.screenshot({
        path: `tests/screenshots/premium-${name}-${width}.png`,
        fullPage: false,
      })
    }
    await page
      .locator('.grid-cards')
      .screenshot({ path: `tests/screenshots/premium-rias-grid-${width}.png` })
  }
})

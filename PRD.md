# PRODUCT REQUIREMENTS DOCUMENT
# NKHS TENDA

## Website Tenda, Dekorasi & Tata Rias Pernikahan

---

## 1. INSTRUKSI UNTUK CODEX

Bangun website **NKHS TENDA** berdasarkan seluruh requirement dalam dokumen ini.

Kerjakan langsung pada source code project Nuxt 3 yang sedang dibuka.

Gunakan:

- Nuxt 3
- Vue 3
- TypeScript
- Tailwind CSS
- Composition API
- `<script setup lang="ts">`
- NuxtLink
- Data lokal TypeScript
- Mobile-first responsive design

Jangan membuat:

- Backend
- Database
- Firebase
- Supabase
- Login
- Register
- Admin dashboard
- Payment gateway
- Midtrans
- QRIS
- Customer account
- Booking otomatis
- Sistem pembayaran online

Semua data seperti:

- model tenda
- harga
- warna
- tata rias
- dekorasi
- furniture
- lighting
- project
- testimonial
- FAQ

harus disimpan pada file data lokal.

Website berfungsi sebagai:

**Portfolio + Katalog Layanan + Kalkulator Estimasi + WhatsApp Quotation**

Setelah implementasi selesai:

- cek seluruh route
- cek responsive
- cek kalkulator
- cek WhatsApp
- cek TypeScript
- cek Vue warning
- jalankan `npm run build`
- perbaiki error sampai build berhasil

---

# 2. INFORMASI PROJECT

Nama Brand:

**NKHS TENDA**

Kategori:

Wedding Services

Layanan:

- Tenda Pernikahan
- Dekorasi
- Pelaminan
- Tata Rias
- Furniture
- Lighting
- Perlengkapan Acara
- Wedding Package

Subheadline:

**Tenda • Dekorasi • Tata Rias Pernikahan**

Tagline:

**Wujudkan Momen Indah Anda.**

Konsep utama:

**Elegant Wedding Service + Interactive Price Estimator**

---

# 3. TUJUAN WEBSITE

Website harus membantu calon pelanggan untuk:

1. Mengenal NKHS TENDA.
2. Melihat model tenda yang pernah dibuat.
3. Melihat hasil dekorasi.
4. Melihat model tata rias.
5. Memilih model yang tersedia.
6. Memilih warna yang tersedia.
7. Memasukkan ukuran lokasi.
8. Menghitung estimasi harga berdasarkan luas.
9. Menambahkan pelaminan.
10. Menambahkan tata rias.
11. Menambahkan kursi.
12. Menambahkan meja.
13. Menambahkan lighting.
14. Menambahkan perlengkapan lain.
15. Melihat total estimasi.
16. Mengirim seluruh pilihan ke WhatsApp.

---

# 4. KONSEP UTAMA

User tidak membuat desain wedding bebas dari nol.

Flow:

```text
Lihat Portfolio
↓
Pilih Model
↓
Pilih Warna
↓
Masukkan Luas
↓
Pilih Pelaminan
↓
Pilih Tata Rias
↓
Tambah Perlengkapan
↓
Lihat Estimasi
↓
Kirim ke WhatsApp

Semua model harus berasal dari pilihan yang disediakan perusahaan.

5. UNIQUE SELLING POINT

Website harus menonjolkan:

Portfolio Model Asli

Model berdasarkan hasil pekerjaan perusahaan.

Smart Area Calculator

Harga tenda dihitung berdasarkan luas.

Instant Wedding Estimate

Harga berubah otomatis berdasarkan pilihan user.

WhatsApp Quotation

Semua detail pilihan langsung dibuat menjadi pesan WhatsApp.

6. DESIGN DIRECTION

Gunakan konsep:

Elegant Wedding Editorial

Karakter visual:

Elegant
Premium
Romantic
Clean
Warm
Profesional
Tidak terlalu ramai
Banyak foto project

Gunakan:

whitespace
foto besar
serif heading
card elegan
border tipis
rounded corner lembut
shadow ringan
hover animation
spacing besar

Jangan buat seperti dashboard.

7. COLOR PALETTE

Background Cream:

#F8F4ED

Champagne:

#D5B98C

Warm Gold:

#B49060

Dark Brown:

#342B26

Soft Rose:

#DAB8B4

White:

#FFFFFF
8. TYPOGRAPHY

Heading:

Cormorant Garamond

Body:

Plus Jakarta Sans

Heading harus terasa premium dan wedding-oriented.

9. STRUKTUR ROUTE
/
├── /tenda
├── /tata-rias
├── /paket
├── /estimasi
├── /galeri
├── /tentang
├── /faq
└── /kontak

Dynamic route:

/tenda/[slug]
/tata-rias/[slug]
/galeri/[slug]
10. STRUKTUR PAGES
pages/
├── index.vue
├── tenda.vue
├── tata-rias.vue
├── paket.vue
├── estimasi.vue
├── galeri.vue
├── tentang.vue
├── faq.vue
├── kontak.vue
│
├── tenda/
│   └── [slug].vue
│
├── tata-rias/
│   └── [slug].vue
│
└── galeri/
    └── [slug].vue
11. STRUKTUR COMPONENTS
components/
│
├── layout/
│   ├── Navbar.vue
│   └── Footer.vue
│
├── home/
│   ├── HeroSection.vue
│   ├── ServicesSection.vue
│   ├── FeaturedTentModels.vue
│   ├── MakeupPreview.vue
│   ├── PortfolioPreview.vue
│   ├── PackagePreview.vue
│   ├── WhyUsSection.vue
│   ├── TestimonialSection.vue
│   └── CTASection.vue
│
├── tent/
│   ├── TentHero.vue
│   ├── TentFilter.vue
│   ├── TentGrid.vue
│   ├── TentCard.vue
│   ├── TentGallery.vue
│   └── TentColorSelector.vue
│
├── makeup/
│   ├── MakeupHero.vue
│   ├── MakeupFilter.vue
│   ├── MakeupGrid.vue
│   ├── MakeupCard.vue
│   └── MakeupGallery.vue
│
├── package/
│   ├── PackageHero.vue
│   ├── PackageGrid.vue
│   └── PackageCard.vue
│
├── estimate/
│   ├── EventForm.vue
│   ├── AreaCalculator.vue
│   ├── TentSelector.vue
│   ├── ColorSelector.vue
│   ├── DecorationSelector.vue
│   ├── MakeupSelector.vue
│   ├── FurnitureSelector.vue
│   ├── LightingSelector.vue
│   ├── TransportSelector.vue
│   └── EstimateSummary.vue
│
├── gallery/
│   ├── GalleryHero.vue
│   ├── GalleryFilter.vue
│   ├── ProjectGrid.vue
│   └── ProjectCard.vue
│
└── ui/
    ├── SectionTitle.vue
    ├── PageHero.vue
    ├── PriceDisplay.vue
    ├── QuantitySelector.vue
    ├── PrimaryButton.vue
    └── WhatsAppFloating.vue
12. DATA STRUCTURE

Gunakan folder:

data/
├── site.ts
├── tents.ts
├── makeups.ts
├── decorations.ts
├── furniture.ts
├── lighting.ts
├── transport.ts
├── packages.ts
├── projects.ts
├── testimonials.ts
└── faq.ts
13. SITE CONFIG

Buat:

export const siteConfig = {
  name: 'NKHS TENDA',
  tagline: 'Wujudkan Momen Indah Anda.',
  whatsapp: '6281234567890',
  instagram: '@nkhstenda',
  email: 'hello@nkhstenda.com',
  address: 'Tangerang, Banten'
}

Semua nomor WhatsApp dan kontak gunakan satu source ini.

14. NAVBAR

Desktop:

NKHS TENDA

Beranda
Tenda & Dekorasi
Tata Rias
Paket
Galeri
Tentang
FAQ
Kontak

[Buat Estimasi]

Route:

Beranda → /
Tenda → /tenda
Tata Rias → /tata-rias
Paket → /paket
Galeri → /galeri
Tentang → /tentang
FAQ → /faq
Kontak → /kontak
Estimasi → /estimasi

Navbar:

sticky
responsive
mobile hamburger
active state
transition ringan
15. HOMEPAGE

File:

pages/index.vue

Susunan:

Hero
↓
Services
↓
Featured Tent Models
↓
How It Works
↓
Makeup Preview
↓
Wedding Portfolio
↓
Wedding Packages
↓
Why Us
↓
Testimonials
↓
CTA
16. HERO

Headline:

Wujudkan Hari Spesial
dengan Sentuhan Sempurna.

Deskripsi:

Layanan tenda, dekorasi dan tata rias pernikahan untuk membantu menciptakan momen istimewa sesuai kebutuhan Anda.

CTA:

Lihat Model Tenda

arah ke:

/tenda

CTA kedua:

Buat Estimasi Harga

arah ke:

/estimasi

Gunakan foto wedding besar.

17. SERVICES SECTION

Tampilkan 4 layanan:

Tenda Pernikahan

Berbagai model tenda untuk kebutuhan acara.

Dekorasi & Pelaminan

Pilihan dekorasi berdasarkan project yang tersedia.

Tata Rias

Tata rias pengantin modern dan tradisional.

Furniture & Perlengkapan

Kursi, meja, lighting, karpet dan kebutuhan lainnya.

18. TENT PAGE

Route:

/tenda

Kategori:

Semua
Minimalis
Modern
Classic
Rustic
Traditional
Premium

Gunakan filtering frontend.

19. TENT DATA

Interface:

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

Contoh:

{
  id: 1,
  slug: 'modern-sage-wedding',
  name: 'Modern Sage Wedding',
  category: 'Modern',
  description: 'Konsep tenda modern dengan kombinasi warna sage dan cream.',
  pricePerSquareMeter: 75000,
  image: '/images/tents/modern-sage.webp',
  gallery: [],
  availableColors: [
    'Sage Green',
    'White',
    'Cream'
  ],
  features: [
    'Plafon Dekor',
    'Curtain',
    'Basic Lighting'
  ]
}
20. MODEL TENDA DUMMY

Buat minimal:

Classic Cream Wedding
Rp60.000 / m²

Modern Sage Wedding
Rp75.000 / m²

Rustic Wedding Tent
Rp70.000 / m²

Royal Premium Wedding
Rp95.000 / m²

Traditional Wedding
Rp85.000 / m²

Minimalist White Tent
Rp55.000 / m²

Harga hanya data demo.

21. TENT CARD

Tampilan:

[FOTO]

Modern Sage Wedding

Modern • Elegant

Mulai
Rp75.000 / m²

Sage
White
Cream

[Lihat Model]

Klik:

/tenda/modern-sage-wedding
22. DETAIL TENDA

Dynamic route:

/tenda/[slug]

Isi:

Gallery
↓
Nama Model
↓
Kategori
↓
Deskripsi
↓
Harga / m²
↓
Pilihan Warna
↓
Fasilitas
↓
Project Terkait
↓
Buat Estimasi

Jika slug tidak ditemukan:

throw createError({
  statusCode: 404,
  statusMessage: 'Model tenda tidak ditemukan'
})
23. COLOR SELECTION

Warna tidak boleh bebas.

Gunakan dari availableColors.

Contoh:

White
Cream
Champagne
Sage Green
Dusty Pink
Maroon
Navy

Tambahkan:

Butuh warna lain?
Konsultasikan via WhatsApp.
24. MAKEUP PAGE

Route:

/tata-rias

Kategori:

Natural
Soft Glam
Modern
Classic
Traditional Jawa
Traditional Sunda
Hijab Bride

Gunakan foto hasil tata rias.

25. MAKEUP DATA

Interface:

export interface MakeupModel {
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

Contoh:

{
  id: 1,
  slug: 'soft-glam-bride',
  name: 'Soft Glam Bride',
  category: 'Soft Glam',
  description: 'Rias pengantin lembut dan elegan dengan hasil natural.',
  price: 1500000,
  image: '/images/makeup/soft-glam.webp',
  gallery: [],
  included: [
    'Bridal Makeup',
    'Hair / Hijab Styling',
    'Basic Accessories'
  ]
}
26. MAKEUP CARD

Contoh:

[FOTO]

SOFT GLAM BRIDE

Natural complexion
Soft eye makeup
Nude lips

Mulai
Rp1.500.000

[Lihat Detail]
27. MAKEUP DETAIL

Route:

/tata-rias/[slug]

Isi:

Gallery
↓
Nama Makeup
↓
Kategori
↓
Deskripsi
↓
Harga
↓
Yang Termasuk
↓
Tambahan Makeup
↓
Portfolio
↓
Pilih Tata Rias
28. MAKEUP EXTRA

Tambahkan pilihan:

Pengantin Wanita
Rp1.500.000

Pengantin Pria
Rp500.000

Ibu Pengantin
Rp350.000 / orang

Bridesmaid
Rp250.000 / orang

User bisa memilih quantity.

Harga berubah otomatis.

29. GALLERY PROJECT

Route:

/galeri

Gunakan hasil project perusahaan.

Contoh:

Wedding Project 01
Tangerang
2026
Modern Sage Wedding
150 m²

Card harus menggunakan foto besar.

30. PROJECT DATA

Interface:

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
  image: string
  gallery: string[]
}
31. PROJECT DETAIL

Route:

/galeri/[slug]

Tampilkan:

Project Name
Lokasi
Tahun
Model Tenda
Tema Warna
Luas
Pelaminan
Tata Rias
Gallery

Jika tidak ingin menampilkan nama client gunakan:

Wedding Project 01
Wedding Project 02
Wedding Project 03
32. WEDDING PACKAGE PAGE

Route:

/paket

Buat minimal 3 paket:

Simple Wedding
Mulai Rp10.000.000

Termasuk:

Tenda 100 m²
100 Kursi
10 Meja
Basic Decoration
Basic Lighting
Elegant Wedding
Mulai Rp20.000.000

Termasuk:

Premium Tent
150 Kursi
Pelaminan
Lighting
Soft Glam Makeup
Royal Wedding
Mulai Rp35.000.000

Termasuk:

Premium Decoration
Royal Pelaminan
Premium Lighting
Tata Rias
Furniture
Wedding Accessories

Semua harga harus diberi label:

Mulai dari

atau:

Estimasi
33. ESTIMATE PAGE

Route:

/estimasi

Ini fitur utama website.

Tahapan:

01 Informasi Acara

02 Pilih Model Tenda

03 Masukkan Ukuran

04 Pilih Warna

05 Pilih Pelaminan

06 Pilih Tata Rias

07 Pilih Perlengkapan

08 Pilih Lokasi

09 Ringkasan
34. EVENT INFORMATION

Input:

Nama
Tanggal Acara
Lokasi
Jumlah Tamu
Catatan

Untuk MVP:

tanggal hanya input informasi.

Tidak perlu cek availability realtime.

35. AREA CALCULATOR

User bisa memilih 2 metode.

Metode A
Panjang
10 meter

Lebar
15 meter

Hitung:

10 × 15 = 150 m²
Metode B
Masukkan Luas

150 m²
36. AREA FORMULA
area = panjang × lebar

Vue:

const area = computed(() => {
  return length.value * width.value
})

Validasi:

tidak boleh negatif
tidak boleh NaN
minimal 1
input kosong dianggap 0
37. TENT PRICE

Formula:

Luas × Harga Tenda per m²

Contoh:

Modern Sage Wedding

150 m²

Rp75.000 / m²

150 × 75.000

Rp11.250.000

Vue:

const tentPrice = computed(() => {
  if (!selectedTent.value) return 0

  return area.value * selectedTent.value.pricePerSquareMeter
})
38. MULTI AREA

Support beberapa area.

Contoh:

Area 1
Tenda Tamu

10 × 10
100 m²

Button:

+ Tambah Area

Area 2:

Area Catering

10 × 15
150 m²

Masing-masing area boleh memilih model berbeda.

Total:

Area Tamu        100 m²
Area Catering    150 m²

Total Area       250 m²
39. DECORATION / PELAMINAN

Buat data:

Modern Minimalist
Rp3.500.000

Garden Wedding
Rp5.500.000

Rustic Wedding
Rp4.500.000

Royal Wedding
Rp8.500.000

Traditional Jawa
Rp7.000.000

Traditional Sunda
Rp7.000.000

Gunakan foto.

User hanya bisa memilih satu pelaminan utama.

40. FURNITURE

Buat pilihan:

Kursi
Rp15.000 / unit

Meja
Rp50.000 / unit

Karpet
Rp25.000 / m²

Panggung
Rp750.000

Gunakan QuantitySelector.

Contoh:

Kursi

[-] 100 [+]

100 × Rp15.000
Rp1.500.000

Quantity minimum:

0
41. LIGHTING

Pilihan:

Basic Lighting
Rp750.000

Warm Wedding Lighting
Rp1.500.000

Premium Lighting
Rp2.500.000
42. TRANSPORT

Buat data lokasi dummy:

Kota Tangerang
Rp0

Tangerang Selatan
Rp200.000

Jakarta Barat
Rp300.000

Jakarta Selatan
Rp400.000

Depok
Rp500.000

Bekasi
Rp500.000

Bogor
Rp650.000

Gunakan dropdown.

43. TOTAL CALCULATION

Formula:

Total Tenda
+
Pelaminan
+
Tata Rias
+
Furniture
+
Lighting
+
Transportasi
+
Add-ons

Vue:

const totalEstimate = computed(() => {
  return (
    tentPrice.value +
    decorationPrice.value +
    makeupPrice.value +
    furniturePrice.value +
    lightingPrice.value +
    transportPrice.value
  )
})
44. ESTIMATE SUMMARY

Desktop gunakan 2 column.

LEFT
Configurator

RIGHT
Estimate Summary

Panel kanan sticky.

Contoh:

ESTIMASI ANDA

Modern Sage Wedding
150 m² × Rp75.000
Rp11.250.000

Garden Wedding
Rp5.500.000

Soft Glam
Rp1.500.000

100 Kursi
Rp1.500.000

10 Meja
Rp500.000

Lighting
Rp1.500.000

Transport
Rp300.000

------------------

TOTAL ESTIMASI

Rp22.050.000
45. MOBILE ESTIMATE

Mobile:

Configurator
↓
Summary
↓
Total
↓
WhatsApp

Jangan gunakan sticky panel jika mengganggu viewport mobile.

46. PRICE DISCLAIMER

Wajib tampil dekat total:

Harga yang ditampilkan merupakan estimasi berdasarkan konfigurasi yang dipilih.

Harga final dapat berubah setelah survei lokasi, kondisi pemasangan, akses lokasi, tanggal acara dan kebutuhan tambahan.

Jangan gunakan teks:

Harga Final

Gunakan:

Estimasi Harga
47. WHATSAPP QUOTATION

CTA:

Konsultasikan Pilihan Ini

Generate pesan otomatis.

Contoh:

Halo NKHS TENDA,

Saya tertarik menggunakan layanan wedding.

Nama:
Muhammad Noval

Tanggal Acara:
25 Januari 2027

Lokasi:
Tangerang

MODEL TENDA
Modern Sage Wedding

Ukuran:
10 × 15 meter

Luas:
150 m²

Tema:
Sage Green & White

PELAMINAN
Garden Wedding

TATA RIAS
Soft Glam

KURSI
100 unit

MEJA
10 unit

LIGHTING
Warm Wedding Lighting

ESTIMASI WEBSITE
Rp22.050.000

Mohon informasi dan konfirmasi lebih lanjut.

Gunakan:

encodeURIComponent()

dan:

https://wa.me/
48. ABOUT PAGE

Route:

/tentang

Section:

Hero
↓
Tentang NKHS TENDA
↓
Pengalaman
↓
Layanan
↓
Portfolio
↓
Mengapa Kami
↓
CTA
49. WHY US

Tampilkan:

Berpengalaman

Berbagai acara pernikahan telah ditangani.

Model Berdasarkan Project Asli

Calon pelanggan dapat memilih referensi dari hasil pekerjaan.

Estimasi Harga Transparan

User dapat memperoleh gambaran harga sebelum menghubungi admin.

Tim Profesional

Tenda, dekorasi dan rias dikerjakan oleh tim.

Fleksibel

Pilihan dapat disesuaikan berdasarkan kebutuhan.

Konsultasi Mudah

Terhubung langsung ke WhatsApp.

50. FAQ

Route:

/faq

FAQ:

Apakah harga di website sudah final?

Belum. Harga yang tampil merupakan estimasi.

Bagaimana harga tenda dihitung?

Harga berdasarkan luas dikali harga model per meter persegi.

Apakah bisa memilih warna?

Bisa, berdasarkan warna yang tersedia.

Apakah bisa request warna lain?

Bisa dikonsultasikan melalui WhatsApp.

Apakah tersedia tata rias?

Ya.

Apakah tersedia paket pernikahan?

Ya.

Apakah melayani luar Tangerang?

Tergantung lokasi dan jadwal.

Apakah bisa survey lokasi?

Informasi survey dikonfirmasi melalui admin.

Gunakan accordion.

51. CONTACT PAGE

Route:

/kontak

Tampilkan:

WhatsApp
Instagram
Email
Alamat
Jam Operasional
Lokasi

CTA:

Konsultasi via WhatsApp
52. FLOATING WHATSAPP

Tampilkan pada seluruh halaman.

Pesan:

Halo NKHS TENDA, saya melihat website NKHS TENDA dan ingin berkonsultasi mengenai kebutuhan acara pernikahan.
53. FOOTER

Isi:

NKHS TENDA

Tenda • Dekorasi • Tata Rias Pernikahan

Wujudkan Momen Indah Anda.

Navigation:

Beranda
Tenda
Tata Rias
Paket
Galeri
Tentang
FAQ
Kontak

Social:

Instagram
WhatsApp
TikTok

Copyright:

© 2026 NKHS TENDA. Seluruh hak dilindungi.

Boleh tambahkan kecil:

Website dibuat oleh Muhammad Noval
54. RESPONSIVE

Test minimal:

360px
390px
768px
1024px
1280px
1440px

Mobile:

Navbar hamburger
1 column card
Gallery 2 column
Builder 1 column
No horizontal scroll
Button mudah ditekan
Text tidak terpotong

Tablet:

2 column card

Desktop:

3-4 column card
Configurator 2 column
Sticky summary
55. SEO

Gunakan:

useSeoMeta()

Homepage title:

NKHS TENDA | Tenda, Dekorasi & Tata Rias Pernikahan

Description:

Jasa tenda, dekorasi, pelaminan dan tata rias pernikahan dengan berbagai pilihan model dan estimasi harga.

Halaman Tenda:

Model Tenda Pernikahan | NKHS TENDA

Tata Rias:

Tata Rias Pengantin | NKHS TENDA

Galeri:

Galeri Pernikahan | NKHS TENDA

Estimasi:

Estimasi Harga Wedding | NKHS TENDA
56. KEYWORD

Gunakan secara natural:

jasa tenda pernikahan
sewa tenda wedding
dekorasi pernikahan
pelaminan
tata rias pengantin
tenda pernikahan Tangerang
dekorasi wedding Tangerang
wedding service Tangerang
57. IMAGE STRUCTURE
public/images/
├── hero/
├── tents/
├── makeup/
├── decorations/
├── projects/
├── packages/
└── gallery/

Gunakan placeholder jika foto asli belum tersedia.

Semua image wajib:

alt
58. PERFORMANCE

Gunakan:

lazy loading
reusable components
data lokal
computed
minimal dependency

Jangan memasang library berat tanpa alasan.

59. ACCESSIBILITY

Pastikan:

button menggunakan <button>
link menggunakan NuxtLink / <a>
input memiliki label
image memiliki alt
focus state terlihat
hamburger punya aria-label
keyboard navigation berfungsi
60. FITUR WAJIB BEKERJA

Pastikan:

Navbar.
Mobile menu.
Semua route.
Tent filtering.
Makeup filtering.
Tent detail dynamic route.
Makeup detail dynamic route.
Gallery dynamic route.
Area calculator.
Multi-area.
Dynamic tent pricing.
Color selection.
Makeup selection.
Quantity kursi.
Quantity meja.
Decoration selection.
Lighting selection.
Transport selection.
Total estimate.
WhatsApp quotation.
FAQ accordion.
Responsive layout.
SEO meta.
61. FITUR YANG TIDAK DIBUAT

Jangan membuat:

Login
Register
Database
Firebase
Supabase
Backend
Admin Dashboard
Online Booking
Payment Gateway
Midtrans
QRIS
Customer Account
Realtime Availability
3D Configurator
AI Makeup Preview
62. ERROR HANDLING

Jika slug tidak ditemukan:

404

Quantity tidak boleh negatif.

Input luas tidak boleh menghasilkan:

NaN
Infinity

Jika tidak ada hasil filter:

Belum ada model yang sesuai.
63. CODE QUALITY

Gunakan TypeScript type/interface.

Hindari any.

Gunakan:

ref()
computed()
props
emits
composable

Pisahkan data dari UI.

Jangan membuat seluruh website di satu file.

64. FINAL CHECK

Setelah implementation selesai:

Jalankan website.
Buka seluruh route.
Test mobile menu.
Test filter.
Test dynamic route.
Test kalkulator 100 m².
Test kalkulator 150 m².
Test quantity.
Test multi-area.
Test total.
Test WhatsApp message.
Check browser console.
Fix Vue warning.
Fix TypeScript error.
Jalankan:
npm run build

Jika build error:

perbaiki sampai berhasil.

65. FINAL OUTPUT

Hasil akhir harus berupa website:

NKHS TENDA

Dengan karakter:

Elegant
Premium
Wedding-oriented
Responsive
Professional
Interactive
Portfolio-ready

Flow utama:

Portfolio
↓
Pilih Model
↓
Masukkan Ukuran
↓
Pilih Warna
↓
Pilih Dekorasi
↓
Pilih Tata Rias
↓
Tambah Fasilitas
↓
Lihat Estimasi
↓
WhatsApp
66. INSTRUKSI TERAKHIR UNTUK CODEX

Implementasikan seluruh requirement ini langsung pada source code.

Jangan hanya menjelaskan.

Jangan hanya memberikan contoh code.

Jangan hanya membuat homepage.

Buat seluruh halaman, component, data, kalkulator, dynamic routes dan responsive design.

Jika file sudah ada, evaluasi dan gunakan kembali jika masih sesuai.

Jika belum ada, buat file yang diperlukan.

Setelah semua selesai:

jalankan build
perbaiki semua error
berikan daftar file yang dibuat
berikan daftar file yang diubah
berikan fitur yang sudah selesai
sebutkan data yang masih placeholder


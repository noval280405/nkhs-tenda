# NKHS TENDA

Website portfolio, katalog, kalkulator estimasi, dan quotation WhatsApp dengan Nuxt 3, Vue 3, TypeScript, dan Tailwind CSS. Implementasi mengacu pada `PRD.md` yang disalin dari lampiran pengguna.

## Menjalankan project

```sh
npm install
npm run dev
```

## Validasi dan produksi

```sh
npm run typecheck
npm run build
npm test
```

Tes browser menggunakan Chromium Playwright. Bila browser belum tersedia pada mesin baru, jalankan `npx playwright install chromium`. `npm test` menjalankan hasil build pada port 3100, memeriksa route dan interaksi tanpa mengirim pesan WhatsApp. Screenshot desktop/mobile disimpan di `tests/screenshots/` dan tidak masuk git.

Jalankan hasil build dengan `node .output/server/index.mjs`, atau gunakan `npm run generate` bila membutuhkan hasil statis. Tidak ada API aplikasi, database, autentikasi, booking otomatis, atau pembayaran.

## Halaman

- `/`: beranda dengan 10 bagian editorial.
- `/tenda`, `/tenda/[slug]`: enam model tenda, filter kategori, foto, warna tersedia, fasilitas, project terkait, CTA estimasi.
- `/tata-rias`, `/tata-rias/[slug]`: tujuh model rias, filter, detail, tambahan makeup, CTA estimasi.
- `/paket`: Simple, Elegant, dan Royal; konsultasi WhatsApp beserta detail paket.
- `/galeri`, `/galeri/[slug]`: enam project demo, filter lokasi, galeri interaktif, detail konfigurasi.
- `/estimasi`: informasi acara, multi-area, ukuran panjang × lebar atau luas langsung, model dan warna per area, satu pelaminan, rias dan tambahan quantity, kursi/meja/karpet/panggung, lighting tambahan, transportasi, total, dan quotation.
- `/tentang`, `/faq`, `/kontak`: profil, accordion FAQ, dan informasi kontak.
- Slug tidak dikenal memberikan status HTTP 404.

## Perhitungan

`utils/estimate.ts` memisahkan rumus dan penyusunan pesan dari komponen UI. Total tenda adalah jumlah biaya setiap area (`luas × tarif model`). Total estimasi menambahkan pelaminan, rias, tambahan rias, furniture, lighting tambahan, dan transportasi. Input kosong, negatif, dan angka tidak terbatas disanitasi. Setiap area harus minimal 1 m² untuk mengaktifkan quotation; nama dan lokasi wajib diisi.

Contoh PRD: 150 m² Modern Sage + Garden Wedding + Soft Glam + 100 kursi + 10 meja + Warm Lighting + Jakarta Barat = **Rp22.050.000**.

Basic lighting sudah termasuk model tenda. Lighting kalkulator adalah penambahan titik / upgrade. Rias wanita sudah termasuk model rias; tambahan wanita dihitung hanya bila pengguna menambah orang lain. Paket menggunakan harga mulai dari dan konsultasi sendiri, bukan harga kalkulator yang disamakan secara otomatis.

## Data yang harus diganti

- `data/site.ts`: WhatsApp, Instagram, TikTok, email, alamat, jam operasional. Seluruh tautan kontak mengambil data dari sumber ini.
- `data/tents.ts`, `makeups.ts`, `decorations.ts`, `furniture.ts`, `lighting.ts`, `transport.ts`, `packages.ts`: model, fasilitas, warna, dan semua harga masih demo.
- `data/projects.ts`, `testimonials.ts`: seluruh project dan testimoni adalah contoh, bukan klaim pelanggan sebenarnya.
- `public/images/`: gambar ilustrasi referensi lokal; sumber tercatat dalam `public/images/README.md`. Beberapa katalog memakai ulang gambar referensi. Foto tidak merepresentasikan tiap gaya tradisional secara spesifik.
- Halaman tentang: pengalaman usaha dan profil tim menunggu informasi terverifikasi.
- Kontak menampilkan wilayah Tangerang, bukan titik kantor sebenarnya. Google Fonts memerlukan jaringan, dengan font sistem sebagai fallback.

## Arsitektur

- `pages/`: halaman dan dynamic routes (listing memakai `index.vue` di folder terkait agar detail tidak menjadi nested page tanpa outlet).
- `components/`: 50 komponen layout, home, tent, makeup, package, estimate, gallery, dan UI.
- `data/`: 12 file data lokal dan interface.
- `composables/`: state kalkulator dan metadata SEO.
- `utils/`: sanitasi angka, format rupiah, perhitungan dan pesan WhatsApp.
- `assets/css/main.css`: Tailwind dan gaya editorial responsif.
- `tests/site.spec.ts`: 10 tes untuk rumus, route, SEO, 404, interaksi, quotation, dan enam viewport.

Daftar file dan hasil pemeriksaan ada di `IMPLEMENTATION.md`.

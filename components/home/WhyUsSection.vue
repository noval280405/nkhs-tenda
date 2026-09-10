<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="DENGAN SEPENUH HATI"
      title="Detail kecil. Arti yang besar."
    />
    <div class="why-grid">
      <div
        v-for="item in [
          {
            title: 'Berpengalaman',
            text: 'Persiapan setiap kebutuhan acara secara cermat.',
          },
          {
            title: 'Referensi model yang jelas',
            text: 'Pilih dari koleksi model yang tersedia. Dokumentasi asli segera hadir.',
          },
          {
            title: 'Estimasi transparan',
            text: 'Lihat rincian biaya sebelum mulai berkonsultasi.',
          },
          {
            title: 'Tim profesional',
            text: 'Tenda, dekorasi, dan tata rias dalam satu koordinasi.',
          },
          {
            title: 'Pilihan fleksibel',
            text: 'Sesuaikan luas, warna, dan kebutuhan perlengkapan.',
          },
          {
            title: 'Konsultasi mudah',
            text: 'Bicarakan seluruh pilihan langsung melalui WhatsApp.',
          },
        ]"
        :key="item.title"
      >
        <span class="gold">✧</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

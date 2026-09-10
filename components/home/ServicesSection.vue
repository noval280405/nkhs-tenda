<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="UNTUK SETIAP DETAIL ISTIMEWA"
      title="Satu tempat, seluruh kebutuhan Anda."
    />
    <div class="services-grid">
      <NuxtLink
        v-for="(service, i) in [
          {
            name: 'Tenda Pernikahan',
            text: 'Berbagai model tenda untuk kebutuhan acara.',
            to: '/tenda',
            icon: '⌂',
          },
          {
            name: 'Dekorasi & Pelaminan',
            text: 'Pilihan dekorasi untuk suasana penuh cerita.',
            to: '/tenda#dekorasi',
            icon: '❀',
          },
          {
            name: 'Tata Rias',
            text: 'Rias pengantin modern dan tradisional.',
            to: '/tata-rias',
            icon: '♧',
          },
          {
            name: 'Furniture & Perlengkapan',
            text: 'Kursi, meja, lighting, dan detail pelengkap.',
            to: '/estimasi',
            icon: '♧',
          },
        ]"
        :key="service.name"
        :to="service.to"
        class="service-card"
      >
        <div>
          <span class="service-icon">{{ service.icon }}</span>
          <span class="muted text-xs">0{{ i + 1 }}</span>
        </div>
        <h3>{{ service.name }}</h3>
        <p>{{ service.text }}</p>
        <span class="text-link">Jelajahi layanan ↗</span>
      </NuxtLink>
    </div>
  </section>
</template>

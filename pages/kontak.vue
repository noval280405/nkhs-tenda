<script setup lang="ts">
import { siteConfig } from '~/data/site'
import { whatsappUrl } from '~/utils/format'
usePageSeo('Kontak & Konsultasi | NKHS TENDA')
</script>
<template>
  <div>
    <UiPageHero
      title="Cerita indah dimulai dari halo."
      description="Bicarakan inspirasi, kebutuhan, dan rencana pernikahan Anda bersama kami."
    />
    <section class="container contact-grid section pt-0">
      <div class="panel">
        <p class="eyebrow">MARI BERBINCANG</p>
        <h2>Kami siap mendengar.</h2>
        <p class="mb-6">
          Sampaikan tanggal, lokasi, dan model yang Anda sukai untuk memulai
          konsultasi.
        </p>
        <a class="btn" :href="whatsappUrl()" target="_blank" rel="noopener">
          Konsultasi via WhatsApp ↗
        </a>
        <dl class="contact-list">
          <dt>WhatsApp</dt>
          <dd>+{{ siteConfig.whatsapp }}</dd>
          <dt>Instagram</dt>
          <dd>
            <a
              :href="`https://instagram.com/${siteConfig.instagram.slice(1)}`"
              target="_blank"
              rel="noopener"
            >
              {{ siteConfig.instagram }} ↗
            </a>
          </dd>
          <dt>Email</dt>
          <dd>
            <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a>
          </dd>
          <dt>Jam operasional</dt>
          <dd>{{ siteConfig.hours }}</dd>
        </dl>
        <p class="image-note">
          Kontak dan jam operasional masih placeholder, perlu diganti sebelum
          publikasi.
        </p>
      </div>
      <div class="location-panel">
        <span class="location-symbol">⌖</span>
        <p class="eyebrow">BERBASIS DI</p>
        <h2>{{ siteConfig.address }}</h2>
        <p>Melayani area Tangerang dan sekitarnya sesuai hasil konsultasi.</p>
        <a
          class="text-link"
          href="https://www.google.com/maps/search/?api=1&query=Tangerang%20Banten"
          target="_blank"
          rel="noopener"
        >
          Lihat area Tangerang di peta ↗
        </a>
        <p class="image-note">
          Lokasi menunjukkan wilayah layanan, bukan alamat kantor terverifikasi.
        </p>
      </div>
    </section>
  </div>
</template>

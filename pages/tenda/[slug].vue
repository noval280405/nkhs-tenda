<script setup lang="ts">
import { tents } from '~/data/tents'
import { projects } from '~/data/projects'
import { whatsappUrl } from '~/utils/format'
const route = useRoute()
const tent = tents.find((t) => t.slug === route.params.slug)
if (!tent)
  throw createError({
    statusCode: 404,
    statusMessage: 'Model tenda tidak ditemukan',
  })
const color = ref(tent.availableColors[0] || '')
const related = projects.filter((p) => p.tentModel === tent.name)
usePageSeo(`${tent.name} | NKHS TENDA`, tent.description, tent.image)
</script>
<template>
  <div class="container section">
    <NuxtLink class="text-link" to="/tenda">← Semua Model Tenda</NuxtLink>
    <div class="detail-grid">
      <TentGallery :images="tent.gallery" :title="tent.name" />
      <div>
        <p class="eyebrow">{{ tent.category }} COLLECTION</p>
        <h1>{{ tent.name }}</h1>
        <p>{{ tent.description }}</p>
        <p class="image-note">
          Gambar merupakan ilustrasi konsep AI. Pelaminan, kursi, bunga, dan
          perlengkapan di foto tidak otomatis termasuk tarif tenda per m².
        </p>
        <p class="mt-6">
          Mulai dari
          <UiPriceDisplay :value="tent.pricePerSquareMeter" unit="m²" />
        </p>
        <h3 class="mt-6">Pilihan warna</h3>
        <TentColorSelector v-model="color" :options="tent.availableColors" />
        <a
          class="text-link"
          :href="
            whatsappUrl(
              'Halo NKHS TENDA, saya ingin konsultasi warna lain untuk ' +
                tent.name,
            )
          "
          target="_blank"
          rel="noopener"
        >
          Butuh warna lain? Konsultasikan via WhatsApp ↗
        </a>
        <h3 class="mt-6">Fasilitas termasuk</h3>
        <ul class="feature-list">
          <li v-for="feature in tent.features" :key="feature">
            ✓ {{ feature }}
          </li>
        </ul>
        <UiPrimaryButton
          :to="`/estimasi?tent=${tent.slug}&color=${encodeURIComponent(color)}`"
        >
          Buat Estimasi
        </UiPrimaryButton>
      </div>
    </div>
    <section class="section">
      <UiSectionTitle
        title="Project terkait"
        description="Contoh konfigurasi demo sebagai referensi."
      />
      <div class="grid-cards">
        <GalleryProjectCard
          v-for="project in related"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

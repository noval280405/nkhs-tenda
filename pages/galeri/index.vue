<script setup lang="ts">
import { projects } from '~/data/projects'
const filter = ref('Semua')
const options = ['Semua', ...new Set(projects.map((item) => item.location))]
const filtered = computed(() =>
  projects.filter(
    (item) => filter.value === 'Semua' || item.location === filter.value,
  ),
)
usePageSeo('Galeri Pernikahan | NKHS TENDA')
</script>
<template>
  <div>
    <GalleryHero />
    <section class="container section pt-0">
      <GalleryFilter v-model="filter" :options="options" />
      <GalleryProjectGrid :projects="filtered" />
      <p class="image-note">
        Foto ilustrasi · Model dan harga demo untuk referensi konsultasi.
      </p>
    </section>
    <HomeCTASection />
  </div>
</template>

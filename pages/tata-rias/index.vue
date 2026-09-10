<script setup lang="ts">
import { makeups } from '~/data/makeups'
const filter = ref('Semua')
const options = ['Semua', ...new Set(makeups.map((item) => item.category))]
const filtered = computed(() =>
  makeups.filter(
    (item) => filter.value === 'Semua' || item.category === filter.value,
  ),
)
usePageSeo('Tata Rias Pengantin | NKHS TENDA')
</script>
<template>
  <div>
    <MakeupHero />
    <section class="container section pt-0">
      <MakeupFilter v-model="filter" :options="options" />
      <MakeupGrid :makeups="filtered" />
      <p class="image-note">
        Foto ilustrasi · Model dan harga demo untuk referensi konsultasi.
      </p>
    </section>
    <HomeCTASection />
  </div>
</template>

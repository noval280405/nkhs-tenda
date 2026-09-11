<script setup lang="ts">
import { makeups } from '~/data/makeups'
const route = useRoute()
const validCategory = (value: unknown) =>
  typeof value === 'string' && makeups.some((m) => m.category === value)
    ? value
    : 'Semua'
const filter = ref(validCategory(route.query.category))
watch(
  () => route.query.category,
  (value) => (filter.value = validCategory(value)),
)
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
    <section id="koleksi-rias" class="container section pt-0">
      <MakeupFilter v-model="filter" :options="options" />
      <MakeupGrid :makeups="filtered" />
      <p class="image-note">
        Setiap gambar menggambarkan kategori rias yang dipilih. Ilustrasi AI
        untuk referensi; hasil dan detail adat dikonfirmasi saat konsultasi.
      </p>
    </section>
    <HomeCTASection />
  </div>
</template>

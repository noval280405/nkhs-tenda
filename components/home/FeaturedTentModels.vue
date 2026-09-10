<script setup lang="ts">
import { tents } from '~/data/tents'
</script>
<template>
  <section class="section tinted">
    <div class="container">
      <div class="section-heading">
        <UiSectionTitle
          eyebrow="THE TENT COLLECTION"
          title="Ruang indah untuk cerita Anda."
          description="Temukan model tenda yang selaras dengan momen dan impian Anda."
        />
        <NuxtLink class="text-link" to="/tenda">Lihat Semua Model ↗</NuxtLink>
      </div>
      <div class="grid-cards">
        <TentCard
          v-for="tent in tents.slice(0, 3)"
          :key="tent.id"
          :tent="tent"
        />
      </div>
      <p class="image-note">
        Koleksi demo · Foto merupakan ilustrasi referensi.
      </p>
    </div>
  </section>
</template>

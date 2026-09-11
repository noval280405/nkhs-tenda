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
          description="Dari drapery sage yang lembut hingga champagne yang megah. Temukan suasana resepsi Anda."
        />
        <NuxtLink class="text-link" to="/tenda">Lihat Semua Model ↗</NuxtLink>
      </div>
      <div class="grid-cards">
        <TentCard
          v-for="tent in [tents[1]!, tents[0]!, tents[3]!]"
          :key="tent.id"
          :tent="tent"
        />
      </div>
      <p class="image-note">
        Ilustrasi konsep AI · Pelaminan dan perlengkapan pada gambar dipilih dan
        dihitung terpisah.
      </p>
    </div>
  </section>
</template>

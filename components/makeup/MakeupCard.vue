<script setup lang="ts">
import type { MakeupModel } from '~/data/types'
defineProps<{ makeup: MakeupModel }>()
</script>
<template>
  <article class="catalog-card">
    <NuxtLink :to="`/tata-rias/${makeup.slug}`" class="card-image portrait">
      <img
        :src="makeup.image"
        :alt="`Referensi rias ${makeup.name}`"
        loading="lazy"
      />
      <span class="image-badge">{{ makeup.category }}</span>
    </NuxtLink>
    <div class="card-body">
      <h3>{{ makeup.name }}</h3>
      <p>Natural complexion · Soft eye makeup · Nude lips</p>
      <p class="muted text-xs">Mulai dari</p>
      <UiPriceDisplay :value="makeup.price" />
      <NuxtLink class="text-link" :to="`/tata-rias/${makeup.slug}`">
        Lihat Detail
        <span>↗</span>
      </NuxtLink>
    </div>
  </article>
</template>

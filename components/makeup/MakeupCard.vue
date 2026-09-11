<script setup lang="ts">
import type { MakeupModel } from '~/data/types'
defineProps<{ makeup: MakeupModel }>()
</script>
<template>
  <article class="catalog-card makeup-card">
    <NuxtLink :to="`/tata-rias/${makeup.slug}`" class="card-image portrait">
      <img
        :src="makeup.image"
        :alt="`Ilustrasi konsep ${makeup.category}: ${makeup.summary}`"
        loading="lazy"
        width="1024"
        height="1536"
      />
      <span class="image-badge">{{ makeup.category }}</span>
    </NuxtLink>
    <div class="card-body">
      <h3>{{ makeup.name }}</h3>
      <p class="makeup-summary">{{ makeup.summary }}</p>
      <p class="muted text-xs">Mulai dari</p>
      <UiPriceDisplay :value="makeup.price" />
      <NuxtLink class="text-link" :to="`/tata-rias/${makeup.slug}`">
        Lihat Detail
        <span>↗</span>
      </NuxtLink>
    </div>
  </article>
</template>

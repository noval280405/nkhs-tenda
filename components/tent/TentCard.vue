<script setup lang="ts">
import type { TentModel } from '~/data/types'
import { colors } from '~/data/site'
defineProps<{ tent: TentModel }>()
</script>
<template>
  <article class="catalog-card">
    <NuxtLink :to="`/tenda/${tent.slug}`" class="card-image">
      <img :src="tent.image" :alt="`Ilustrasi ${tent.name}`" loading="lazy" />
      <span class="image-badge">{{ tent.category }}</span>
      <span class="image-arrow">↗</span>
    </NuxtLink>
    <div class="card-body">
      <p class="eyebrow">{{ tent.category }} · ELEGANT</p>
      <h3>
        <NuxtLink :to="`/tenda/${tent.slug}`">{{ tent.name }}</NuxtLink>
      </h3>
      <div class="card-price">
        <div>
          <span class="muted text-xs">Mulai dari</span>
          <UiPriceDisplay :value="tent.pricePerSquareMeter" unit="m²" />
        </div>
        <div class="swatches">
          <span
            v-for="color in tent.availableColors"
            :key="color"
            :style="{ background: colors[color] }"
            :title="color"
            :aria-label="color"
          />
        </div>
      </div>
      <NuxtLink :to="`/tenda/${tent.slug}`" class="text-link">
        Lihat Model
        <span>↗</span>
      </NuxtLink>
    </div>
  </article>
</template>

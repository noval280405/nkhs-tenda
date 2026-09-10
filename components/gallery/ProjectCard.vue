<script setup lang="ts">
import type { WeddingProject } from '~/data/types'
defineProps<{ project: WeddingProject }>()
</script>
<template>
  <NuxtLink :to="`/galeri/${project.slug}`" class="project-card">
    <img
      :src="project.image"
      :alt="`Ilustrasi ${project.title}`"
      loading="lazy"
    />
    <div>
      <p class="eyebrow">{{ project.location }} · {{ project.year }} · DEMO</p>
      <h3>
        {{ project.title }}
        <span>↗</span>
      </h3>
      <p>{{ project.tentModel }} · {{ project.area }} m²</p>
    </div>
  </NuxtLink>
</template>

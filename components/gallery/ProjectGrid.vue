<script setup lang="ts">
import type { WeddingProject } from '~/data/types'
defineProps<{ projects: WeddingProject[] }>()
</script>
<template>
  <div class="project-grid">
    <GalleryProjectCard
      v-for="item in projects"
      :key="item.id"
      :project="item"
    />
  </div>
  <p v-if="!projects.length" class="empty">Belum ada model yang sesuai.</p>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'
</script>
<template>
  <section class="container section">
    <div class="section-heading">
      <UiSectionTitle
        eyebrow="MOMENTS TO REMEMBER"
        title="Setiap perayaan punya cerita."
        description="Referensi suasana dan detail untuk menginspirasi hari bahagia Anda."
      />
      <NuxtLink class="text-link" to="/galeri">Jelajahi Galeri ↗</NuxtLink>
    </div>
    <div class="grid-cards">
      <GalleryProjectCard
        v-for="project in projects.slice(0, 3)"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

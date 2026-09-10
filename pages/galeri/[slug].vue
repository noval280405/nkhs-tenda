<script setup lang="ts">
import { projects } from '~/data/projects'
import { tents } from '~/data/tents'
const route = useRoute()
const project = projects.find((p) => p.slug === route.params.slug)
if (!project)
  throw createError({
    statusCode: 404,
    statusMessage: 'Project tidak ditemukan',
  })
const tent = tents.find((t) => t.name === project.tentModel)
usePageSeo(
  `${project.title} | NKHS TENDA`,
  `${project.tentModel} di ${project.location}. Referensi project demo.`,
  project.image,
)
</script>
<template>
  <div class="container section">
    <NuxtLink class="text-link" to="/galeri">← Kembali ke Galeri</NuxtLink>
    <UiPageHero
      :title="project.title"
      :description="`${project.location} · ${project.year} · Project demo`"
    />
    <UiPhotoGallery :images="project.gallery" :title="project.title" />
    <dl class="project-facts">
      <div
        v-for="(value, key) in {
          Lokasi: project.location,
          Tahun: project.year,
          'Model Tenda': project.tentModel,
          'Tema Warna': project.theme,
          Luas: project.area + ' m²',
          Pelaminan: project.decoration,
          'Tata Rias': project.makeup,
        }"
        :key="key"
      >
        <dt>{{ key }}</dt>
        <dd>{{ value }}</dd>
      </div>
    </dl>
    <UiPrimaryButton
      :to="`/estimasi?tent=${tent?.slug || ''}&area=${project.area}`"
    >
      Buat Estimasi Serupa
    </UiPrimaryButton>
  </div>
</template>

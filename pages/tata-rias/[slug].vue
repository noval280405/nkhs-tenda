<script setup lang="ts">
import { makeups, makeupExtras } from '~/data/makeups'
import { projects } from '~/data/projects'
const route = useRoute()
const makeup = makeups.find((m) => m.slug === route.params.slug)
if (!makeup)
  throw createError({
    statusCode: 404,
    statusMessage: 'Model tata rias tidak ditemukan',
  })
usePageSeo(`${makeup.name} | NKHS TENDA`, makeup.description, makeup.image)
</script>
<template>
  <div class="container section">
    <NuxtLink class="text-link" to="/tata-rias">← Semua Tata Rias</NuxtLink>
    <div class="detail-grid makeup-detail">
      <MakeupGallery :images="makeup.gallery" :title="makeup.name" />
      <div>
        <p class="eyebrow">{{ makeup.category }}</p>
        <h1>{{ makeup.name }}</h1>
        <p>{{ makeup.description }}</p>
        <p class="mt-6">
          Mulai dari
          <UiPriceDisplay :value="makeup.price" />
        </p>
        <h3 class="mt-6">Karakter rias</h3>
        <ul class="makeup-highlights">
          <li v-for="highlight in makeup.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
        <h3 class="mt-6">Yang termasuk</h3>
        <ul class="feature-list">
          <li v-for="item in makeup.included" :key="item">✓ {{ item }}</li>
        </ul>
        <h3>Tambahan makeup</h3>
        <p v-for="item in makeupExtras" :key="item.id" class="summary-line">
          <span>{{ item.name }}</span>
          <UiPriceDisplay :value="item.price" unit="orang" />
        </p>
        <p class="image-note">
          Rias pengantin wanita sudah termasuk model. Tambahan wanita hanya
          untuk orang lain.
        </p>
        <UiPrimaryButton :to="`/estimasi?makeup=${makeup.slug}`">
          Pilih Tata Rias
        </UiPrimaryButton>
      </div>
    </div>
    <section class="section">
      <UiSectionTitle title="Referensi portfolio" />
      <div class="grid-cards">
        <GalleryProjectCard
          v-for="project in projects.filter((p) => p.makeup === makeup.name)"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { tents } from '~/data/tents'
import { decorations } from '~/data/decorations'
const filter = ref('Semua')
const options = ['Semua', ...new Set(tents.map((item) => item.category))]
const filtered = computed(() =>
  tents.filter(
    (item) => filter.value === 'Semua' || item.category === filter.value,
  ),
)
usePageSeo('Model Tenda Pernikahan | NKHS TENDA')
</script>
<template>
  <div>
    <TentHero />
    <section class="container section pt-0">
      <TentFilter v-model="filter" :options="options" />
      <TentGrid :tents="filtered" />
      <p class="image-note">
        Foto ilustrasi · Model dan harga demo untuk referensi konsultasi.
      </p>
      <section id="dekorasi" class="section">
        <UiSectionTitle
          title="Dekorasi & Pelaminan"
          eyebrow="THE FINISHING TOUCH"
        />
        <div class="grid-cards">
          <article
            v-for="item in decorations"
            :key="item.id"
            class="catalog-card"
          >
            <div class="card-image">
              <img
                :src="item.image"
                :alt="`Ilustrasi ${item.name}`"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>{{ item.name }}</h3>
              <p>
                Mulai dari
                <UiPriceDisplay :value="item.price" />
              </p>
              <NuxtLink
                class="text-link"
                :to="{ path: '/estimasi', query: { decoration: item.id } }"
              >
                Pilih Pelaminan ↗
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>
    </section>
    <HomeCTASection />
  </div>
</template>

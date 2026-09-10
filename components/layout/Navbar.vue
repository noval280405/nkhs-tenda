<script setup lang="ts">
import { navigation } from '~/data/site'
const open = ref(false)
const route = useRoute()
watch(
  () => route.fullPath,
  () => (open.value = false),
)
</script>
<template>
  <a class="skip-link" href="#main">Lewati ke konten</a>
  <header class="navbar">
    <div class="container nav-inner">
      <NuxtLink to="/" class="brand" aria-label="NKHS TENDA Beranda">
        <span class="brand-mark">
          N
          <span>✧</span>
        </span>
        <span>
          NKHS TENDA
          <small>WEDDING & EVENT</small>
        </span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Navigasi utama">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <NuxtLink to="/estimasi" class="btn nav-cta">
        Buat Estimasi
        <span>↗</span>
      </NuxtLink>
      <button
        class="menu-button"
        aria-label="Buka atau tutup menu"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        @click="open = !open"
      >
        {{ open ? '✕' : '☰' }}
      </button>
    </div>
    <nav
      v-if="open"
      id="mobile-nav"
      class="mobile-nav"
      aria-label="Navigasi seluler"
      @keydown.esc="open = false"
    >
      <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">
        {{ item.label }}
      </NuxtLink>
      <NuxtLink to="/estimasi">Buat Estimasi ↗</NuxtLink>
    </nav>
  </header>
</template>

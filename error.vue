<script setup lang="ts">
defineProps<{ error: { statusCode: number; statusMessage?: string } }>()
</script>
<template>
  <main class="container page-hero">
    <p class="eyebrow">NKHS TENDA</p>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage || 'Halaman tidak ditemukan' }}</p>
    <a href="/" class="btn mt-6">Kembali ke Beranda</a>
  </main>
</template>

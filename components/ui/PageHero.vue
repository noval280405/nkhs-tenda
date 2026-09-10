<script setup lang="ts">
defineProps<{ title: string; eyebrow?: string; description?: string }>()
</script>
<template>
  <header class="page-hero container">
    <p class="eyebrow">{{ eyebrow || 'NKHS TENDA · WEDDING COLLECTION' }}</p>
    <h1>{{ title }}</h1>
    <p v-if="description" class="intro">{{ description }}</p>
    <div class="ornament">✧</div>
  </header>
</template>

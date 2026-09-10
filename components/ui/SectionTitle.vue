<script setup lang="ts">
defineProps<{ title: string; eyebrow?: string; description?: string }>()
</script>
<template>
  <div class="section-title">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

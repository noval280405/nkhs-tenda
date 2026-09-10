<script setup lang="ts">
defineProps<{ to: string; secondary?: boolean }>()
</script>
<template>
  <NuxtLink :to="to" :class="['btn', { 'btn-outline': secondary }]">
    <slot />
    <span aria-hidden="true">↗</span>
  </NuxtLink>
</template>

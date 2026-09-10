<script setup lang="ts">
import { furniture } from '~/data/furniture'
defineProps<{ quantities: Record<string, number> }>()
</script>
<template>
  <EstimateQuantityOptions :options="furniture" :quantities="quantities" />
</template>

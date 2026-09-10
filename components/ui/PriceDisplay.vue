<script setup lang="ts">
import { rupiah } from '~/utils/format'
defineProps<{ value: number; unit?: string }>()
</script>
<template>
  <span class="price">
    {{ rupiah(value) }}
    <small v-if="unit">/ {{ unit }}</small>
  </span>
</template>

<script setup lang="ts">
import type { TentModel } from '~/data/types'
defineProps<{ tents: TentModel[] }>()
</script>
<template>
  <div class="grid-cards">
    <TentCard v-for="item in tents" :key="item.id" :tent="item" />
  </div>
  <p v-if="!tents.length" class="empty">Belum ada model yang sesuai.</p>
</template>

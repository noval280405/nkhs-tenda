<script setup lang="ts">
import type { MakeupModel } from '~/data/types'
defineProps<{ makeups: MakeupModel[] }>()
</script>
<template>
  <div class="grid-cards">
    <MakeupCard v-for="item in makeups" :key="item.id" :makeup="item" />
  </div>
  <p v-if="!makeups.length" class="empty">Belum ada model yang sesuai.</p>
</template>

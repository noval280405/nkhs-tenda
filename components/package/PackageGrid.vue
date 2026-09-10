<script setup lang="ts">
import { packages } from '~/data/packages'
</script>
<template>
  <div class="grid-cards">
    <PackageCard v-for="item in packages" :key="item.id" :item="item" />
  </div>
</template>

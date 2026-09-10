<script setup lang="ts">
import { disclaimer } from '~/data/site'
usePageSeo('Paket Pernikahan | NKHS TENDA')
</script>
<template>
  <div>
    <PackageHero />
    <HomePackagePreview />
    <p class="container image-note pb-12">{{ disclaimer }}</p>
    <HomeCTASection />
  </div>
</template>

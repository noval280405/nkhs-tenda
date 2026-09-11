<script setup lang="ts">
defineProps<{ images: string[]; title: string; portrait?: boolean }>()
const active = ref(0)
</script>
<template>
  <div>
    <img
      :class="['detail-photo', { 'detail-portrait': portrait }]"
      :src="images[active]"
      :alt="`${title} — foto ilustrasi ${active + 1}`"
    />
    <div v-if="images.length > 1" class="gallery-thumbs">
      <button
        v-for="(src, i) in images"
        :key="i"
        :aria-label="`Lihat foto ${i + 1}`"
        :aria-pressed="active === i"
        @click="active = i"
      >
        <img :src="src" :alt="`${title}, thumbnail ${i + 1}`" loading="lazy" />
      </button>
    </div>
    <p class="image-note">
      Ilustrasi konsep dibuat dengan AI, bukan dokumentasi project NKHS TENDA.
    </p>
  </div>
</template>

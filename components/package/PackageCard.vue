<script setup lang="ts">
import { packages } from '~/data/packages'
import { whatsappUrl, rupiah } from '~/utils/format'
defineProps<{ item: (typeof packages)[number] }>()
</script>
<template>
  <article :class="['package-card', { popular: item.id === 'elegant' }]">
    <p class="eyebrow">
      {{ item.id === 'elegant' ? 'PILIHAN FAVORIT' : 'WEDDING COLLECTION' }}
    </p>
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <span class="muted text-xs">Mulai dari</span>
    <UiPriceDisplay :value="item.price" />
    <ul>
      <li v-for="feature in item.included" :key="feature">
        ✓ &nbsp; {{ feature }}
      </li>
    </ul>
    <a
      class="btn btn-outline"
      :href="
        whatsappUrl(
          `Halo NKHS TENDA, saya tertarik paket ${item.name}, mulai dari ${rupiah(item.price)} (harga demo). Termasuk: ${item.included.join(', ')}. Mohon konfirmasi detail, ukuran, harga, dan ketersediaan.`,
        )
      "
      target="_blank"
      rel="noopener"
    >
      Konsultasi Paket ↗
    </a>
  </article>
</template>

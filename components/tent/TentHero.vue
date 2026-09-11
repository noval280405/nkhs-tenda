<script setup lang="ts">
import { tents } from '~/data/tents'
const featured = tents[1]!
</script>
<template>
  <header class="collection-hero container">
    <div class="collection-copy">
      <p class="eyebrow">THE INDONESIAN WEDDING COLLECTION</p>
      <h1>
        Model Tenda
        <br />
        <em>Pernikahan.</em>
      </h1>
      <p>
        Kain yang terangkai indah. Cahaya yang hangat. Ruang yang siap menjadi
        bagian dari cerita Anda.
      </p>
      <p class="collection-description">
        Temukan tenda dekorasi khas pernikahan Indonesia, dari plafon serut
        minimalis hingga drapery champagne yang megah.
      </p>
      <div class="collection-links">
        <a href="#koleksi-tenda" class="text-link">Jelajahi 6 model tenda ↓</a>
        <a href="#dekorasi" class="text-link">Pilihan pelaminan ↗</a>
      </div>
    </div>
    <div class="collection-tent-image">
      <img
        :src="featured.image"
        alt="Ilustrasi AI tenda serut sage dengan chandelier dan pelaminan"
        width="1536"
        height="1024"
        fetchpriority="high"
      />
      <div class="collection-caption">
        <span>THE SAGE COLLECTION</span>
        <span>01 / 06</span>
      </div>
    </div>
  </header>
</template>

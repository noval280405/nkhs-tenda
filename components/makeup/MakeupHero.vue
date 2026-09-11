<script setup lang="ts">
import { makeups } from '~/data/makeups'
const modern = makeups[1]!
const sunda = makeups[5]!
</script>
<template>
  <header class="collection-hero makeup-hero container">
    <div class="collection-copy">
      <p class="eyebrow">BRIDAL BEAUTY · MADE PERSONAL</p>
      <h1>
        Tata Rias
        <br />
        <em>Pengantin.</em>
      </h1>
      <p>
        Menjadi diri sendiri.
        <br />
        Dengan sentuhan yang istimewa.
      </p>
      <p class="collection-description">
        Dari natural yang lembut hingga pesona paes Jawa dan siger Sunda.
        Temukan karakter rias yang terasa paling Anda.
      </p>
      <a href="#koleksi-rias" class="text-link">Temukan gaya Anda ↓</a>
    </div>
    <div class="collection-portraits">
      <figure>
        <img
          :src="modern.image"
          alt="Ilustrasi AI Soft Glam Bride dengan rias champagne dan bibir rosy"
          width="1024"
          height="1536"
          fetchpriority="high"
        />
        <figcaption>MODERN ROMANCE</figcaption>
      </figure>
      <figure>
        <img
          :src="sunda.image"
          alt="Ilustrasi AI pengantin Sunda dengan siger dan untaian melati"
          width="1024"
          height="1536"
        />
        <figcaption>TIMELESS HERITAGE</figcaption>
      </figure>
    </div>
  </header>
</template>

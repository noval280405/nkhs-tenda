<script setup lang="ts">
import { makeups } from '~/data/makeups'
const featured = makeups[5]!
</script>
<template>
  <section class="makeup-preview container">
    <div class="makeup-photo">
      <img
        :src="featured.image"
        alt="Ilustrasi AI pengantin Sunda dengan siger perak dan melati"
        width="1024"
        height="1536"
        loading="lazy"
      />
      <span class="photo-label">THE BEAUTY OF OUR HERITAGE</span>
    </div>
    <div class="makeup-copy">
      <p class="eyebrow">BRIDAL BEAUTY</p>
      <h2>
        Cantik yang terasa
        <br />
        <em>seperti diri Anda.</em>
      </h2>
      <p>
        Dari sentuhan natural hingga keanggunan adat Nusantara. Rias, sanggul,
        dan hijab dirangkai untuk merayakan kecantikan Anda di hari istimewa.
      </p>
      <div class="makeup-category-links">
        <NuxtLink
          v-for="category in [
            'Natural',
            'Traditional Jawa',
            'Traditional Sunda',
            'Hijab Bride',
          ]"
          :key="category"
          :to="{ path: '/tata-rias', query: { category } }"
        >
          {{ category.replace('Traditional ', '') }} ↗
        </NuxtLink>
      </div>
      <UiPrimaryButton to="/tata-rias" secondary>
        Temukan Gaya Rias Anda
      </UiPrimaryButton>
      <p class="image-note">
        Ilustrasi konsep AI · Hasil rias disesuaikan melalui konsultasi.
      </p>
    </div>
  </section>
</template>

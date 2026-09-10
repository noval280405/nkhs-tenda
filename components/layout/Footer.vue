<script setup lang="ts">
import { navigation, siteConfig } from '~/data/site'
import { whatsappUrl } from '~/utils/format'
</script>
<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <NuxtLink to="/" class="footer-brand">NKHS TENDA</NuxtLink>
        <p>Tenda • Dekorasi • Tata Rias Pernikahan</p>
        <p class="serif">Wujudkan Momen Indah Anda.</p>
      </div>
      <div>
        <p class="eyebrow">JELAJAHI</p>
        <nav class="footer-links">
          <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
      <div>
        <p class="eyebrow">MARI TERHUBUNG</p>
        <a :href="whatsappUrl()" target="_blank" rel="noopener">WhatsApp ↗</a>
        <a
          :href="`https://instagram.com/${siteConfig.instagram.slice(1)}`"
          target="_blank"
          rel="noopener"
        >
          Instagram ↗
        </a>
        <a
          :href="`https://tiktok.com/${siteConfig.tiktok}`"
          target="_blank"
          rel="noopener"
        >
          TikTok ↗
        </a>
        <p>{{ siteConfig.address }}</p>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 NKHS TENDA. Seluruh hak dilindungi.</span>
      <span>Website demo · Foto ilustrasi, harga & kontak placeholder.</span>
    </div>
  </footer>
</template>

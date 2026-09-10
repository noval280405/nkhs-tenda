<script setup lang="ts">
import { whatsappUrl } from '~/utils/format'
</script>
<template>
  <a
    :href="whatsappUrl()"
    target="_blank"
    rel="noopener noreferrer"
    class="floating-wa"
    aria-label="Konsultasi melalui WhatsApp"
  >
    <svg
      viewBox="0 0 24 24"
      width="25"
      height="25"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.1-4.6A8.5 8.5 0 1 1 20.5 11.5Z"
      />
      <path d="M8 7c-2 3 3 8 6 8l2-2-3-1-1 1-2-2 1-1-1-3Z" />
    </svg>
  </a>
</template>

<script setup lang="ts">
import type { EstimateLine } from '~/utils/estimate'
import { rupiah } from '~/utils/format'
import { disclaimer } from '~/data/site'
defineProps<{
  lines: EstimateLine[]
  total: number
  totalArea: number
  valid: boolean
  whatsapp: string
}>()
</script>
<template>
  <aside class="estimate-summary">
    <p class="eyebrow">09 · YOUR WEDDING ESTIMATE</p>
    <h2>Estimasi Anda</h2>
    <p class="summary-area">
      Total luas
      <strong>{{ totalArea }} m²</strong>
    </p>
    <div class="summary-items">
      <div v-for="(line, i) in lines" :key="i" class="summary-item">
        <h4>{{ line.label }}</h4>
        <p>{{ line.detail }}</p>
        <strong>{{ rupiah(line.price) }}</strong>
      </div>
    </div>
    <div class="summary-total" aria-live="polite" aria-atomic="true">
      <span>TOTAL ESTIMASI</span>
      <strong data-testid="total">{{ rupiah(total) }}</strong>
    </div>
    <p class="disclaimer">{{ disclaimer }}</p>
    <p class="image-note">Harga dan nomor WhatsApp masih data demo.</p>
    <a
      v-if="valid"
      data-testid="quotation"
      class="btn w-full"
      :href="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      Konsultasikan Pilihan Ini ↗
    </a>
    <button v-else class="btn w-full" type="submit">
      Lengkapi Data untuk Konsultasi ↗
    </button>
    <p v-if="!valid" class="validation">
      Isi nama, lokasi, dan luas minimal 1 m² pada setiap area.
    </p>
    <p class="summary-note">
      Pilihan akan diteruskan ke WhatsApp untuk konsultasi. Tidak ada booking
      otomatis.
    </p>
  </aside>
</template>

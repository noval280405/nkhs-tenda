<script setup lang="ts">
import { safeNumber } from '~/utils/format'
import type { EventInfo } from '~/utils/estimate'
defineProps<{ event: EventInfo }>()
</script>
<template>
  <div class="form-grid">
    <label>
      Nama Anda
      <span class="gold">*</span>
      <input
        v-model="event.name"
        name="name"
        autocomplete="name"
        maxlength="100"
        placeholder="Nama lengkap"
        required
      />
    </label>
    <label>
      Tanggal acara
      <input v-model="event.date" type="date" name="date" />
      <small>Informasi tanggal, tanpa pengecekan ketersediaan.</small>
    </label>
    <label>
      Lokasi / alamat acara
      <span class="gold">*</span>
      <input
        v-model="event.location"
        name="location"
        maxlength="300"
        autocomplete="street-address"
        placeholder="Alamat tempat acara"
        required
      />
    </label>
    <label>
      Jumlah tamu
      <input
        :value="event.guests"
        @input="
          event.guests = Math.floor(
            safeNumber(($event.target as HTMLInputElement).value, 100000),
          )
        "
        @blur="($event.target as HTMLInputElement).value = String(event.guests)"
        type="number"
        min="0"
        max="100000"
        step="1"
        name="guests"
      />
    </label>
    <label class="col-span-full">
      Catatan
      <textarea
        v-model="event.notes"
        name="notes"
        rows="3"
        maxlength="2000"
        placeholder="Ceritakan kebutuhan atau konsep yang Anda impikan…"
      />
    </label>
  </div>
</template>

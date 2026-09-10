<script setup lang="ts">
import { whatsappUrl } from '~/utils/format'
const {
  event,
  config,
  addArea,
  removeArea,
  lines,
  total,
  totalArea,
  valid,
  whatsapp,
} = useEstimate()
usePageSeo('Estimasi Harga Wedding | NKHS TENDA')
const submitted = ref(false)
</script>
<template>
  <div>
    <UiPageHero
      eyebrow="LET’S PLAN YOUR BEAUTIFUL DAY"
      title="Impian Anda, mulai terencana."
      description="Pilih model dan sesuaikan kebutuhan. Dapatkan gambaran biaya pernikahan secara langsung."
    />
    <form
      class="container estimate-layout section pt-0"
      @submit.prevent="submitted = true"
    >
      <div class="configurator">
        <section class="panel">
          <p class="eyebrow">01 · INFORMASI ACARA</p>
          <h2>Ceritakan hari istimewa Anda.</h2>
          <EstimateEventForm :event="event" />
        </section>
        <section class="panel">
          <p class="eyebrow">02 — 04 · MODEL, UKURAN & WARNA</p>
          <h2>Ruang untuk setiap momen.</h2>
          <p class="mb-6">
            Setiap area dapat menggunakan model dan warna berbeda. Masukkan
            ukuran lokasi untuk menghitung biaya tenda.
          </p>
          <EstimateAreaCalculator
            v-for="area in config.areas"
            :key="area.id"
            :area="area"
            :removable="config.areas.length > 1"
            @remove="removeArea(area.id)"
          />
          <button type="button" class="btn btn-outline w-full" @click="addArea">
            + Tambah Area
          </button>
          <a
            :href="
              whatsappUrl(
                'Halo NKHS TENDA, saya ingin konsultasi pilihan warna lain untuk tenda.',
              )
            "
            target="_blank"
            rel="noopener"
            class="text-link mt-4"
          >
            Butuh warna lain? Konsultasikan via WhatsApp ↗
          </a>
        </section>
        <section class="panel">
          <p class="eyebrow">05 · DEKORASI & PELAMINAN</p>
          <h2>Pusat perhatian yang memikat.</h2>
          <p class="mb-6">Pilih satu pelaminan utama.</p>
          <EstimateDecorationSelector v-model="config.decoration" />
        </section>
        <section class="panel">
          <p class="eyebrow">06 · TATA RIAS</p>
          <h2>Sentuhan cantik untuk Anda.</h2>
          <EstimateMakeupSelector
            v-model="config.makeup"
            :extras="config.extras"
          />
        </section>
        <section class="panel">
          <p class="eyebrow">07 · FURNITURE & PERLENGKAPAN</p>
          <h2>Lengkapi setiap detail.</h2>
          <EstimateFurnitureSelector :quantities="config.furniture" />
          <h3 class="mt-8 mb-3">Lighting tambahan</h3>
          <p class="image-note">
            Basic lighting sudah termasuk tenda. Opsi berikut adalah tambahan
            titik atau peningkatan pencahayaan.
          </p>
          <EstimateLightingSelector v-model="config.lighting" />
        </section>
        <section class="panel">
          <p class="eyebrow">08 · LOKASI & TRANSPORTASI</p>
          <h2>Menuju tempat bahagia Anda.</h2>
          <EstimateTransportSelector v-model="config.transport" />
        </section>
        <p v-if="submitted && !valid" class="validation" role="alert">
          Lengkapi nama, lokasi acara, dan ukuran semua area sebelum mengirim
          penawaran.
        </p>
      </div>
      <EstimateSummary
        :lines="lines"
        :total="total"
        :total-area="totalArea"
        :valid="valid"
        :whatsapp="whatsapp"
      />
    </form>
  </div>
</template>

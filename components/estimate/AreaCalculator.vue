<script setup lang="ts">
import { tents } from '~/data/tents'
import { areaSize, type EstimateArea } from '~/utils/estimate'
import { safeNumber, rupiah } from '~/utils/format'
const props = defineProps<{ area: EstimateArea; removable: boolean }>()
defineEmits<{ remove: [] }>()
const tent = computed(() => tents.find((t) => t.slug === props.area.tentSlug)!)
const changeTent = (slug: string) => {
  props.area.tentSlug = slug
  props.area.color = tents.find((t) => t.slug === slug)!.availableColors[0]!
}
const size = computed(() => areaSize(props.area))
const update = (field: 'length' | 'width' | 'direct', event: Event) => {
  const input = event.target as HTMLInputElement
  props.area[field] = safeNumber(
    input.value,
    field === 'direct' ? 1000000 : 1000,
  )
  input.value = String(props.area[field])
}
</script>
<template>
  <article class="area-card">
    <div class="section-heading">
      <label :for="`area-name-${area.id}`">
        Nama area
        <input
          :id="`area-name-${area.id}`"
          v-model="area.name"
          maxlength="80"
        />
      </label>
      <button
        v-if="removable"
        class="remove-button"
        type="button"
        :aria-label="`Hapus ${area.name}`"
        @click="$emit('remove')"
      >
        Hapus ×
      </button>
    </div>
    <EstimateTentSelector
      :id="area.id"
      :model-value="area.tentSlug"
      @update:model-value="changeTent"
    />
    <div class="area-model">
      <img :src="tent.image" :alt="`Ilustrasi ${tent.name}`" loading="lazy" />
      <div>
        <h3>{{ tent.name }}</h3>
        <p>{{ rupiah(tent.pricePerSquareMeter) }} / m²</p>
        <small>Termasuk plafon dekor, curtain, dan basic lighting.</small>
      </div>
    </div>
    <fieldset>
      <legend class="field-label">Metode pengukuran</legend>
      <div class="segmented">
        <button
          type="button"
          :aria-pressed="area.method === 'dimensions'"
          :class="{ selected: area.method === 'dimensions' }"
          @click="area.method = 'dimensions'"
        >
          Panjang × Lebar
        </button>
        <button
          type="button"
          :aria-pressed="area.method === 'direct'"
          :class="{ selected: area.method === 'direct' }"
          @click="area.method = 'direct'"
        >
          Masukkan Luas
        </button>
      </div>
    </fieldset>
    <div v-if="area.method === 'dimensions'" class="form-grid">
      <label>
        Panjang (meter)
        <input
          :value="area.length"
          type="number"
          min="0"
          max="1000"
          step="0.1"
          @input="update('length', $event)"
        />
      </label>
      <label>
        Lebar (meter)
        <input
          :value="area.width"
          type="number"
          min="0"
          max="1000"
          step="0.1"
          @input="update('width', $event)"
        />
      </label>
    </div>
    <label v-else>
      Luas (m²)
      <input
        :value="area.direct"
        type="number"
        min="1"
        max="1000000"
        step="0.1"
        @input="update('direct', $event)"
      />
    </label>
    <p v-if="size < 1" class="validation" role="status">
      Luas area minimal 1 m². Input kosong dihitung 0.
    </p>
    <div class="area-result">
      <span>{{ size }} m² × {{ rupiah(tent.pricePerSquareMeter) }}</span>
      <strong>{{ rupiah(size * tent.pricePerSquareMeter) }}</strong>
    </div>
    <EstimateColorSelector
      v-model="area.color"
      :options="tent.availableColors"
    />
  </article>
</template>

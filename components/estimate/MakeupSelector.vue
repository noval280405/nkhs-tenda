<script setup lang="ts">
import { makeups, makeupExtras } from '~/data/makeups'
defineProps<{ modelValue: string; extras: Record<string, number> }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
const options = makeups.map((m) => ({
  id: String(m.id),
  name: m.name,
  price: m.price,
  image: m.image,
}))
</script>
<template>
  <EstimateOptionSelector
    :options="options"
    :model-value="modelValue"
    name="makeup"
    @update:model-value="$emit('update:modelValue', $event)"
  />
  <h3 class="mt-6">Tambahan rias</h3>
  <p class="image-note">
    Model rias sudah termasuk satu pengantin wanita. Tambahan wanita hanya untuk
    orang lain.
  </p>
  <EstimateQuantityOptions :options="makeupExtras" :quantities="extras" />
</template>

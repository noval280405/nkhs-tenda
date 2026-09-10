<script setup lang="ts">
import { transport } from '~/data/transport'
import { rupiah } from '~/utils/format'
defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <label>
    Area layanan
    <select
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option v-for="item in transport" :key="item.id" :value="item.id">
        {{ item.name }} · {{ rupiah(item.price) }}
      </option>
    </select>
  </label>
  <p class="image-note">
    Biaya transportasi demo. Untuk luar area, tulis lokasi di catatan dan
    konsultasikan.
  </p>
</template>

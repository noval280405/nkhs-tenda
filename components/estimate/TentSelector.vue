<script setup lang="ts">
import { tents } from '~/data/tents'
import { rupiah } from '~/utils/format'
defineProps<{ modelValue: string; id: number }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <label :for="`tent-${id}`">
    Model tenda
    <select
      :id="`tent-${id}`"
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option v-for="tent in tents" :key="tent.id" :value="tent.slug">
        {{ tent.name }} · {{ rupiah(tent.pricePerSquareMeter) }}/m²
      </option>
    </select>
  </label>
</template>

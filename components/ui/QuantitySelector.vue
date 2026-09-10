<script setup lang="ts">
import { safeNumber } from '~/utils/format'
const props = defineProps<{ modelValue: number; label: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const set = (value: unknown) =>
  emit('update:modelValue', Math.floor(safeNumber(value, 100000)))
</script>
<template>
  <div class="quantity">
    <button
      type="button"
      :aria-label="`Kurangi ${label}`"
      :disabled="!modelValue"
      @click="set(modelValue - 1)"
    >
      −
    </button>
    <input
      type="number"
      min="0"
      max="100000"
      step="1"
      :aria-label="`Jumlah ${label}`"
      :value="modelValue"
      @input="set(($event.target as HTMLInputElement).value)"
      @blur="
        ($event.target as HTMLInputElement).value = String(props.modelValue)
      "
    />
    <button
      type="button"
      :aria-label="`Tambah ${label}`"
      @click="set(modelValue + 1)"
    >
      +
    </button>
  </div>
</template>

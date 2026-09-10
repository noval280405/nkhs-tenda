<script setup lang="ts">
import { lighting } from '~/data/lighting'
defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <EstimateOptionSelector
    :options="lighting"
    :model-value="modelValue"
    name="lighting"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

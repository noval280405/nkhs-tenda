<script setup lang="ts">
import { decorations } from '~/data/decorations'
defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <EstimateOptionSelector
    :options="decorations"
    :model-value="modelValue"
    name="decorations"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

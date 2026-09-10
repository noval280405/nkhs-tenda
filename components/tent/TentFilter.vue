<script setup lang="ts">
defineProps<{ options: string[]; modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <UiFilterBar
    :options="options"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

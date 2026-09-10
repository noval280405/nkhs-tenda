<script setup lang="ts">
defineProps<{ options: string[]; modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <fieldset>
    <legend class="field-label">Pilihan warna</legend>
    <TentColorSelector
      :options="options"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </fieldset>
</template>

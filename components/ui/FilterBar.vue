<script setup lang="ts">
defineProps<{ options: string[]; modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <div class="filter-bar" aria-label="Filter kategori">
    <button
      v-for="option in options"
      :key="option"
      :class="{ selected: modelValue === option }"
      :aria-pressed="modelValue === option"
      @click="$emit('update:modelValue', option)"
    >
      {{ option }}
    </button>
  </div>
</template>

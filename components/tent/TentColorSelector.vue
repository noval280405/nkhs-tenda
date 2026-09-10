<script setup lang="ts">
import { colors } from '~/data/site'
defineProps<{ options: string[]; modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <div class="color-options">
    <button
      v-for="color in options"
      :key="color"
      :aria-pressed="modelValue === color"
      :class="{ chosen: modelValue === color }"
      @click="$emit('update:modelValue', color)"
    >
      <span :style="{ background: colors[color] }" />
      {{ color }}
      <span v-if="modelValue === color" aria-hidden="true">✓</span>
    </button>
  </div>
</template>

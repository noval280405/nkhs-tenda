<script setup lang="ts">
import type { Option } from '~/data/types'
import { rupiah } from '~/utils/format'
defineProps<{
  options: Option[]
  modelValue: string
  name: string
  noneLabel?: string
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <div :class="['option-grid', { 'makeup-options': name === 'makeup' }]">
    <label :class="['option-card', { chosen: !modelValue }]">
      <input
        type="radio"
        :name="name"
        value=""
        :checked="!modelValue"
        @change="$emit('update:modelValue', '')"
      />
      <span>
        {{ noneLabel || 'Tidak ditambahkan' }}
        <small>Rp0</small>
      </span>
    </label>
    <label
      v-for="option in options"
      :key="option.id"
      :class="['option-card', { chosen: modelValue === option.id }]"
    >
      <input
        type="radio"
        :name="name"
        :value="option.id"
        :checked="modelValue === option.id"
        @change="$emit('update:modelValue', option.id)"
      />
      <img
        v-if="option.image"
        :src="option.image"
        :alt="`Ilustrasi ${option.name}`"
        loading="lazy"
      />
      <span>
        {{ option.name }}
        <small>{{ rupiah(option.price) }}</small>
      </span>
    </label>
  </div>
</template>

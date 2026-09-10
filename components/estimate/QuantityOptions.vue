<script setup lang="ts">
import type { Option } from '~/data/types'
import { rupiah } from '~/utils/format'
defineProps<{ options: Option[]; quantities: Record<string, number> }>()
</script>
<template>
  <div class="quantity-list">
    <div v-for="item in options" :key="item.id" class="quantity-row">
      <div>
        <h4>{{ item.name }}</h4>
        <small>{{ rupiah(item.price) }} / {{ item.unit || 'unit' }}</small>
      </div>
      <UiQuantitySelector
        :model-value="quantities[item.id] || 0"
        :label="item.name"
        @update:model-value="quantities[item.id] = $event"
      />
      <strong>{{ rupiah(item.price * (quantities[item.id] || 0)) }}</strong>
    </div>
  </div>
</template>

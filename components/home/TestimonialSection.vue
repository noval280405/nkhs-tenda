<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>
<template>
  <section class="section testimonials">
    <div class="container">
      <UiSectionTitle
        eyebrow="LOVE NOTES · TESTIMONI DEMO"
        title="Kebahagiaan yang dibagikan."
      />
      <div class="grid-cards">
        <figure v-for="item in testimonials" :key="item.name">
          <span class="gold">★★★★★</span>
          <blockquote>“{{ item.quote }}”</blockquote>
          <figcaption>
            {{ item.name }}
            <small>{{ item.location }} · Contoh testimoni</small>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

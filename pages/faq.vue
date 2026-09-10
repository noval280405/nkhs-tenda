<script setup lang="ts">
import { faqs } from '~/data/faq'
usePageSeo('Pertanyaan Umum | NKHS TENDA')
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }),
    },
  ],
})
</script>
<template>
  <div>
    <UiPageHero
      title="Hal-hal yang ingin Anda tahu."
      description="Jawaban untuk membantu Anda mempersiapkan hari istimewa."
    />
    <section class="container faq-list section pt-0">
      <details v-for="(faq, i) in faqs" :key="faq.question">
        <summary>
          <span class="gold">0{{ i + 1 }}</span>
          {{ faq.question }}
          <span class="faq-plus">+</span>
        </summary>
        <p>{{ faq.answer }}</p>
      </details>
    </section>
    <HomeCTASection />
  </div>
</template>

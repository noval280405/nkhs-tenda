<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="MUDAH, DARI AWAL HINGGA HARI ISTIMEWA"
      title="Rencanakan dengan lebih tenang."
    />
    <div class="steps-grid">
      <div
        v-for="(step, i) in [
          {
            name: 'Temukan inspirasi',
            text: 'Jelajahi model tenda, tata rias, dan portfolio.',
          },
          {
            name: 'Sesuaikan kebutuhan',
            text: 'Pilih warna, luas area, dan perlengkapan Anda.',
          },
          {
            name: 'Lihat estimasi',
            text: 'Dapatkan gambaran biaya secara langsung.',
          },
          {
            name: 'Mari wujudkan',
            text: 'Kirim pilihan dan konsultasikan via WhatsApp.',
          },
        ]"
        :key="step.name"
      >
        <span class="step-number">0{{ i + 1 }}</span>
        <h3>{{ step.name }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </div>
    <div class="text-center mt-8">
      <UiPrimaryButton to="/estimasi">Mulai Estimasi Anda</UiPrimaryButton>
    </div>
  </section>
</template>

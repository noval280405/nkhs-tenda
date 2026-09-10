<template>
  <section class="hero">
    <img
      class="hero-image"
      src="/images/hero/wedding.jpg"
      alt="Ilustrasi tenda pernikahan dengan chandelier dan dekorasi elegan"
      fetchpriority="high"
    />
    <div class="hero-shade" />
    <div class="container hero-content">
      <p class="eyebrow">
        <span class="short-line" />
        TENDA · DEKORASI · TATA RIAS PERNIKAHAN
      </p>
      <h1>
        Wujudkan Hari Spesial
        <br />
        dengan Sentuhan
        <br />
        <em>Sempurna.</em>
      </h1>
      <p class="hero-description">
        Layanan tenda, dekorasi dan tata rias pernikahan untuk membantu
        menciptakan momen istimewa sesuai kebutuhan Anda.
      </p>
      <div class="button-row">
        <UiPrimaryButton to="/tenda">Lihat Model Tenda</UiPrimaryButton>
        <NuxtLink class="hero-secondary" to="/estimasi">
          Buat Estimasi Harga
          <span>↗</span>
        </NuxtLink>
      </div>
      <div class="hero-foot">
        <span>DIRANCANG DENGAN HATI. DIKENANG SELAMANYA.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </div>
    <span class="hero-caption">WEDDING INSPIRATION · FOTO ILUSTRASI</span>
  </section>
</template>

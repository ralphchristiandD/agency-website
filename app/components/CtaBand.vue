<script setup lang="ts">
defineProps<{ title: string; button: string }>()
</script>

<template>
  <!-- Full-width band above the footer: the building photo tinted brand blue, text centered on top.
       To change the photo, replace /public/images/cta-building.jpg. -->
  <!-- Tint: the photo turns grey and slightly brighter, then takes on the light blue underneath
       (the brand accent blue mixed with 25% white). Lighter blue = lower the 75%; check the white title stays readable. -->
  <section class="relative isolate overflow-hidden bg-[color-mix(in_srgb,var(--color-accent)_75%,white)]">
    <img
      src="/images/cta-building.jpg"
      alt=""
      width="2400"
      height="1600"
      loading="lazy"
      decoding="async"
      class="absolute inset-0 -z-10 size-full object-cover object-[center_35%] mix-blend-multiply brightness-110 grayscale"
    >

    <div class="container-page flex flex-col items-center py-20 text-center sm:py-28">
      <h2 class="max-w-3xl text-4xl leading-[1.1] !text-white sm:text-6xl">{{ title }}</h2>
      <NuxtLink to="/contact" class="btn-light mt-10">{{ button }}</NuxtLink>
    </div>
  </section>
</template>

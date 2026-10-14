<script setup lang="ts">
defineProps<{ title: string; button: string }>()
</script>

<template>
  <section class="section">
    <div class="container-page">
      <div v-reveal class="reveal relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center sm:px-16 sm:py-20">
        <div class="pointer-events-none absolute inset-0 opacity-[0.07]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px" />
        <h2 class="relative mx-auto max-w-2xl text-3xl font-bold !text-white sm:text-4xl">{{ title }}</h2>
        <NuxtLink to="/contact" class="btn-light relative mt-8">{{ button }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

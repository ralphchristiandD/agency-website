<script setup lang="ts">
defineProps<{ title: string; button: string }>()
</script>

<template>
  <section class="bg-navy pb-12 pt-20 sm:pb-14 sm:pt-24">
    <div class="container-page flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
      <h2 class="max-w-3xl text-4xl leading-[1.1] !text-white sm:text-6xl">{{ title }}</h2>
      <NuxtLink to="/contact" class="btn-light shrink-0">{{ button }}</NuxtLink>
    </div>
  </section>
</template>

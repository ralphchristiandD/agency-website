<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
</script>

<template>
  <NuxtLayout>
    <section class="grid min-h-[60vh] place-items-center py-24">
      <div class="container-page text-center">
        <p class="eyebrow">{{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}</p>
        <h1 class="mt-4 text-4xl sm:text-5xl">{{ error.statusCode === 404 ? "This page doesn't exist." : 'Please try again.' }}</h1>
        <button class="btn-primary mt-8" @click="clearError({ redirect: '/' })">Back to Home</button>
      </div>
    </section>
  </NuxtLayout>
</template>

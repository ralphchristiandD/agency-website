<!--
  WELCOME PAGE (client request): the first thing visitors see. Two halves:
  - VA Support (navy)       -> the agency site at /va-support
  - Shirt Printing (cream)  -> the client's separate shirt website (same tab; link in data/site.ts)
  Side by side on desktop, stacked on phones. The round "Enrich" badge sits on the seam between them
  (it lives inside the VA half, pinned to its edge, so it always lines up with the seam).
-->
<script setup lang="ts">
import { site } from '~/data/site'

// Full-screen page: no site header or footer here
definePageMeta({ layout: false })

useSeoMeta({
  title: 'VA Support & Shirt Printing',
  description:
    'Enrich: virtual assistant support (administrative, data, and video) and custom shirt printing, based in Sacramento, California.',
})
</script>

<template>
  <main class="relative flex min-h-dvh flex-col lg:flex-row">
    <h1 class="sr-only">Enrich: VA Support and Shirt Printing</h1>

    <!-- VA SUPPORT -->
    <NuxtLink
      to="/va-support"
      class="group relative z-10 flex min-h-[50dvh] flex-1 items-center justify-center bg-navy px-8 pb-20 pt-12 text-white transition-colors duration-300 hover:bg-navy-light lg:min-h-dvh lg:py-24"
    >
      <!-- Round badge on the seam: bottom edge of this half on phones, right edge on desktop.
           TODO: replace the text with the client's round logo, e.g. <img src="/logo.png" alt=""> -->
      <span
        class="pointer-events-none absolute bottom-0 left-1/2 grid size-20 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_12px_40px_-12px_rgb(15_30_61/0.45)] ring-4 ring-cream sm:size-24 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2"
        aria-hidden="true"
      >
        <span class="font-serif text-xl text-navy sm:text-2xl">Enrich</span>
      </span>
      <div class="rise max-w-sm text-center">
        <!-- Laptop with a person on screen -->
        <svg class="mx-auto size-20 transition-transform duration-300 group-hover:-translate-y-1.5 motion-reduce:transition-none sm:size-24" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="7" y="9" width="34" height="23" rx="2" />
          <path d="M3 37h42l-2.5 3h-37z" />
          <circle cx="16" cy="18" r="3" />
          <path d="M11 27a5 5 0 0 1 10 0" />
          <path d="M25 16h11M25 21h11M25 26h7" />
        </svg>
        <h2 class="mt-6 text-4xl !text-white sm:text-5xl">VA Support</h2>
        <p class="mt-3 text-lg leading-relaxed text-white/75">
          Virtual assistant support for growing businesses: admin, data, and video.
        </p>
        <span class="btn-light mt-8 group-hover:bg-mist">Explore VA Support</span>
      </div>
    </NuxtLink>

    <!-- SHIRT PRINTING (opens the client's shirt website in the same tab) -->
    <a
      :href="site.shirtPrinting.url"
      class="group flex min-h-[50dvh] flex-1 items-center justify-center bg-cream px-8 pb-12 pt-20 text-navy lg:min-h-dvh lg:py-24"
    >
      <div class="rise max-w-sm text-center" style="animation-delay: 120ms">
        <!-- T-shirt with a small printed picture -->
        <svg class="mx-auto size-20 transition-transform duration-300 group-hover:-translate-y-1.5 motion-reduce:transition-none sm:size-24" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M17 6 6 11.5l3.5 8 4.5-2V42h20V17.5l4.5 2L42 11.5 31 6a7 7 0 0 1-14 0z" />
          <rect x="18.5" y="20" width="11" height="9" rx="1" />
          <path d="M19.5 28l3.5-3.5 2.5 2.5 1.5-1.5 2 2" />
        </svg>
        <h2 class="mt-6 text-4xl sm:text-5xl">{{ site.shirtPrinting.title }}</h2>
        <p class="mt-3 text-lg leading-relaxed text-slate">{{ site.shirtPrinting.text }}</p>
        <span class="btn-primary mt-8 group-hover:bg-navy-light">Visit Shirt Printing</span>
      </div>
    </a>
  </main>
</template>

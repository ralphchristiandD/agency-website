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
      class="group relative z-10 flex min-h-[50dvh] flex-1 items-center justify-center bg-navy px-8 pb-16 pt-10 text-white transition-colors duration-300 hover:bg-navy-light lg:min-h-dvh lg:py-24"
    >
      <!-- Round badge with the Enrich logo, on the seam: bottom edge of this half on phones, right edge on desktop -->
      <span
        class="pointer-events-none absolute bottom-0 left-1/2 grid size-20 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_12px_40px_-12px_rgb(15_30_61/0.45)] ring-4 ring-cream sm:size-24 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2"
        aria-hidden="true"
      >
        <!-- The logo file has built-in empty space around the mark, so it's drawn larger than it looks -->
        <BrandLogo class="size-16 text-navy sm:size-20" />
      </span>
      <div class="rise max-w-sm text-center">
        <!-- Photo (the icon version is saved under the Git tag welcome-with-icons).
             Decorative: the title below already names the choice, so alt is empty. -->
        <img
          src="/images/welcome-va.png"
          alt=""
          width="580"
          height="820"
          class="mx-auto aspect-[4/3] w-40 rounded-2xl object-cover object-[60%_35%] shadow-[0_20px_40px_-20px_rgb(0_0_0/0.6)] ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1.5 motion-reduce:transition-none sm:w-72"
        >
        <h2 class="mt-5 text-4xl !text-white sm:mt-8 sm:text-5xl">VA Support</h2>
        <p class="mt-3 text-lg leading-relaxed text-white/75">
          Virtual assistant support for growing businesses: admin, data, and video.
        </p>
        <span class="btn-light mt-6 group-hover:bg-mist sm:mt-8">Explore VA Support</span>
      </div>
    </NuxtLink>

    <!-- SHIRT PRINTING (opens the client's shirt website in the same tab) -->
    <a
      :href="site.shirtPrinting.url"
      class="group flex min-h-[50dvh] flex-1 items-center justify-center bg-cream px-8 pb-12 pt-20 text-navy lg:min-h-dvh lg:py-24"
    >
      <div class="rise max-w-sm text-center" style="animation-delay: 120ms">
        <!-- Photo of his printed shirts (from his shirt website) -->
        <img
          src="/images/welcome-shirt.jpg"
          alt=""
          width="1280"
          height="719"
          class="mx-auto aspect-[4/3] w-40 rounded-2xl object-cover shadow-[0_20px_40px_-20px_rgb(15_30_61/0.45)] ring-1 ring-navy/10 transition-transform duration-300 group-hover:-translate-y-1.5 motion-reduce:transition-none sm:w-72"
        >
        <h2 class="mt-5 text-4xl sm:mt-8 sm:text-5xl">{{ site.shirtPrinting.title }}</h2>
        <p class="mt-3 text-lg leading-relaxed text-slate">{{ site.shirtPrinting.text }}</p>
        <span class="btn-primary mt-6 group-hover:bg-navy-light sm:mt-8">Visit Shirt Printing</span>
      </div>
    </a>
  </main>
</template>

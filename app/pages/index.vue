<!--
  WELCOME PAGE (client request): the first thing visitors see. Two halves:
  - VA Support (navy)       -> the agency site at /va-support
  - Shirt Printing (cream)  -> the client's separate shirt website (same tab; link in data/site.ts)
  Side by side on desktop, stacked on phones. The round "Enrich" badge sits on the seam between them
  (it lives inside the VA half, pinned to its edge, so it always lines up with the seam).
  Each half has a background photo under a color overlay (navy / cream). On hover the photo zooms
  in slightly and the text lifts. Earlier versions: Git tag welcome-with-icons (icons), and the
  commit "photos instead of icons" (small framed photos).
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
      class="group relative z-10 flex min-h-[50dvh] flex-1 items-center justify-center px-8 pb-16 pt-10 text-white lg:min-h-dvh lg:py-24"
    >
      <!-- Background photo + navy overlay (clipped here so the badge below can overflow the edge) -->
      <span class="absolute inset-0 overflow-hidden bg-navy" aria-hidden="true">
        <img
          src="/images/welcome-va.jpg"
          alt=""
          class="size-full object-cover object-[65%_30%] transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
        >
        <span class="absolute inset-0 bg-navy/[0.72] transition-colors duration-500 group-hover:bg-navy/[0.66]" />
      </span>

      <!-- Round badge with the Enrich logo, on the seam: bottom edge of this half on phones, right edge on desktop -->
      <span
        class="pointer-events-none absolute bottom-0 left-1/2 z-10 grid size-20 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_12px_40px_-12px_rgb(15_30_61/0.45)] ring-4 ring-cream sm:size-24 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2"
        aria-hidden="true"
      >
        <!-- The logo file has built-in empty space around the mark, so it's drawn larger than it looks -->
        <BrandLogo class="size-16 text-navy sm:size-20" />
      </span>

      <div class="rise relative max-w-sm text-center">
        <div class="transition-transform duration-300 group-hover:-translate-y-1.5 motion-reduce:transition-none">
          <h2 class="text-4xl !text-white sm:text-6xl">VA Support</h2>
          <p class="mt-4 text-lg leading-relaxed text-white/85">
            Virtual assistant support for growing businesses: admin, data, and video.
          </p>
          <span class="btn-light mt-7 group-hover:bg-mist sm:mt-9">Explore VA Support</span>
        </div>
      </div>
    </NuxtLink>

    <!-- SHIRT PRINTING (opens the client's shirt website in the same tab) -->
    <a
      :href="site.shirtPrinting.url"
      class="group relative flex min-h-[50dvh] flex-1 items-center justify-center px-8 pb-12 pt-20 text-navy lg:min-h-dvh lg:py-24"
    >
      <!-- Background photo + cream overlay -->
      <span class="absolute inset-0 overflow-hidden bg-cream" aria-hidden="true">
        <img
          src="/images/welcome-shirt.jpg"
          alt=""
          class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
        >
        <span class="absolute inset-0 bg-cream/[0.76] transition-colors duration-500 group-hover:bg-cream/70" />
        <!-- Soft cream glow behind the text only, so the busy shirt lettering doesn't fight the words -->
        <span class="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_center,var(--color-cream)_0%,transparent_100%)] opacity-80" />
      </span>

      <div class="rise relative max-w-sm text-center" style="animation-delay: 120ms">
        <div class="transition-transform duration-300 group-hover:-translate-y-1.5 motion-reduce:transition-none">
          <h2 class="text-4xl sm:text-6xl">{{ site.shirtPrinting.title }}</h2>
          <p class="mt-4 text-lg leading-relaxed text-charcoal">{{ site.shirtPrinting.text }}</p>
          <span class="btn-primary mt-7 group-hover:bg-navy-light sm:mt-9">Visit Shirt Printing</span>
        </div>
      </div>
    </a>
  </main>
</template>

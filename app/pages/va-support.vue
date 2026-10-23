<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
  title: 'Administrative, Data & Video Support for Growing Businesses',
  description:
    'U.S.-led business support: administrative operations, data analytics and reporting, and professional video editing. Less busywork, better insights, greater impact.',
})

// The headline shades line by line from navy to light blue
const heroLines = [
  { text: 'Less Busywork.', color: 'text-navy' },
  { text: 'Better Insights.', color: 'text-accent-mid' },
  { text: 'Greater Impact.', color: 'text-accent' },
] as const

const highlights = [
  'Personalized service',
  'Skilled remote professionals',
  'U.S.-based client communication',
  'Flexible project-based and ongoing support',
]

const reasons = [
  { title: 'U.S.-Based Communication', text: 'A local point of contact for clear communication and coordination.' },
  { title: 'Multi-Skilled Support', text: 'Administrative, analytical, and creative capabilities through one agency.' },
  { title: 'Flexible Engagements', text: 'Project-based or ongoing support according to your needs.' },
  { title: 'Personalized Service', text: 'Solutions tailored to each business rather than one-size-fits-all packages.' },
]

const steps = [
  { title: 'Tell Us What You Need', text: 'Share your business needs, goals, and challenges.' },
  { title: 'We Create a Support Plan', text: 'We identify the right services and agree on deliverables.' },
  { title: 'We Get to Work', text: 'Our team provides support while you focus on your business.' },
]
</script>

<template>
  <div>
    <!-- HERO: black-and-white staircase photo ("steps up") across the full width of the screen,
         faded to white behind the text. To change the photo, replace /public/images/hero-staircase.jpg. -->
    <section class="relative isolate overflow-hidden bg-white">
      <img
        src="/images/hero-staircase.jpg"
        alt=""
        width="1600"
        height="1067"
        fetchpriority="high"
        class="absolute inset-0 -z-10 size-full object-cover grayscale"
      >
      <!-- White fade so the text stays easy to read: from the bottom on phones, from the left on desktop -->
      <div class="absolute inset-0 -z-10 bg-linear-to-t from-white/90 via-white/70 via-55% to-white/15 lg:bg-linear-to-r lg:from-white/80 lg:via-white/50 lg:via-40% lg:to-white/0 lg:to-70%" />

      <div class="container-page pb-16 pt-28 sm:pb-24 sm:pt-40 lg:flex lg:min-h-[44rem] lg:flex-col lg:justify-center lg:py-24">
        <p class="eyebrow rise">Business support, done right</p>
        <h1 class="mt-5 text-[2.375rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-[5rem]">
          <span
            v-for="(line, i) in heroLines"
            :key="line.text"
            class="rise block"
            :class="line.color"
            :style="{ animationDelay: `${i * 90}ms` }"
          >{{ line.text }}</span>
        </h1>
        <!-- Charcoal instead of the usual slate: slate is too faint on the grey photo -->
        <p class="rise mt-6 max-w-xl text-lg leading-relaxed text-charcoal" style="animation-delay: 300ms">
          From administrative operations and data analytics to professional video editing, we help businesses work smarter, stay organized, and grow.
        </p>
        <!-- Text links with an arrow instead of buttons (developer's choice) -->
        <div class="rise mt-6 flex flex-wrap gap-x-8 gap-y-1" style="animation-delay: 300ms">
          <NuxtLink to="/contact" class="link-arrow text-navy">
            <span>Let's Work Together
              <svg class="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4.5 11.5l7-7M6 4.5h5.5V10" /></svg>
            </span>
          </NuxtLink>
          <!-- Points to Our Services while the Portfolio page is hidden (see backups/portfolio-page) -->
          <a href="#services" class="link-arrow text-charcoal hover:text-navy">
            <span>Explore Our Work
              <svg class="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4.5 11.5l7-7M6 4.5h5.5V10" /></svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- WHO WE ARE
         Desktop: the heading's first line and the paragraph's first line sit level,
         and the checklist starts on the row below, level with the end of the heading. -->
    <section class="section bg-mist">
      <div class="container-page">
        <p v-reveal class="eyebrow reveal">Who we are</p>
        <div v-reveal class="reveal mt-4 grid gap-y-8 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-0" style="transition-delay: 100ms">
          <h2 class="text-4xl leading-[1.1] sm:text-5xl">Your Business Support Team, Without the Overhead.</h2>
          <p class="text-base leading-relaxed text-slate sm:text-justify lg:-mt-[3px]">
            We're a U.S.-led team providing dependable administrative, analytical, and creative support to growing businesses. Our mission is simple: take work off your plate, help you make better decisions, and deliver quality work you can count on.
          </p>
          <ul class="grid gap-4 sm:grid-cols-2 lg:col-start-2">
            <li v-for="h in highlights" :key="h" class="flex items-start gap-3 font-medium text-navy">
              <!-- Small, thin check: outlined circle (developer wanted it lighter than the solid one) -->
              <span class="mt-1 grid size-4 shrink-0 place-items-center rounded-full border border-navy/40 text-navy">
                <svg class="size-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg>
              </span>
              {{ h }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SERVICES
         On desktop each card shares the same rows (subgrid), so titles, dividers,
         lists, and buttons line up across all three cards. -->
    <section id="services" class="section">
      <div class="container-page">
        <div v-reveal class="reveal max-w-2xl">
          <p class="eyebrow">Our services</p>
          <h2 class="mt-4 text-4xl leading-[1.1] sm:text-5xl">Three ways we take work off your plate.</h2>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-3">
          <article
            v-for="(s, i) in services"
            :id="`service-${s.key}`"
            :key="s.key"
            v-reveal
            :style="{ transitionDelay: `${i * 120}ms, ${i * 120}ms, 0ms, 0ms` }"
            class="reveal flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(15,30,61,0.35)] lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:gap-0"
          >
            <!-- Photo runs edge to edge across the top of the card (cancels the card's padding) -->
            <img
              :src="`${s.image}-640.webp`"
              :srcset="`${s.image}-640.webp 640w, ${s.image}-1200.webp 1200w`"
              sizes="(min-width: 1024px) 350px, 100vw"
              :alt="s.imageAlt"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              class="-mx-8 -mt-8 mb-8 aspect-[16/9] w-[calc(100%+4rem)] max-w-none object-cover saturate-[0.9]"
            >
            <span class="grid size-12 place-items-center rounded-2xl bg-accent-soft text-navy">
              <ServiceIcon :name="s.icon" />
            </span>
            <!-- Title size scales with the card width (max 20px) so the longest name fits on one line.
                 The size is measured on this wrapper, not the card, so the card's row alignment keeps working. -->
            <div class="@container mt-6">
              <h3 class="whitespace-nowrap text-[min(1.25rem,6.6cqi)] font-bold">{{ s.name }}</h3>
            </div>
            <p class="mt-2 text-slate">{{ s.tagline }}</p>
            <ul class="mt-6 space-y-2.5 border-t border-line pt-6 text-sm text-charcoal">
              <li v-for="item in s.items" :key="item" class="flex gap-2.5">
                <span class="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {{ item }}
              </li>
            </ul>
            <NuxtLink :to="{ path: '/contact', query: { service: s.key } }" class="btn-secondary mt-8 self-start lg:justify-self-start">
              Contact Us
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US (boxes share rows on tablet/desktop so descriptions line up) -->
    <section class="section bg-navy text-white">
      <div class="container-page">
        <div v-reveal class="reveal max-w-2xl">
          <p class="eyebrow !text-white/60">Why choose us</p>
          <h2 class="mt-4 text-4xl leading-[1.1] !text-white sm:text-5xl">Global Talent. U.S.-Led Support.</h2>
        </div>
        <div v-reveal class="reveal mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(r, i) in reasons" :key="r.title" class="bg-navy p-8 sm:row-span-3 sm:grid sm:grid-rows-subgrid sm:gap-0">
            <span class="text-sm font-semibold text-accent">0{{ i + 1 }}</span>
            <!-- Title size scales with the box width (max 18px) so every title fits on one line -->
            <div class="@container mt-4">
              <h3 class="whitespace-nowrap text-[min(1.125rem,8.3cqi)] font-bold !text-white">{{ r.title }}</h3>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ r.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section">
      <div class="container-page">
        <div v-reveal class="reveal max-w-2xl">
          <p class="eyebrow">How it works</p>
          <h2 class="mt-4 text-4xl leading-[1.1] sm:text-5xl">Getting started is simple.</h2>
        </div>
        <ol class="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <li v-for="(step, i) in steps" :key="step.title" v-reveal class="reveal relative" :style="{ transitionDelay: `${i * 120}ms` }">
            <div class="flex items-center gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-full border border-navy text-sm font-bold text-navy">{{ i + 1 }}</span>
              <span v-if="i < steps.length - 1" class="hidden h-px flex-1 bg-line md:block" />
            </div>
            <h3 class="mt-6 text-lg font-bold">{{ step.title }}</h3>
            <p class="mt-2 text-slate">{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- FINAL CTA -->
    <CtaBand title="Your Business Deserves More Time to Grow." button="Let's Get Started" />
  </div>
</template>

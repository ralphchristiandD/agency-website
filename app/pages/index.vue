<script setup lang="ts">
import { services } from '~/data/services'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Administrative, Data & Video Support for Growing Businesses',
  description:
    'U.S.-led business support: administrative operations, data analytics and reporting, and professional video editing. Less busywork, better insights, greater impact.',
})

// Each headline phrase is paired with the service it stands for, shading from navy to light blue
const heroLines = [
  { text: 'Less Busywork.', visual: 'checklist', color: 'text-navy' },
  { text: 'Better Insights.', visual: 'chart', color: 'text-accent-mid' },
  { text: 'Greater Impact.', visual: 'video', color: 'text-accent' },
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
    <!-- CHOOSE A BUSINESS (client request): Virtual Assistant Support scrolls to the services below;
         Shirt Printing opens the client's separate shirt website (link set in data/site.ts). -->
    <section class="border-b border-line bg-mist">
      <div class="container-page grid gap-3 py-4 sm:grid-cols-2 sm:gap-4 sm:py-5">
        <a v-reveal href="#services" class="reveal flex items-center gap-4 rounded-xl border border-line bg-white p-4 hover:border-navy/30">
          <span class="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-soft text-navy">
            <ServiceIcon name="clipboard" />
          </span>
          <span>
            <span class="block font-semibold text-navy">Virtual Assistant Support</span>
            <span class="block text-sm text-slate">Admin, data, and video support for your business.</span>
          </span>
        </a>

        <component
          :is="site.shirtPrinting.url ? 'a' : 'div'"
          v-bind="site.shirtPrinting.url ? { href: site.shirtPrinting.url, target: '_blank', rel: 'noopener' } : {}"
          v-reveal
          style="transition-delay: 120ms, 120ms, 0ms, 0ms"
          class="reveal flex items-center gap-4 rounded-xl border border-line bg-white p-4"
          :class="site.shirtPrinting.url ? 'hover:border-navy/30' : ''"
        >
          <span class="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-soft text-navy">
            <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">
              <path d="M8.5 3.5 4 6l1.6 3.6L7.5 8.8V20.5h9V8.8l1.9.8L20 6l-4.5-2.5a3.5 3.5 0 0 1-7 0z" />
            </svg>
          </span>
          <span class="flex-1">
            <span class="block font-semibold text-navy">{{ site.shirtPrinting.title }}</span>
            <span class="block text-sm text-slate">
              {{ site.shirtPrinting.url ? site.shirtPrinting.text : 'Link coming soon.' }}
            </span>
          </span>
          <!-- small "opens another website" icon -->
          <svg v-if="site.shirtPrinting.url" class="size-4 shrink-0 text-slate" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-label="Opens in a new tab">
            <path d="M6 3H3.5v9.5H13V10M9 3h4v4M13 3 7.5 8.5" />
          </svg>
        </component>
      </div>
    </section>

    <!-- HERO -->
    <section class="pb-12 pt-10 sm:pb-16 sm:pt-16">
      <div class="container-page">
        <p class="eyebrow rise">Business support, done right</p>
        <h1 class="@container mt-5 text-[2.375rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
          <span
            v-for="(line, i) in heroLines"
            :key="line.text"
            class="rise flex items-center justify-between gap-2.5 border-b border-line py-2 sm:gap-8 sm:py-3"
            :style="{ animationDelay: `${i * 90}ms` }"
          >
            <span :class="line.color">{{ line.text }}</span>
            <!-- Full illustration on desktop, compact one on phones and tablets -->
            <span class="hidden lg:block"><HeroVisual :kind="line.visual" /></span>
            <span class="shrink-0 lg:hidden"><HeroVisual :kind="line.visual" compact /></span>
          </span>
        </h1>

        <div class="rise mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" style="animation-delay: 300ms">
          <p class="max-w-xl text-lg leading-relaxed text-slate">
            From administrative operations and data analytics to professional video editing, we help businesses work smarter, stay organized, and grow.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-primary">Let's Work Together</NuxtLink>
            <!-- Points to Our Services while the Portfolio page is hidden (see backups/portfolio-page) -->
            <a href="#services" class="btn-secondary">Explore Our Work</a>
          </div>
        </div>
      </div>
    </section>

    <!-- WORKSPACE PHOTO: right under the hero so it shows on the first screen.
         To change it, replace /public/images/workspace-1200.webp and workspace-2400.webp. -->
    <section class="pb-20 sm:pb-28">
      <div class="container-page">
        <img
          src="/images/workspace-1200.webp"
          srcset="/images/workspace-1200.webp 1200w, /images/workspace-2400.webp 2400w"
          sizes="(min-width: 1152px) 1088px, 100vw"
          alt="A tidy desk with a laptop, an open notebook, and a cup of coffee"
          width="2400"
          height="1600"
          decoding="async"
          v-reveal
          class="reveal aspect-[4/3] w-full rounded-3xl object-cover saturate-[0.9] sm:aspect-[21/9]"
        >
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
          <p class="text-lg leading-relaxed text-slate sm:text-justify lg:-mt-[6px]">
            We're a U.S.-led team providing dependable administrative, analytical, and creative support to growing businesses. Our mission is simple: take work off your plate, help you make better decisions, and deliver quality work you can count on.
          </p>
          <ul class="grid gap-4 sm:grid-cols-2 lg:col-start-2">
            <li v-for="h in highlights" :key="h" class="flex items-start gap-3 font-medium text-navy">
              <span class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-navy text-white">
                <svg class="size-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg>
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

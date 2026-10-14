<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
  title: 'Administrative, Data & Video Support for Growing Businesses',
  description:
    'U.S.-led business support: administrative operations, data analytics and reporting, and professional video editing. Less busywork, better insights, greater impact.',
})

const highlights = [
  'U.S.-based client communication',
  'Skilled remote professionals',
  'Flexible project-based and ongoing support',
  'Personalized service',
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
    <!-- HERO -->
    <section class="overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div class="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p class="eyebrow">Business support, done right</p>
          <h1 class="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Less Busywork.<br>Better Insights.<br><span class="text-accent">Greater Impact.</span>
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            From administrative operations and data analytics to professional video editing, we help businesses work smarter, stay organized, and grow.
          </p>
          <div class="mt-9 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-primary">Let's Work Together</NuxtLink>
            <NuxtLink to="/portfolio" class="btn-secondary">Explore Our Work</NuxtLink>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>

    <!-- WHO WE ARE -->
    <section class="section bg-mist">
      <div class="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div v-reveal class="reveal">
          <p class="eyebrow">Who we are</p>
          <h2 class="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Your Business Support Team, Without the Overhead.</h2>
        </div>
        <div v-reveal class="reveal">
          <p class="text-lg leading-relaxed text-slate">
            We're a U.S.-led team providing dependable administrative, analytical, and creative support to growing businesses. Our mission is simple: take work off your plate, help you make better decisions, and deliver quality work you can count on.
          </p>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li v-for="h in highlights" :key="h" class="flex items-start gap-3 text-sm font-medium text-navy">
              <span class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-navy text-white">
                <svg class="size-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg>
              </span>
              {{ h }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section">
      <div class="container-page">
        <div v-reveal class="reveal max-w-2xl">
          <p class="eyebrow">Our services</p>
          <h2 class="mt-4 text-3xl font-bold sm:text-4xl">Three ways we take work off your plate.</h2>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-3">
          <article
            v-for="s in services"
            :key="s.key"
            v-reveal
            class="reveal flex flex-col rounded-3xl border border-line bg-white p-8 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(15,30,61,0.35)]"
          >
            <span class="grid size-12 place-items-center rounded-2xl bg-accent-soft text-navy">
              <ServiceIcon :name="s.icon" />
            </span>
            <h3 class="mt-6 text-xl font-bold">{{ s.name }}</h3>
            <p class="mt-2 text-slate">{{ s.tagline }}</p>
            <ul class="mt-6 flex-1 space-y-2.5 border-t border-line pt-6 text-sm text-charcoal">
              <li v-for="item in s.items" :key="item" class="flex gap-2.5">
                <span class="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {{ item }}
              </li>
            </ul>
            <NuxtLink :to="{ path: '/contact', query: { service: s.key } }" class="btn-secondary mt-8 self-start">
              Contact Us
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="section bg-navy text-white">
      <div class="container-page">
        <div v-reveal class="reveal max-w-2xl">
          <p class="eyebrow !text-white/60">Why choose us</p>
          <h2 class="mt-4 text-3xl font-bold !text-white sm:text-4xl">Global Talent. U.S.-Led Support.</h2>
        </div>
        <div class="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(r, i) in reasons" :key="r.title" v-reveal class="reveal bg-navy p-8">
            <span class="text-sm font-semibold text-accent">0{{ i + 1 }}</span>
            <h3 class="mt-4 text-lg font-bold !text-white">{{ r.title }}</h3>
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
          <h2 class="mt-4 text-3xl font-bold sm:text-4xl">Getting started is simple.</h2>
        </div>
        <ol class="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <li v-for="(step, i) in steps" :key="step.title" v-reveal class="reveal relative">
            <div class="flex items-center gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-full border-2 border-navy text-sm font-bold text-navy">{{ i + 1 }}</span>
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

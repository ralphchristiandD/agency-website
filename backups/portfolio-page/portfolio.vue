<script setup lang="ts">
import { portfolio } from '~/data/portfolio'
import { services, type ServiceKey } from '~/data/services'

useSeoMeta({
  title: 'Portfolio',
  description:
    'Examples of our administrative trackers, Excel and Power BI dashboards, data cleanup, and video editing for social media and YouTube.',
})

const filters: { key: ServiceKey | 'all'; label: string }[] = [
  { key: 'all', label: 'All Work' },
  ...services.map((s) => ({ key: s.key, label: s.shortName })),
]

const active = ref<ServiceKey | 'all'>('all')
const shown = computed(() =>
  active.value === 'all' ? portfolio : portfolio.filter((p) => p.category === active.value),
)
</script>

<template>
  <div>
    <section class="pb-12 pt-16 sm:pt-24">
      <div class="container-page">
        <h1 class="max-w-3xl text-[2.625rem] leading-[1.05] sm:text-6xl">Work That Speaks for Itself.</h1>
        <p class="mt-5 max-w-2xl text-lg text-slate">
          A selection of administrative, analytics, and creative projects, and the business problems they solved.
        </p>

        <div class="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          <button
            v-for="f in filters"
            :key="f.key"
            class="rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
            :class="active === f.key ? 'border-navy bg-navy text-white' : 'border-line bg-white text-slate hover:border-navy hover:text-navy'"
            :aria-pressed="active === f.key"
            @click="active = f.key"
          >
            {{ f.label }}
          </button>
        </div>
      </div>
    </section>

    <section class="pb-8">
      <div class="container-page">
        <TransitionGroup tag="div" name="fade" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PortfolioCard v-for="item in shown" :key="item.title" :item="item" />
        </TransitionGroup>
        <p v-if="!shown.length" class="py-16 text-center text-slate">New projects in this category are on the way.</p>
      </div>
    </section>

    <CtaBand title="Have a Project in Mind? Let's Talk." button="Let's Work Together" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
  visibility: hidden;
}
</style>

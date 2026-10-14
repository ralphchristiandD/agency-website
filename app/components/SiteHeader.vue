<script setup lang="ts">
import { site } from '~/data/site'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact Us', to: '/contact' },
]

// Close the mobile menu after navigating
watch(() => route.path, () => (open.value = false))

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 8)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b bg-white/90 backdrop-blur transition-colors"
    :class="scrolled ? 'border-line' : 'border-transparent'"
  >
    <nav class="container-page flex h-18 items-center justify-between" aria-label="Main">
      <!-- TODO: replace with the client's logo, e.g. <img src="/logo.svg" alt="Agency Name" class="h-8"> -->
      <NuxtLink to="/" class="flex items-center gap-2.5 text-navy" aria-label="Home">
        <span class="grid size-8 place-items-center rounded-lg bg-navy text-sm font-extrabold text-white">A</span>
        <span class="text-base font-bold tracking-tight">{{ site.name }}</span>
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-slate transition-colors hover:text-navy"
          active-class="!text-navy"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-primary !px-5 !py-2.5">Get Started</NuxtLink>
      </div>

      <button
        class="grid size-10 place-items-center rounded-lg text-navy md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg v-if="!open" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
        <svg v-else class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </nav>

    <div v-show="open" id="mobile-menu" class="border-t border-line bg-white md:hidden">
      <div class="container-page flex flex-col gap-1 py-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-3 text-base font-medium text-charcoal hover:bg-mist"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-primary mt-2">Get Started</NuxtLink>
      </div>
    </div>
  </header>
</template>

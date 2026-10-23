<script setup lang="ts">
import { site } from '~/data/site'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()

const links = [
  { label: 'Home', to: '/va-support' },
  { label: 'Contact Us', to: '/contact' },
]

// Close the mobile menu after navigating
watch(() => route.path, () => (open.value = false))

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 8)
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') open.value = false
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('keydown', onKey)
  })
})
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b transition-colors duration-200"
    :class="scrolled || open ? 'border-line bg-white/95 backdrop-blur' : 'border-transparent bg-white'"
  >
    <nav class="container-page flex h-18 items-center justify-between" aria-label="Main">
      <!-- The logo returns to the welcome page (choose VA Support or Shirt Printing) -->
      <NuxtLink to="/" class="flex items-center gap-2.5 font-serif text-[1.75rem] leading-none text-navy" aria-label="Enrich, back to the welcome page">
        <BrandLogo class="size-10" />
        {{ site.name }}
      </NuxtLink>

      <div class="hidden items-center gap-9 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="link-underline whitespace-nowrap py-1 text-[0.9375rem] font-medium text-slate transition-colors hover:text-navy"
          exact-active-class="!text-navy !bg-[length:100%_1px]"
        >
          {{ link.label }}
        </NuxtLink>
        <!-- A plain link like the others (developer's choice); no "active" underline since Contact Us already has it -->
        <NuxtLink to="/contact" class="link-underline whitespace-nowrap py-1 text-[0.9375rem] font-medium text-slate transition-colors hover:text-navy">
          Get Started
        </NuxtLink>
      </div>

      <button
        class="-mr-2 grid size-11 place-items-center rounded-lg text-navy md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
          <path v-if="open" d="M6 6l12 12M18 6L6 18" />
          <path v-else d="M4 8h16M4 16h16" />
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out motion-reduce:transition-none"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="open" id="mobile-menu" class="border-t border-line bg-white md:hidden">
        <div class="container-page flex flex-col py-3">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="flex min-h-13 items-center border-b border-line font-serif text-2xl text-navy"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="flex min-h-13 items-center font-serif text-2xl text-navy">Get Started</NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

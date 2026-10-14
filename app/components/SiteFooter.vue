<script setup lang="ts">
import { site } from '~/data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy text-white/70">
    <div class="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <p class="text-lg font-bold text-white">{{ site.name }}</p>
        <p class="mt-3 max-w-sm text-sm leading-relaxed">{{ site.tagline }}</p>
      </div>

      <div>
        <p class="text-sm font-semibold text-white">Pages</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="hover:text-white">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold text-white">Get in touch</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a :href="`mailto:${site.email}`" class="hover:text-white">{{ site.email }}</a></li>
          <li>{{ site.location }}</li>
        </ul>
        <ul class="mt-4 flex gap-4 text-sm">
          <li v-for="s in site.socials" :key="s.label">
            <a :href="s.href" target="_blank" rel="noopener" class="hover:text-white">{{ s.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <NuxtLink to="/privacy" class="hover:text-white">Privacy Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

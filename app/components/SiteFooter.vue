<script setup lang="ts">
import { site } from '~/data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy text-white/70">
    <!-- Sizes and spacing match the original footer; links get extra tap room on phones only -->
    <div class="container-page grid gap-8 border-t border-white/10 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <p class="font-serif text-xl leading-none text-white">{{ site.name }}</p>
      </div>

      <div>
        <p class="text-sm font-semibold text-white">Pages</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li><NuxtLink to="/va-support" class="link-underline inline-block py-1 hover:text-white sm:py-0">Home</NuxtLink></li>
          <li><NuxtLink to="/contact" class="link-underline inline-block py-1 hover:text-white sm:py-0">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold text-white">Get in touch</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a :href="`mailto:${site.email}`" class="link-underline inline-block break-all py-1 hover:text-white sm:py-0">{{ site.email }}</a></li>
          <li><a :href="`tel:${site.phoneLink}`" class="link-underline inline-block py-1 hover:text-white sm:py-0">{{ site.phone }}</a></li>
          <li>{{ site.location }}</li>
        </ul>
        <ul class="mt-4 flex flex-wrap gap-x-4 text-sm">
          <li v-for="s in site.socials" :key="s.label">
            <a :href="s.href" target="_blank" rel="noopener" class="link-underline inline-block py-1 hover:text-white sm:py-0">{{ s.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-page flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <NuxtLink to="/privacy" class="link-underline self-start py-1 hover:text-white sm:self-auto sm:py-0">Privacy Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

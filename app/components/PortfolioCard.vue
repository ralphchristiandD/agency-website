<script setup lang="ts">
import type { PortfolioItem } from '~/data/portfolio'
import { services } from '~/data/services'

const props = defineProps<{ item: PortfolioItem }>()
const service = computed(() => services.find((s) => s.key === props.item.category)!)
const playing = ref(false)
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
    <!-- Media: video, image, or placeholder -->
    <div class="relative bg-mist" :class="item.vertical ? 'aspect-[4/5]' : 'aspect-video'">
      <template v-if="item.videoId">
        <!-- Shows a thumbnail first and only loads YouTube when clicked (keeps the page fast) -->
        <iframe
          v-if="playing"
          class="absolute inset-0 size-full"
          :src="`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0`"
          :title="item.title"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <button v-else class="group absolute inset-0" :aria-label="`Play video: ${item.title}`" @click="playing = true">
          <img :src="`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`" :alt="''" class="size-full object-cover" loading="lazy">
          <span class="absolute inset-0 grid place-items-center bg-navy/20 transition-colors group-hover:bg-navy/30">
            <span class="grid size-14 place-items-center rounded-full bg-white shadow-lg">
              <svg class="ml-1 size-5 text-navy" viewBox="0 0 16 16" fill="currentColor"><path d="M5 3.5v9l7-4.5-7-4.5z" /></svg>
            </span>
          </span>
        </button>
      </template>

      <img v-else-if="item.image" :src="item.image" :alt="item.title" class="size-full object-cover object-top" loading="lazy">

      <div v-else class="grid size-full place-items-center text-navy/30">
        <div class="text-center">
          <span class="mx-auto grid size-12 place-items-center rounded-2xl bg-white"><ServiceIcon :name="service.icon" /></span>
          <p class="mt-3 text-xs font-medium text-slate">Sample coming soon</p>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <p class="eyebrow">{{ service.shortName }}</p>
      <h3 class="mt-2 text-lg font-bold">{{ item.title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-slate">{{ item.description }}</p>
      <p v-if="item.problem" class="mt-4 rounded-xl bg-mist p-3 text-sm text-charcoal">
        <span class="font-semibold text-navy">The challenge:</span> {{ item.problem }}
      </p>
      <p v-if="item.result" class="mt-3 text-sm font-semibold text-navy">Result: {{ item.result }}</p>
    </div>
  </article>
</template>

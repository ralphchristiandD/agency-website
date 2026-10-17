<!--
  Small illustrations that sit beside each line of the hero headline:
  checklist = less busywork, chart = better insights, video player = greater impact.
  Built from simple shapes, no images to download. Decorative only, so hidden from screen readers.
  `compact` is a smaller, simplified version used on phones and tablets.
-->
<script setup lang="ts">
defineProps<{ kind: 'checklist' | 'chart' | 'video'; compact?: boolean }>()

// Tasks ticked off: three done, one still open
const tasks = [true, true, true, false]
const bars = [30, 42, 36, 55, 50, 68, 84]
const compactBars = [36, 55, 68, 84]
</script>

<template>
  <!-- PHONE / TABLET: compact version -->
  <span
    v-if="compact"
    class="flex h-10 w-12 items-center rounded-lg border border-line bg-mist px-2 sm:h-12 sm:w-[4.5rem] sm:px-2.5"
    aria-hidden="true"
  >
    <span v-if="kind === 'checklist'" class="grid w-full gap-1.5">
      <span v-for="(done, i) in [true, false]" :key="i" class="flex items-center gap-1">
        <span class="grid size-3 shrink-0 place-items-center rounded-full" :class="done ? 'bg-navy' : 'border border-navy/25 bg-white'">
          <svg v-if="done" class="size-2 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg>
        </span>
        <span class="h-1 flex-1 rounded-full" :class="done ? 'bg-navy/20' : 'bg-navy/50'" />
      </span>
    </span>

    <span v-else-if="kind === 'chart'" class="flex h-6 w-full items-end gap-1">
      <span
        v-for="(h, i) in compactBars"
        :key="i"
        class="flex-1 rounded-t-[1px]"
        :class="i === compactBars.length - 1 ? 'bg-accent' : 'bg-navy'"
        :style="{ height: h + '%', opacity: i === compactBars.length - 1 ? 1 : 0.3 + i * 0.2 }"
      />
    </span>

    <span v-else class="flex w-full items-center gap-1.5">
      <span class="grid size-5 shrink-0 place-items-center rounded-full bg-navy">
        <svg class="ml-px size-2 text-white" viewBox="0 0 12 12" fill="currentColor"><path d="M3 1.5v9l7-4.5-7-4.5z" /></svg>
      </span>
      <span class="relative h-1 flex-1 rounded-full bg-navy/15">
        <span class="absolute inset-y-0 left-0 w-1/2 rounded-full bg-accent" />
      </span>
    </span>
  </span>

  <!-- DESKTOP: full version -->
  <span v-else class="flex h-16 w-56 items-center rounded-xl border border-line bg-mist px-4" aria-hidden="true">
    <!-- Checklist -->
    <span v-if="kind === 'checklist'" class="grid w-full grid-cols-2 gap-x-4 gap-y-2.5">
      <span v-for="(done, i) in tasks" :key="i" class="flex items-center gap-2">
        <span
          class="grid size-4 shrink-0 place-items-center rounded-full"
          :class="done ? 'bg-navy' : 'border border-navy/25 bg-white'"
        >
          <svg v-if="done" class="size-2.5 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg>
        </span>
        <span class="h-1.5 flex-1 rounded-full" :class="done ? 'bg-navy/20' : 'bg-navy/50'" />
      </span>
    </span>

    <!-- Chart -->
    <span v-else-if="kind === 'chart'" class="flex h-9 w-full items-end gap-1.5">
      <span
        v-for="(h, i) in bars"
        :key="i"
        class="flex-1 rounded-t-[2px]"
        :class="i === bars.length - 1 ? 'bg-accent' : 'bg-navy'"
        :style="{ height: h + '%', opacity: i === bars.length - 1 ? 1 : 0.25 + i * 0.1 }"
      />
    </span>

    <!-- Video player: play button + one progress line -->
    <span v-else class="flex w-full items-center gap-3">
      <span class="grid size-8 shrink-0 place-items-center rounded-full bg-navy">
        <svg class="ml-0.5 size-3 text-white" viewBox="0 0 12 12" fill="currentColor"><path d="M3 1.5v9l7-4.5-7-4.5z" /></svg>
      </span>
      <span class="relative h-1.5 flex-1 rounded-full bg-navy/15">
        <span class="absolute inset-y-0 left-0 w-[45%] rounded-full bg-accent" />
        <span class="absolute left-[45%] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent" />
      </span>
    </span>
  </span>
</template>

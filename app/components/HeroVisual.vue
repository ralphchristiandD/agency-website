<!--
  Hero illustration built from simple HTML shapes: a task list (operations),
  a bar chart (data), and a video timeline (creative). No stock photos needed.
  It's decorative only, so it's hidden from screen readers.
-->
<template>
  <div class="relative mx-auto aspect-[5/4] w-full max-w-lg" aria-hidden="true">
    <div class="absolute inset-6 rounded-[2rem] bg-mist" />

    <!-- Data card -->
    <div class="absolute left-0 top-0 w-[60%] rounded-2xl border border-line bg-white p-4 sm:p-5 shadow-[0_20px_50px_-20px_rgba(15,30,61,0.25)]">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-semibold uppercase tracking-wider text-slate">Monthly report</span>
        <span class="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent">Updated</span>
      </div>
      <div class="mt-4 flex h-20 items-end sm:mt-5 sm:h-28 gap-2">
        <div v-for="(h, i) in [38, 52, 44, 66, 58, 80, 92]" :key="i" class="flex-1 rounded-t-md" :class="i === 6 ? 'bg-navy' : 'bg-navy/15'" :style="{ height: h + '%' }" />
      </div>
    </div>

    <!-- Task card -->
    <div class="absolute right-0 top-[12%] w-[44%] rounded-2xl border border-line bg-white p-4 sm:p-5 shadow-[0_20px_50px_-20px_rgba(15,30,61,0.25)]">
      <span class="text-[11px] font-semibold uppercase tracking-wider text-slate">Today</span>
      <ul class="mt-4 space-y-3">
        <li v-for="(t, i) in [true, true, false]" :key="i" class="flex items-center gap-2.5">
          <span class="grid size-4 shrink-0 place-items-center rounded-full" :class="t ? 'bg-navy' : 'border border-line'">
            <svg v-if="t" class="size-2.5 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg>
          </span>
          <span class="h-2 rounded-full" :class="[t ? 'bg-line' : 'bg-navy/20', ['w-20', 'w-16', 'w-24'][i]]" />
        </li>
      </ul>
    </div>

    <!-- Video card -->
    <div class="absolute bottom-0 right-[6%] w-[58%] rounded-2xl bg-navy p-3 sm:p-4 shadow-[0_24px_60px_-20px_rgba(15,30,61,0.5)]">
      <div class="grid aspect-video place-items-center rounded-xl bg-navy-light">
        <span class="grid size-10 place-items-center rounded-full bg-white/95">
          <svg class="ml-0.5 size-4 text-navy" viewBox="0 0 16 16" fill="currentColor"><path d="M5 3.5v9l7-4.5-7-4.5z" /></svg>
        </span>
      </div>
      <div class="mt-3 flex gap-1">
        <span class="h-1.5 flex-[3] rounded-full bg-accent" />
        <span class="h-1.5 flex-[2] rounded-full bg-white/20" />
        <span class="h-1.5 flex-[4] rounded-full bg-white/20" />
      </div>
    </div>
  </div>
</template>

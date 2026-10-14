<script setup lang="ts">
defineProps<{ name: 'clipboard' | 'chart' | 'play' }>()
</script>

<template>
  <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <template v-if="name === 'clipboard'">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'chart'">
      <path d="M4 20h16" stroke-linecap="round" />
      <rect x="6" y="11" width="3" height="6" rx="0.5" />
      <rect x="11" y="7" width="3" height="10" rx="0.5" />
      <rect x="16" y="4" width="3" height="13" rx="0.5" />
    </template>
    <template v-else>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5z" stroke-linejoin="round" />
    </template>
  </svg>
</template>

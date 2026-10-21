<!--
  The Enrich logo mark (round "EN"), shown exactly as the client's original files (no recoloring):
  - default:        /public/logo.png        (his Black.png) for light backgrounds
  - variant="white" /public/logo-white.png  (his White.png) for dark backgrounds like the navy footer
  Usage: <BrandLogo class="size-10" />   or   <BrandLogo variant="white" class="size-8" />
  Decorative: the surrounding link or text already says "Enrich" for screen readers.
-->
<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'black' | 'white' }>(), { variant: 'black' })
</script>

<template>
  <img
    :src="variant === 'white' ? '/logo-white.png' : '/logo.png'"
    alt=""
    width="289"
    height="289"
    class="inline-block shrink-0 object-contain"
    aria-hidden="true"
  >
</template>

<!--
  The Enrich logo mark (round "EN"), drawn from /public/logo.png.
  It takes the current text color, so one file works everywhere:
  <BrandLogo class="size-9 text-navy" />   or   <BrandLogo class="size-8 text-white" />
  Decorative: the surrounding link or text already says "Enrich" for screen readers.
-->
<script setup lang="ts">
const mask = {
  maskImage: 'url(/logo.png)',
  WebkitMaskImage: 'url(/logo.png)',
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskPosition: 'center',
}
</script>

<template>
  <span class="inline-block shrink-0 bg-current" :style="mask" aria-hidden="true" />
</template>

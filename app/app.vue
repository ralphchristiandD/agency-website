<script setup lang="ts">
const config = useRuntimeConfig()
const gaId = config.public.gaId

// Default SEO for every page. Each page overrides title/description with useSeoMeta().
useHead({
  titleTemplate: (title) => (title ? `${title} | ${config.public.siteName}` : config.public.siteName),
  script: gaId
    ? [
        { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
        },
      ]
    : [],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

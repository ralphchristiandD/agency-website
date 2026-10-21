import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // Values that can change per environment. Set them in a .env file (see .env.example)
  // or in your hosting dashboard. NUXT_PUBLIC_* variables are safe to show in the browser.
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.example.com', // TODO: client's real domain
      siteName: 'Enrich',
      web3formsKey: '', // set NUXT_PUBLIC_WEB3FORMS_KEY in .env
      gaId: '', // set NUXT_PUBLIC_GA_ID in .env (Google Analytics 4, e.g. G-XXXXXXX)
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0F1E3D' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400..500&display=swap',
        },
      ],
    },
  },

  // Build every page as static HTML (fast, cheap hosting, good for SEO)
  nitro: {
    prerender: {
      // '/portfolio' is hidden for now (saved in backups/portfolio-page)
      // '/' is the welcome page (choose VA Support or Shirt Printing); '/va-support' is the agency site
      routes: ['/', '/va-support', '/contact', '/privacy'],
    },
  },
})

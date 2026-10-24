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
      siteUrl: 'https://enrichtog.net', // the client's domain (bought on Cloudflare, 2026-10)
      siteName: 'Enrich',
      // Web3Forms access key: inquiries go to enrich.tog@gmail.com (new key, 2026-10; the old one sent to enrich.admin).
      // Safe to keep in code: it can only send messages to that inbox, not read them.
      web3formsKey: '5950f7cb-f646-4d09-84eb-b07424330010',
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
        // Browser tab icon: the Enrich logo on white (visible on light and dark tabs)
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
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

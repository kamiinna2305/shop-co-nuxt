// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Project compatibility date
  compatibilityDate: '2025-07-15',
  
  // Production optimizations: disable devtools
  devtools: { enabled: false },

  // Single Page Application mode
  ssr: false,

  // Essential modules for styling, state, and images
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt', 
    '@nuxt/image'
  ],

  // Nitro engine: compressing and minifying for faster delivery
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // Vite build optimization: chunk splitting
  vite: {
    build: {
      chunkSizeWarningLimit: 500,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    }
  },

  // Global Metadata and Accessibility
  app: {
    baseURL: '/',
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Shop.co | Modern E-commerce',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'High-performance Nuxt 3 store' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
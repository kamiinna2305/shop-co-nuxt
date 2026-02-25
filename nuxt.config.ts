// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Set the compatibility date for Nuxt features
  compatibilityDate: '2025-07-15',
  
  // Disable devtools in production for better performance
  devtools: { enabled: false },

  // Single Page Application mode (No Server Side Rendering)
  ssr: false,

  // Registering project modules
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt', 
    '@nuxt/image'
  ],

  // Nitro server engine configuration for asset optimization
  nitro: {
    // Compress public assets (icons, images) during build
    compressPublicAssets: true,
    // Minify the server-side output code
    minify: true
  },

  // Vite-specific build optimizations
  vite: {
    build: {
      // Set the warning limit for chunk sizes (in KB)
      chunkSizeWarningLimit: 500,
      // Enable CSS code splitting for faster page loads
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Splitting node_modules into a separate 'vendor' chunk to improve caching
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    }
  },

  // Global application head configuration (SEO & Accessibility)
  app: {
    baseURL: '/',
    // Smooth transitions between pages
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
    head: {
      // Set HTML language attribute for accessibility and SEO
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Shop.co',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Modern E-commerce store built with Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
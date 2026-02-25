// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  // Disable devtools for production to optimize performance
  devtools: { enabled: false },

  // Single Page Application mode (No Server Side Rendering)
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt', 
    '@nuxt/image'
  ],

  // Nitro server engine configuration
  nitro: {
    // Compress assets like icons and images during build for faster loading
    compressPublicAssets: true,
    // Minify server-side code
    minify: true
  },

  vite: {
    build: {
      // Increase warning limit for chunk sizes
      chunkSizeWarningLimit: 500,
      // CSS code splitting for better page load speeds
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

  app: {
    baseURL: '/',
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
    head: {
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
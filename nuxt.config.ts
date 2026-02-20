// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  
  ssr: false,

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  
  app: {
    baseURL: '/',
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
    head: {
      title: 'Shop.co',
      meta: [
        { name: 'description', content: 'Modern E-commerce store' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
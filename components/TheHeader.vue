<template>
  <header class="bg-white border-b sticky top-0 z-50">
    <div class="max-w-[1440px] mx-auto px-4 md:px-10 h-[70px] md:h-[88px] flex items-center justify-between">
      
      <div class="flex items-center gap-4 md:gap-10 shrink-0">
        <button 
          @click="isMenuOpen = true" 
          class="md:hidden text-2xl mt-1"
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <NuxtLink to="/" class="text-2xl md:text-[32px] font-black uppercase italic tracking-tighter shrink-0">
          Shop.co
        </NuxtLink>
        
        <nav class="hidden md:flex gap-6 font-medium text-black shrink-0">
          <NuxtLink to="/category" class="hover:text-black/60 transition flex items-center gap-1">
            Shop
            <svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/category" class="hover:text-black/60 transition">On Sale</NuxtLink>
          <NuxtLink to="/category" class="hover:text-black/60 transition">New Arrivals</NuxtLink>
          <NuxtLink to="/category" class="hover:text-black/60 transition">Brands</NuxtLink>
        </nav>
      </div>

      <div class="hidden md:block relative flex-grow mx-10 max-w-[577px]">
        <label for="desktop-search" class="sr-only">Search products</label>
        <input 
          id="desktop-search"
          type="text" 
          placeholder="Search for products..." 
          class="w-full bg-[#F0F0F0] py-3 pl-14 pr-6 rounded-full outline-none focus:ring-1 ring-black/5 text-black/40 text-base" 
        />
        <img 
          src="/icons/search.svg" 
          width="24" 
          height="24" 
          class="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 opacity-40" 
          alt="Search icon" 
        />
      </div>
      
      <div class="flex items-center gap-3 md:gap-4 shrink-0">
        <button class="md:hidden p-1" aria-label="Open search">
           <img src="/icons/search.svg" width="24" height="24" class="w-6 h-6" alt="Search icon" />
        </button>

        <NuxtLink to="/cart" class="relative p-1" aria-label="View shopping cart">
          <img src="/icons/cart.svg" width="24" height="24" class="w-6 h-6" alt="Cart icon" />
          <span v-if="cartStore.totalItems > 0" 
                class="absolute -top-1 -right-1 bg-black text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold px-1">
            {{ cartStore.totalItems }}
          </span>
        </NuxtLink>
        
        <button class="p-1" aria-label="User account">
          <img src="/icons/user.svg" width="24" height="24" class="w-6 h-6" alt="User icon" />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isMenuOpen" @click="isMenuOpen = false" class="fixed inset-0 bg-black/50 z-[60] md:hidden"></div>
    </Transition>

    <Transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-y-0 left-0 w-[80%] bg-white z-[70] p-6 shadow-2xl md:hidden text-black">
        <div class="flex justify-between items-center mb-10">
          <NuxtLink to="/" @click="isMenuOpen = false" class="text-2xl font-black uppercase italic">
            Shop.co
          </NuxtLink>
          <button @click="isMenuOpen = false" class="text-3xl leading-none" aria-label="Close menu">&times;</button>
        </div>
        
        <nav class="flex flex-col gap-6 text-xl font-medium">
          <NuxtLink to="/category" @click="isMenuOpen = false" class="hover:translate-x-2 transition-transform duration-300">Shop</NuxtLink>
          <NuxtLink to="/category" @click="isMenuOpen = false" class="hover:translate-x-2 transition-transform duration-300">On Sale</NuxtLink>
          <NuxtLink to="/category" @click="isMenuOpen = false" class="hover:translate-x-2 transition-transform duration-300">New Arrivals</NuxtLink>
          <NuxtLink to="/category" @click="isMenuOpen = false" class="hover:translate-x-2 transition-transform duration-300">Brands</NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { ref } from 'vue'

// Access the cart store for item counting
const cartStore = useCartStore()

// State for mobile menu visibility
const isMenuOpen = ref(false)
</script>

<style scoped>
/* Smooth transitions for mobile menu and overlay */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(-100%); }
</style>
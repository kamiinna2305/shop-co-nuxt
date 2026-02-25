<template>
  <div class="max-w-7xl mx-auto px-4 py-8 md:py-12">
    <nav class="text-black/60 text-sm mb-6 flex gap-2">
      <NuxtLink to="/" class="hover:text-black">Home</NuxtLink> 
      <span>></span> 
      <span class="text-black">Cart</span>
    </nav>

    <h1 class="text-4xl font-black uppercase tracking-tighter mb-8 italic">Your Cart</h1>

    <div v-if="cartStore.items.length > 0" class="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-5 items-start">
      
      <div class="border border-black/10 rounded-[20px] p-5 md:p-6 space-y-6">
        <div v-for="(item, index) in cartStore.items" :key="`${item.id}-${item.selectedSize}-${item.selectedColor}`" 
             class="flex gap-4 pb-6 last:border-0 last:pb-0"
             :class="{ 'border-b border-black/10': index !== cartStore.items.length - 1 }">
          
          <div class="w-24 h-24 md:w-32 md:h-32 bg-[#F0EEED] rounded-[12px] overflow-hidden flex-shrink-0">
    <NuxtImg 
      :src="item.img" 
      :alt="item.name"
      width="128" 
      height="128"
      format="webp"
      loading="lazy"
      class="w-full h-full object-cover" 
    />
</div>
          
          <div class="flex-1 flex flex-col justify-between">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-bold text-base md:text-xl mb-1">{{ item.name }}</h3>
                <p class="text-xs md:text-sm text-black">Size: <span class="opacity-60">{{ item.selectedSize }}</span></p>
                <p class="text-xs md:text-sm text-black">Color: <span class="opacity-60">{{ item.selectedColor }}</span></p>
              </div>
              
              <button @click="cartStore.removeFromCart(item.id, item.selectedSize, item.selectedColor)" class="text-[#FF3333]">
    <img 
      src="/icons/delete-cart.svg" 
      width="24" 
      height="24" 
      class="w-6 h-6" 
      alt="Delete" 
    />
</button>
            </div>
            
            <div class="flex justify-between items-end">
              <span class="text-xl md:text-2xl font-bold">${{ item.price }}</span>
              <div class="bg-[#F0F0F0] px-4 py-2 rounded-full flex gap-5 font-bold items-center">
                <button @click="cartStore.updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)" class="text-xl opacity-60">-</button>
                <span class="text-sm md:text-base">{{ item.quantity }}</span>
                <button @click="cartStore.updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)" class="text-xl opacity-60">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border border-black/10 rounded-[20px] p-6 space-y-6">
        <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
        <div class="space-y-4">
          <div class="flex justify-between text-lg">
            <span class="text-black/60">Subtotal</span> 
            <span class="font-bold">${{ cartStore.totalPrice }}</span>
          </div>
          <div v-if="discount > 0" class="flex justify-between text-lg">
            <span class="text-black/60">Discount (-20%)</span> 
            <span class="text-[#FF3333] font-bold">-${{ discount }}</span>
          </div>
          <div class="flex justify-between text-lg">
            <span class="text-black/60">Delivery Fee</span> 
            <span class="font-bold">$15</span>
          </div>
          <div class="pt-4 border-t border-black/10 flex justify-between text-xl font-bold">
            <span>Total</span> 
            <span>${{ finalTotal }}</span>
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <div class="relative flex-1">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">🏷️</span>
            <input v-model="promoCode" type="text" placeholder="Add promo code" 
                   class="w-full bg-[#F0F0F0] py-3 pl-12 pr-4 rounded-full outline-none text-sm" />
          </div>
          <button @click="applyPromoCode" class="bg-black text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-black/80 transition text-sm">
            Apply
          </button>
        </div>

        <button class="w-full bg-black text-white py-4 rounded-full font-bold text-base md:text-lg hover:bg-black/80 transition flex items-center justify-center gap-3">
          Go to Checkout <span class="text-xl">→</span>
        </button>
      </div>

    </div>

    <div v-else class="text-center py-20 border border-dashed border-black/20 rounded-[20px]">
        <p class="text-black/40 text-xl font-bold mb-4">Your cart is empty</p>
        <NuxtLink to="/" class="bg-black text-white px-8 py-3 rounded-full hover:bg-black/80 transition">
          Back to Shop
        </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { ref, computed } from 'vue'

const cartStore = useCartStore()
const promoCode = ref('')
const isDiscountApplied = ref(false)

const applyPromoCode = () => {
  if (promoCode.value.toUpperCase() === 'NEW20') {
    isDiscountApplied.value = true
  } else {
    alert('Попробуйте код NEW20')
    isDiscountApplied.value = false
  }
}

const discount = computed(() => isDiscountApplied.value ? Math.round(cartStore.totalPrice * 0.2) : 0)
const finalTotal = computed(() => cartStore.totalPrice === 0 ? 0 : cartStore.totalPrice - discount.value + 15)
</script>
<template>
  <section class="max-w-7xl mx-auto px-4 md:px-10 relative pb-10 pt-0 overflow-hidden">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-10">
      
      <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
        Our Happy <br class="hidden md:block"> Customers
      </h2>
      
      <div class="flex gap-3 flex-shrink-0">
        <button @click="scroll('left')" aria-label="Previous slide" class="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 bg-white hover:bg-gray-50 transition-colors">
          <svg width="24" height="24" alt="Previous slide" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
        </button>
        <button @click="scroll('right')" aria-label="Next slide" class="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 bg-white hover:bg-gray-50 transition-colors">
          <svg width="24" height="24" alt="Next slide" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
        </button>
      </div>
    </div>

    <div 
      ref="scrollContainer"
      class="flex gap-4 md:gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x"
    >
      <div v-for="review in reviews" :key="review.id" 
           class="snap-center w-[calc(100vw-60px)] md:w-[400px] lg:w-[calc(33.333%-14px)] flex-shrink-0 border border-black/10 p-6 md:p-8 rounded-[20px] bg-white flex flex-col gap-3">
        
        <div class="flex text-[#FFC633] text-lg">
          <span v-for="star in 5" :key="star">★</span>
        </div>

        <div class="flex items-center gap-1.5">
          <span class="font-bold text-base md:text-xl">{{ review.user }}</span>
          <div class="bg-[#01AB31] rounded-full p-0.5 flex items-center justify-center w-4 h-4">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4"><path d="M20 6L9 17L4 12" /></svg>
          </div>
        </div>

        <p class="text-black/60 leading-normal text-sm md:text-base italic">
          "{{ review.comment }}"
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  reviews: { type: Array, default: () => [] }
})

const scrollContainer = ref(null)

const scroll = (direction) => {
  if (scrollContainer.value) {
    
    const firstCard = scrollContainer.value.querySelector('div')
    const gap = 16
    const step = firstCard ? firstCard.offsetWidth + gap : 300

    scrollContainer.value.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
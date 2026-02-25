<template>
  <NuxtLink :to="`/product/${product.id}`" class="group cursor-pointer w-full block">
    
    <div class="bg-[#F0EEED] rounded-[20px] aspect-square overflow-hidden mb-4">
      <NuxtImg 
        :src="product.img" 
        :alt="product.name" 
        width="300" 
        height="300"
        format="webp"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
      />
    </div>

    <h3 class="font-bold text-lg mb-1 leading-tight">{{ product.name }}</h3>

    <div class="flex items-center gap-1">
      <div class="flex gap-0.5">
        <template v-for="i in 5" :key="i">
          <img 
            v-if="i <= Math.floor(product.rating)" 
            src="/icons/star.svg" 
            width="18"
            height="18"
            class="w-[18px] h-[18px]" 
            alt="star"
          />
          <img 
            v-else-if="i === Math.ceil(product.rating) && product.rating % 1 !== 0" 
            src="/icons/half-a-star.svg" 
            width="18"
            height="18"
            class="w-[18px] h-[18px]" 
            alt="half star"
          />
        </template>
      </div>
      <span class="text-sm ml-1">
        <span class="text-black font-medium">{{ product.rating }}</span>
        <span class="text-black/60">/5</span>
      </span>
    </div>

    <div class="flex items-center gap-2 md:gap-3 mt-1">
      <span class="font-bold text-2xl md:text-2xl">${{ product.price }}</span>
      
      <template v-if="product.oldPrice">
        <span class="text-black/40 line-through text-2xl md:text-2xl font-bold">
          ${{ product.oldPrice }}
        </span>
        
        <span class="bg-[#FF3333]/10 text-[#FF3333] text-xs md:text-sm font-medium px-3 py-1 rounded-full">
          -{{ Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) }}%
        </span>
      </template>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
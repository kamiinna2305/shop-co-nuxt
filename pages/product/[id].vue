<template>
  <div class="max-w-7xl mx-auto px-4 py-6 md:py-10" v-if="product">
    
    <nav class="flex items-center gap-2 text-black/60 text-sm mb-6 md:mb-8 border-t pt-6">
      <NuxtLink to="/" class="hover:text-black transition font-medium">Home</NuxtLink>
      <span class="text-xs">/</span>
      <NuxtLink to="/shop" class="hover:text-black transition font-medium">Shop</NuxtLink>
      <span class="text-xs">/</span>
      <span class="text-black capitalize">{{ product.category || 'T-shirt' }}</span>
    </nav>

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
      <div class="w-full lg:w-[610px] flex flex-col md:grid md:grid-cols-[152px_1fr] gap-3 md:gap-4">
        <div class="bg-[#F0EEED] rounded-[20px] overflow-hidden h-full min-h-[350px] md:min-h-[500px] order-1 md:order-2">
          <img :src="currentImage" class="w-full h-full object-cover transition-opacity duration-300" :alt="product.name" />
        </div>
        <div class="flex flex-row md:flex-col gap-3 order-2 md:order-1">
          <button 
            v-for="(image, index) in product.images" :key="index"
            @click="currentImage = image"
            class="flex-1 md:flex-none md:w-[152px] aspect-square md:aspect-[152/167] rounded-[20px] overflow-hidden border-2 transition-all"
            :class="currentImage === image ? 'border-black' : 'border-transparent bg-[#F0EEED]'"
          >
            <img :src="image" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <div class="flex-1 flex flex-col justify-between py-1">
        <div>
          <h1 class="text-3xl md:text-[48px] font-black uppercase tracking-tighter leading-[1] mb-2 md:mb-3">
            T-SHIRT WITH TAPE DETAILS
          </h1>
          <div class="flex items-center gap-3 mb-3 md:mb-4 text-xl">
            <div class="flex text-yellow-400">
              <span v-for="i in 5" :key="i" :class="i <= 4 ? 'opacity-100' : 'opacity-20'">★</span>
            </div>
            <span class="text-sm text-black/60">{{ product.rating || '4.5' }}/5</span>
          </div>
          <div class="flex items-center gap-3 mb-4 md:mb-5">
            <span class="text-2xl md:text-3xl font-bold">${{ product.price }}</span>
            <span v-if="product.oldPrice" class="text-2xl md:text-3xl font-bold text-black/30 line-through">${{ product.oldPrice }}</span>
            <span v-if="product.oldPrice" class="bg-[#FF3333]/10 text-[#FF3333] px-3 py-1 rounded-full text-xs font-bold">
              -{{ Math.round((1 - product.price / product.oldPrice) * 100) }}%
            </span>
          </div>
          <p class="text-black/60 leading-relaxed pb-5 md:pb-6 border-b border-black/10 text-sm md:text-base">
            {{ product.description }}
          </p>
        </div>

        <div class="flex flex-col gap-4 mt-4 md:mt-6">
          <div class="pb-2 border-b border-black/10">
            <p class="text-black/60 mb-3 text-sm uppercase">Select Colors</p>
            <div class="flex gap-3">
              <button 
                v-for="color in product.colors" :key="color.hex"
                @click="selectedColor = color"
                :style="{ backgroundColor: color.hex }"
                class="w-9 h-9 rounded-full border border-black/10 transition-all flex items-center justify-center relative shadow-sm"
                :class="{'ring-2 ring-offset-2 ring-black': selectedColor?.hex === color.hex}"
              >
                <svg v-if="selectedColor?.hex === color.hex" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
          <div class="pb-2 border-b border-black/10">
            <p class="text-black/60 mb-3 text-sm uppercase">Choose Size</p>
            <div class="flex flex-wrap gap-2 md:gap-3">
              <button 
                v-for="size in product.sizes" :key="size"
                @click="selectedSize = size"
                :class="[
                  'px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all text-xs md:text-sm font-medium border',
                  selectedSize === size ? 'bg-black text-white border-black' : 'bg-[#F0F0F0] text-black/60 border-transparent'
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>
          <div class="flex gap-3 md:gap-5 pt-2 h-[52px] md:h-[60px]">
            <div class="bg-[#F0F0F0] px-4 md:px-6 rounded-full flex items-center justify-between w-[110px] md:w-[170px] shrink-0 font-bold">
              <button @click="quantity > 1 ? quantity-- : null" class="text-xl md:text-2xl">-</button> 
              <span class="text-sm md:text-lg">{{ quantity }}</span> 
              <button @click="quantity++" class="text-xl md:text-2xl">+</button>
            </div>
            <BaseButton class="flex-1 rounded-full text-sm md:text-base font-medium h-full shadow-lg" :loading="isAdding" @click="handleAddToCart">
              Add to Cart
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <section class="mt-12 md:mt-20">
      <div class="flex justify-between md:justify-center md:gap-32 border-b border-black/10">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
          class="pb-4 text-sm md:text-xl transition-all relative px-1 md:px-4"
          :class="activeTab === tab.id ? 'text-black font-medium' : 'text-black/60'"
        >
          {{ tab.name }}
          <div v-if="activeTab === tab.id" class="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
        </button>
      </div>

      <div class="py-6 md:py-10">
        <div v-if="activeTab === 'reviews'">
          <div class="flex items-center justify-between mb-6 md:mb-8">
            <h3 class="text-lg md:text-2xl font-bold">
              All Reviews <span class="text-black/60 font-normal text-xs md:text-base">(451)</span>
            </h3>
            <div class="flex gap-2">
              <button class="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><path d="M4 6h16M4 12h10M4 18h16"/></svg>
              </button>
              <button class="px-4 py-2 md:px-6 md:py-3 bg-black text-white rounded-full text-xs md:text-sm font-medium">Write a Review</button>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div v-for="review in currentProductReviews.slice(0, 2)" :key="review.id" class="p-5 md:p-7 border border-black/10 rounded-[20px] flex flex-col gap-3 md:gap-4">
              <div class="flex text-yellow-400 text-sm">★★★★★</div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-base md:text-lg">{{ review.user }}</span>
                <div class="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
              </div>
              <p class="text-black/60 italic text-sm">"{{ review.comment }}"</p>
              <p class="text-black/60 text-xs font-medium mt-auto">Posted on {{ review.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-8 md:mt-16">
      <h2 class="text-3xl md:text-[48px] font-black text-center mb-8 md:mb-12 uppercase italic leading-none">
        You might also like
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        <ProductCard v-for="p in allProducts?.newArrivals?.slice(0, 4)" :key="p.id" :product="p" />
      </div>
    </section>

    <section class="mt-12 md:mt-20 relative z-10 translate-y-8 md:translate-y-12">
      <div class="bg-black rounded-[20px] p-6 md:p-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-6">
        <h2 class="text-white text-2xl md:text-[40px] font-black uppercase leading-tight text-center lg:text-left lg:max-w-[550px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div class="flex flex-col gap-3 w-full md:max-w-[350px]">
          <div class="relative">
            <input type="email" placeholder="Enter your email address" class="w-full py-3 md:py-4 px-12 rounded-full text-sm outline-none" />
            <span class="absolute left-5 top-1/2 -translate-y-1/2 opacity-40 text-lg">✉️</span>
          </div>
          <button class="w-full py-3 md:py-4 bg-white text-black rounded-full font-medium text-sm">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

interface Color { name: string; hex: string }
interface Product { 
  id: number; name: string; price: number; img: string; images: string[];
  rating: number; oldPrice?: number; colors: Color[]; sizes: string[]; 
  category?: string; description: string;
}
interface ProductsData { newArrivals: Product[]; topSelling: Product[] }

const route = useRoute()
const cartStore = useCartStore()
const quantity = ref(1)
const isAdding = ref(false)
const selectedSize = ref('')
const selectedColor = ref<Color | null>(null)
const currentImage = ref('')
const activeTab = ref('reviews')

const tabs = [
  { id: 'details', name: 'Product Details' },
  { id: 'reviews', name: 'Rating & Reviews' },
  { id: 'faqs', name: 'FAQs' }
]

const { data: allProducts } = await useFetch<ProductsData>('/api/products')
const { data: reviewsData } = await useFetch<Record<number, any[]>>('/api/reviews')

const productId = computed(() => Number(route.params.id))

const product = computed(() => {
  if (!allProducts.value) return null
  const merged = [...allProducts.value.newArrivals, ...allProducts.value.topSelling]
  return merged.find((p) => p.id === productId.value) || null
})

const currentProductReviews = computed(() => {
  return reviewsData.value ? reviewsData.value[productId.value] || [] : []
})

watch(product, (newVal) => {
  if (newVal) {
    currentImage.value = newVal.img
    if (newVal.colors?.length) selectedColor.value = newVal.colors[0]
    if (newVal.sizes?.length) selectedSize.value = newVal.sizes[0]
  }
}, { immediate: true })

const showToast = inject('showToast') as (msg: string) => void

const handleAddToCart = async () => {
  if (!product.value || !selectedColor.value || isAdding.value) return
  isAdding.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 600))
    cartStore.addToCart(product.value, quantity.value, selectedSize.value, selectedColor.value.name)
    showToast(`${product.value.name} added to cart`)
    quantity.value = 1
  } finally {
    isAdding.value = false
  }
}
</script>
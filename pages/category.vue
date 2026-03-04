<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <nav class="text-black/60 text-sm mb-6">
      <NuxtLink to="/" class="hover:text-black">Home</NuxtLink> > 
      <span class="text-black font-medium">Casual</span>
    </nav>

    <div class="flex flex-col md:flex-row gap-5">
      
      <aside class="hidden md:block w-[295px] flex-shrink-0 border border-black/10 rounded-[20px] p-6 h-fit">
        <div class="flex justify-between items-center mb-6 pb-6 border-b border-black/10">
          <h2 class="text-xl font-bold">Filters</h2>
          <button @click="resetFilters" class="text-sm text-black/40 hover:text-black underline">Reset</button>
        </div>

        <div class="space-y-4 pb-6 border-b border-black/10">
          <div v-for="cat in categories" :key="cat"
               @click="filters.category = cat"
               :class="['flex justify-between cursor-pointer transition', filters.category === cat ? 'text-black font-bold' : 'text-black/60 hover:text-black']">
            <span>{{ cat }}</span> 
            <span class="opacity-40">></span>
          </div>
        </div>

        <div class="py-6 border-b border-black/10">
          <h3 class="font-bold mb-5 text-lg">Colors</h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="color in colorOptions" 
                    :key="color.name" 
                    @click="filters.color = color.name"
                    :class="[
                      color.class, 
                      'w-9 h-9 rounded-full border border-black/10 transition-all',
                      filters.color === color.name ? 'ring-2 ring-black ring-offset-2 scale-110' : ''
                    ]">
            </button>
          </div>
        </div>

        <div class="py-6 border-b border-black/10">
          <h3 class="font-bold mb-5 text-lg">Size</h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="size in sizeOptions" :key="size"
                    @click="filters.size = size"
                    :class="[
                      'px-5 py-2 rounded-full text-sm font-medium transition',
                      filters.size === size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black/60 hover:bg-black hover:text-white'
                    ]">
              {{ size }}
            </button>
          </div>
        </div>

        <button @click="applyFilters" class="w-full bg-black text-white py-4 rounded-full mt-6 font-bold hover:bg-black/90 transition">
          Apply Filter
        </button>
      </aside>

      <main class="flex-1">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl md:text-3xl font-black uppercase tracking-tighter">Casual</h1>
          
          <div class="flex items-center gap-3">
            <div class="hidden sm:block text-black/60 text-sm">
              Showing {{ filteredProducts.length }} Products 
            </div>
            
            <button @click="isMobileFiltersOpen = true" class="md:hidden bg-[#F0F0F0] p-2.5 rounded-full hover:bg-black/5 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H21M6 12H18M10 17H14" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>
          </div>
        </div>

        <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-10">
          <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
        </div>
        
        <div v-else class="text-center py-20 bg-[#F0F0F0] rounded-[20px]">
          <p class="text-xl font-bold opacity-40">No products found</p>
          <button @click="resetFilters" class="mt-4 text-black underline">Clear all filters</button>
        </div>
      </main>
    </div>

    <Transition name="slide-up">
      <div v-if="isMobileFiltersOpen" class="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
        <div class="absolute inset-0 bg-black/40" @click="isMobileFiltersOpen = false"></div>
        
        <div class="relative bg-white rounded-t-[20px] p-6 max-h-[90vh] overflow-y-auto w-full">
          <div class="flex justify-between items-center mb-6 border-b pb-4">
            <h2 class="text-xl font-bold">Filters</h2>
            <button @click="isMobileFiltersOpen = false" class="text-2xl font-light">&times;</button>
          </div>

          <div class="space-y-6">
            <div>
              <h3 class="font-bold mb-4 text-lg">Categories</h3>
              <div class="grid grid-cols-2 gap-2">
                <button v-for="cat in categories" :key="cat" 
                  @click="filters.category = cat"
                  :class="['py-2 px-4 rounded-xl border text-sm transition', filters.category === cat ? 'bg-black text-white border-black' : 'bg-gray-50 border-transparent text-black/60']">
                  {{ cat }}
                </button>
              </div>
            </div>

            <div class="pt-4 border-t border-black/5">
              <h3 class="font-bold mb-4 text-lg">Colors</h3>
              <div class="flex flex-wrap gap-3">
                <button v-for="color in colorOptions" :key="color.name" 
                  @click="filters.color = color.name"
                  :class="[
                    color.class, 
                    'w-10 h-10 rounded-full border border-black/10 transition-all',
                    filters.color === color.name ? 'ring-2 ring-black ring-offset-2 scale-110' : ''
                  ]">
                </button>
              </div>
            </div>

            <div class="pt-4 border-t border-black/5">
              <h3 class="font-bold mb-4 text-lg">Size</h3>
              <div class="flex flex-wrap gap-2">
                <button v-for="size in sizeOptions" :key="size"
                  @click="filters.size = size"
                  :class="['px-5 py-2 rounded-full text-sm font-medium transition', filters.size === size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black/60']">
                  {{ size }}
                </button>
              </div>
            </div>
          </div>

          <button @click="applyFilters" class="w-full bg-black text-white py-4 rounded-full mt-8 font-bold active:scale-95 transition">
            Apply Filter
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
// UI State
const isMobileFiltersOpen = ref(false)

// Data Fetching
const { data: allProducts } = await useFetch('/api/products')

const allProductsMerged = computed(() => {
  if (!allProducts.value) return []
  return [...allProducts.value.newArrivals, ...allProducts.value.topSelling]
})

// Filter Options
const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']
const sizeOptions = ['Small', 'Medium', 'Large', 'X-Large']
const colorOptions = [
  { name: 'Green', class: 'bg-green-500' },
  { name: 'Red', class: 'bg-red-500' },
  { name: 'Yellow', class: 'bg-yellow-400' },
  { name: 'White', class: 'bg-white' },
  { name: 'Black', class: 'bg-black' },
  { name: 'Blue', class: 'bg-blue-600' },
]

// Reactive Filters
const filters = reactive({
  category: '',
  color: '',
  size: ''
})

// Core Filtering Logic
const filteredProducts = computed(() => {
  return allProductsMerged.value.filter(product => {
    const matchCategory = !filters.category || product.category === filters.category
    // Fix: Using .some() to check object property inside array
    const matchColor = !filters.color || product.colors.some(c => c.name === filters.color)
    const matchSize = !filters.size || product.sizes.includes(filters.size)
    
    return matchCategory && matchColor && matchSize
  })
})

// Actions
const resetFilters = () => {
  filters.category = ''
  filters.color = ''
  filters.size = ''
}

const applyFilters = () => {
  isMobileFiltersOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
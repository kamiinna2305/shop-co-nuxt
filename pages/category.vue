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
            <button v-for="size in ['Small', 'Medium', 'Large', 'X-Large']" :key="size"
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
          <h1 class="text-3xl font-black uppercase tracking-tighter">Casual</h1>
          <div class="text-black/60 text-sm">
            Showing {{ filteredProducts.length }} of {{ allProductsMerged.length }} Products 
          </div>
        </div>

        <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-10">
          <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
        </div>
        
        <div v-else class="text-center py-20 bg-[#F0F0F0] rounded-[20px]">
          <p class="text-xl font-bold opacity-40">No products found with these filters</p>
          <button @click="resetFilters" class="mt-4 text-black underline">Show all products</button>
        </div>
      </main>

    </div>
  </div>
</template>

<script setup>
const { data: allProducts } = await useFetch('/api/products')

const allProductsMerged = computed(() => {
  if (!allProducts.value) return []
  return [...allProducts.value.newArrivals, ...allProducts.value.topSelling]
})

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']
const colorOptions = [
  { name: 'Green', class: 'bg-green-500' },
  { name: 'Red', class: 'bg-red-500' },
  { name: 'Yellow', class: 'bg-yellow-400' },
  { name: 'White', class: 'bg-white' },
  { name: 'Black', class: 'bg-black' },
]

const filters = reactive({
  category: '',
  color: '',
  size: ''
})

const filteredProducts = computed(() => {
  return allProductsMerged.value.filter(product => {
    
    const matchCategory = !filters.category || product.category === filters.category
    
    const matchColor = !filters.color || product.colors.includes(filters.color)
    
    const matchSize = !filters.size || product.sizes.includes(filters.size)
    
    return matchCategory && matchColor && matchSize
  })
})

const resetFilters = () => {
  filters.category = ''
  filters.color = ''
  filters.size = ''
}

const applyFilters = () => {

  console.log('Filters applied:', filters)
}
</script>
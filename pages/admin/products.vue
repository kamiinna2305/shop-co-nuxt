<script setup>
definePageMeta({
  layout: 'admin'
})

const { data: products, pending, error, refresh } = await useFetch('/api/products')

const isModalOpen = ref(false)
const showToast = inject('showToast', null)

const newProduct = ref({
  name: '',
  price: 0,
  stock: 0,
  img: '/images/product-1.png'
})

const getStockClass = (stock) => {
  const s = Number(stock) || 0
  if (s === 0) return 'bg-red-100 text-red-700'
  if (s < 10) return 'bg-orange-100 text-orange-700'
  return 'bg-green-100 text-green-700'
}

const handleAddProduct = () => {
  if (!newProduct.value.name) return
  if (products.value && products.value.newArrivals) {
    products.value.newArrivals.unshift({
      ...newProduct.value,
      id: Date.now()
    })
    isModalOpen.value = false
    if (showToast) showToast('Product added successfully!')
    newProduct.value = { name: '', price: 0, stock: 0, img: '/images/product-1.png' }
  }
}

const deleteProduct = (id) => {
  if (confirm('Are you sure?')) {
    products.value.newArrivals = products.value.newArrivals.filter(p => p.id !== id)
    if (showToast) showToast('Product deleted')
  }
}
</script>

<template>
  <div>
    <div v-if="error" class="p-10 text-center bg-red-50 rounded-2xl border-2 border-red-100">
       <p class="text-red-600 font-bold">Failed to load inventory.</p>
       <button @click="refresh()" class="mt-4 text-sm underline text-red-400">Try again</button>
    </div>

    <div v-else>
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 italic uppercase tracking-tighter">Products Inventory</h1>
          <p class="text-sm text-gray-500 mt-1">Total items: {{ products?.newArrivals?.length || 0 }}</p>
        </div>
        <button @click="isModalOpen = true" class="bg-black text-white px-6 py-3 rounded-2xl text-sm font-black hover:scale-105 transition active:scale-95 shadow-lg">
          + ADD NEW PRODUCT
        </button>
      </div>

      <div v-if="pending" class="p-20 text-center">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-black"></div>
        <p class="text-gray-400 mt-4 font-medium tracking-widest uppercase text-[10px]">Syncing Database...</p>
      </div>
      
      <div v-else>
        <div class="hidden lg:block bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50/50 border-b border-gray-100">
                <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Product Details</th>
                <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center">Price</th>
                <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center">Availability</th>
                <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="product in products?.newArrivals" :key="product.id" class="group hover:bg-gray-50/50 transition-colors">
                <td class="p-5">
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-50">
                      <img :src="product.img" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div>
                      <div class="font-black text-gray-900 text-sm uppercase italic tracking-tight">{{ product.name }}</div>
                      <div class="text-[10px] text-gray-400 font-bold mt-0.5">REF: #{{ product.id }}</div>
                    </div>
                  </div>
                </td>
                <td class="p-5 text-center font-black text-gray-900 tracking-tighter">${{ product.price }}</td>
                <td class="p-5 text-center">
                  <span :class="['px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest', getStockClass(product.stock)]">
                    {{ (product.stock || 0) > 0 ? product.stock + ' units' : 'Out of stock' }}
                  </span>
                </td>
                <td class="p-5 text-right">
                  <div class="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="p-2.5 bg-gray-100 hover:bg-black hover:text-white rounded-xl transition-all duration-300">✏️</button>
                    <button @click="deleteProduct(product.id)" class="p-2.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-300">🗑️</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="lg:hidden space-y-4">
          <div v-for="product in products?.newArrivals" :key="product.id" class="bg-white p-5 rounded-[32px] border border-gray-100 shadow-sm">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden flex-shrink-0">
                <img :src="product.img" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <div class="font-black text-gray-900 text-sm uppercase italic tracking-tight">{{ product.name }}</div>
                <div class="text-[10px] text-gray-400 font-bold">REF: #{{ product.id }}</div>
              </div>
              <div class="flex gap-2">
                <button class="p-2 bg-gray-50 rounded-xl">✏️</button>
                <button @click="deleteProduct(product.id)" class="p-2 bg-red-50 text-red-600 rounded-xl">🗑️</button>
              </div>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-gray-50">
              <div>
                <p class="text-[9px] font-black text-gray-400 uppercase">Price</p>
                <p class="font-black text-gray-900 tracking-tighter">${{ product.price }}</p>
              </div>
              <div class="text-right">
                <p class="text-[9px] font-black text-gray-400 uppercase mb-1">Stock</p>
                <span :class="['px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest', getStockClass(product.stock)]">
                  {{ product.stock }} units
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
</template>
<template>
  <div class="flex h-screen bg-gray-50 overflow-hidden relative">
    
    <aside 
      class="fixed inset-y-0 left-0 z-50 w-64 bg-black text-white flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-6 flex justify-between items-center">
        <h1 class="text-2xl font-black uppercase italic tracking-tighter">Shop.co</h1>
        <button @click="isSidebarOpen = false" class="lg:hidden text-white">✕</button>
      </div>

      <nav class="flex-grow px-4 space-y-2">
        <NuxtLink to="/admin" class="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10" active-class="bg-white/20" @click="isSidebarOpen = false">
            📊 Dashboard
        </NuxtLink>
        <NuxtLink to="/admin/products" class="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10" active-class="bg-white/20" @click="isSidebarOpen = false">
            📦 Products
        </NuxtLink>
        <NuxtLink to="/admin/orders" class="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10" active-class="bg-white/20" @click="isSidebarOpen = false">
            🛒 Orders
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-white/10">
        <button class="flex items-center gap-3 text-red-400 p-3 hover:bg-red-500/10 rounded-lg w-full transition">
          🚪 Logout
        </button>
      </div>
    </aside>

    <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <header class="h-16 bg-white border-b border-gray-200 px-4 lg:px-8 flex items-center justify-between flex-shrink-0">
        <div class="flex items-center gap-4">
          <button @click="isSidebarOpen = true" class="lg:hidden p-2 bg-black text-white rounded-lg">
            ☰
          </button>
          <h2 class="font-bold text-gray-800 italic uppercase hidden sm:block">Admin Panel</h2>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-[10px] font-black uppercase hidden sm:block">Inna H.</span>
          <div class="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">A</div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-4 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(false)
</script>
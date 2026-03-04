<script setup>
definePageMeta({
  layout: 'admin' // Вказуємо використовувати наш новий Sidebar
})

// Mock data for the dashboard
const stats = [
  { name: 'Total Revenue', value: '$48,250.60', change: '+12.5%', color: 'text-green-600' },
  { name: 'Active Orders', value: '154', change: '+3', color: 'text-blue-600' },
  { name: 'Total Products', value: '1,240', change: '18 new', color: 'text-purple-600' },
  { name: 'Total Customers', value: '8,432', change: '+201', color: 'text-orange-600' },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-500 mt-2">Welcome back! Here's what's happening with your store today.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div v-for="stat in stats" :key="stat.name" class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">{{ stat.name }}</p>
        <div class="mt-4 flex items-end justify-between">
          <h3 class="text-2xl font-bold text-gray-900">{{ stat.value }}</h3>
          <span :class="['text-xs font-bold px-2 py-1 rounded-lg bg-gray-50', stat.color]">
            {{ stat.change }}
          </span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-bold text-gray-800">Recent Orders</h3>
        <button class="text-sm text-black font-semibold hover:underline">View All</button>
      </div>
      
      <div class="border-2 border-dashed border-gray-100 rounded-xl h-64 flex items-center justify-center">
        <p class="text-gray-400">Order table will be here soon...</p>
      </div>
    </div>
  </div>
</template>
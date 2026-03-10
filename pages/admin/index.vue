<script setup>
definePageMeta({
  layout: 'admin'
})

// Статистика
const stats = [
  { name: 'Total Revenue', value: '$48,250.60', change: '+12.5%', color: 'text-green-600' },
  { name: 'Active Orders', value: '154', change: '+3', color: 'text-blue-600' },
  { name: 'Total Products', value: '1,240', change: '18 new', color: 'text-purple-600' },
  { name: 'Total Customers', value: '8,432', change: '+201', color: 'text-orange-600' },
]

// Дані для графіка (7 днів)
const salesData = [
  { day: 'Mon', height: '40%' },
  { day: 'Tue', height: '70%' },
  { day: 'Wed', height: '55%' },
  { day: 'Thu', height: '90%' },
  { day: 'Fri', height: '65%' },
  { day: 'Sat', height: '80%' },
  { day: 'Sun', height: '95%' },
]

// Останні 5 замовлень (Recent Orders)
const recentOrders = [
  { id: '7721', customer: 'Alex Johnson', total: 245.00, status: 'Paid' },
  { id: '7722', customer: 'Maria Kovalenko', total: 120.50, status: 'Pending' },
  { id: '7723', customer: 'John Doe', total: 89.00, status: 'Paid' },
  { id: '7724', customer: 'Olena Smith', total: 310.20, status: 'Shipped' },
  { id: '7725', customer: 'Ivan Petrov', total: 45.00, status: 'Pending' },
]

const getStatusClass = (status) => {
  if (status === 'Paid') return 'bg-green-50 text-green-600'
  if (status === 'Pending') return 'bg-orange-50 text-orange-600'
  return 'bg-blue-50 text-blue-600'
}
</script>

<template>
  <div>
    <div class="mb-8 text-left">
      <h1 class="text-3xl font-black italic uppercase tracking-tighter text-gray-900">Dashboard</h1>
      <p class="text-gray-500 mt-2 font-medium">Welcome back! Here's what's happening today.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div v-for="stat in stats" :key="stat.name" class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{{ stat.name }}</p>
        <div class="mt-4 flex items-end justify-between">
          <h3 class="text-2xl font-black text-gray-900 tracking-tighter">{{ stat.value }}</h3>
          <span :class="['text-[10px] font-black px-2 py-1 rounded-lg bg-gray-50', stat.color]">
            {{ stat.change }}
          </span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <div class="flex justify-between items-center mb-10">
          <h3 class="text-lg font-black uppercase italic tracking-tight">Sales Analytics</h3>
          <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Last 7 Days</span>
        </div>
        
        <div class="flex items-end justify-between h-64 gap-3 px-2">
          <div v-for="item in salesData" :key="item.day" class="flex-1 flex flex-col items-center group h-full justify-end">
            
            <div 
              class="w-full rounded-t-xl transition-all duration-500 hover:brightness-75 cursor-pointer" 
              :style="{ 
                height: item.height, 
                backgroundColor: '#F3F4F6',
                minWidth: '20px'
              }"
              onmouseover="this.style.backgroundColor='#000000'"
              onmouseout="this.style.backgroundColor='#F3F4F6'"
            ></div>
            
            <span class="text-[10px] font-black text-gray-400 mt-4 uppercase">{{ item.day }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-lg font-black uppercase italic tracking-tight">Recent Orders</h3>
          <NuxtLink to="/admin/orders" class="text-[10px] font-black text-black hover:underline uppercase tracking-widest">
            View All
          </NuxtLink>
        </div>
        
        <div class="space-y-6">
          <div v-for="order in recentOrders" :key="order.id" class="flex items-center justify-between group">
            <div>
              <div class="font-black text-sm uppercase italic tracking-tight text-gray-900">{{ order.customer }}</div>
              <div class="text-[10px] text-gray-400 font-bold">#ORD-{{ order.id }}</div>
            </div>
            <div class="text-right">
              <div class="font-black text-sm text-gray-900 tracking-tighter">${{ order.total }}</div>
              <span :class="['text-[9px] font-black uppercase px-2 py-0.5 rounded-md mt-1 inline-block', getStatusClass(order.status)]">
                {{ order.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
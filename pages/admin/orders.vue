<script setup>
definePageMeta({
  layout: 'admin'
})

// Імітація даних про замовлення (потім можна замінити на useFetch)
const orders = ref([
  {
    id: 'ORD-7721',
    customer: 'Alex Johnson',
    email: 'alex.j@example.com',
    address: 'Kyiv, Khreshchatyk 1, apt 12',
    items: ['Gradient Graphic T-shirt', 'Polo with Tipping Details'],
    total: 245.00,
    status: 'Paid',
    date: '2026-03-05'
  },
  {
    id: 'ORD-7722',
    customer: 'Maria Kovalenko',
    email: 'm.koval@test.ua',
    address: 'Lviv, Svobody Ave 15',
    items: ['Skinny Fit Jeans'],
    total: 120.50,
    status: 'Pending',
    date: '2026-03-05'
  }
])

const getStatusClass = (status) => {
  switch (status) {
    case 'Paid': return 'bg-green-100 text-green-700'
    case 'Pending': return 'bg-orange-100 text-orange-700'
    case 'Shipped': return 'bg-blue-100 text-blue-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 italic uppercase tracking-tighter">Order Management</h1>
      <p class="text-sm text-gray-500 mt-1">Manage and track your customer orders</p>
    </div>
    
    <div class="hidden lg:block bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gray-50/50 border-b border-gray-100">
            <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Customer & Details</th>
            <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Purchase</th>
            <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center">Total</th>
            <th class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="order in orders" :key="order.id" class="group hover:bg-gray-50/50 transition-colors">
            <td class="p-5">
              <div class="font-black text-gray-900 text-sm uppercase italic tracking-tight">{{ order.customer }}</div>
              <div class="text-[10px] text-gray-500 font-medium">{{ order.email }}</div>
              <div class="text-[10px] text-gray-400 mt-1">{{ order.address }}</div>
            </td>
            <td class="p-5">
              <div class="flex flex-wrap gap-1">
                <span v-for="item in order.items" :key="item" class="text-[10px] bg-gray-100 px-2 py-0.5 rounded-md font-bold text-gray-600">
                  {{ item }}
                </span>
              </div>
            </td>
            <td class="p-5 text-center font-black text-gray-900 tracking-tighter">
              ${{ order.total.toFixed(2) }}
            </td>
            <td class="p-5 text-center">
              <span :class="['px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest', getStatusClass(order.status)]">
                {{ order.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="lg:hidden space-y-4">
      <div v-for="order in orders" :key="order.id" class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div class="flex justify-between items-start mb-4">
          <div>
            <div class="font-black text-gray-900 text-sm uppercase italic tracking-tight">{{ order.customer }}</div>
            <div class="text-[10px] text-gray-500 font-bold uppercase tracking-wider">#{{ order.id }}</div>
          </div>
          <span :class="['px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest', getStatusClass(order.status)]">
            {{ order.status }}
          </span>
        </div>

        <div class="space-y-3">
          <div>
            <p class="text-[9px] font-black text-gray-400 uppercase mb-2">Items</p>
            <div class="flex flex-wrap gap-1">
              <span v-for="item in order.items" :key="item" class="text-[9px] bg-gray-50 px-2 py-0.5 rounded-md font-bold text-gray-600 border border-gray-100">
                {{ item }}
              </span>
            </div>
          </div>

          <div class="pt-3 border-t border-gray-50 text-[10px] text-gray-400">
             <p class="font-bold text-gray-500 uppercase text-[8px] mb-1">Shipping Address</p>
             {{ order.address }}
          </div>

          <div class="flex justify-between items-center pt-3 border-t border-gray-50">
            <span class="text-[9px] font-black text-gray-400 uppercase">Total Amount</span>
            <span class="font-black text-gray-900 text-lg tracking-tighter">${{ order.total.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
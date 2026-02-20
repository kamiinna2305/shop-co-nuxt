<template>
  <div class="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
    <TransitionGroup name="toast">
      <div 
        v-for="toast in toasts" 
        :key="toast.id"
        class="bg-black text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[280px] md:min-w-[350px]"
      >
        <div class="bg-green-500 rounded-full p-1 flex-shrink-0">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div class="flex-grow">
          <p class="font-bold text-sm">Added to Cart</p>
          <p class="text-xs text-white/60 mt-0.5">{{ toast.message }}</p>
        </div>

        <NuxtLink to="/cart" class="text-xs font-bold underline hover:text-white/80 transition">
          View
        </NuxtLink>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toasts = ref<{id: number, message: string}[]>([])
let counter = 0

const addToast = (message: string) => {
  const id = counter++
  toasts.value.push({ id, message })
  
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 4000)
}

defineExpose({ addToast })
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.toast-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
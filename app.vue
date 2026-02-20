<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />

    <TheToast ref="toastRef" />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { ref, onMounted, provide } from 'vue'
import TheToast from '~/components/TheToast.vue'

const cartStore = useCartStore()

const toastRef = ref<InstanceType<typeof TheToast> | null>(null)

provide('showToast', (message: string) => {
  console.log('--- Клик сработал! ---')
  console.log('Сообщение:', message)
  
  if (toastRef.value) {
    toastRef.value.addToast(message)
  } else {
    console.error('Критическая ошибка: toastRef пустой! Проверь, есть ли <TheToast ref="toastRef" /> в template')
  }
})

onMounted(() => {
  cartStore.loadCart()
})
</script>
<template>
  <div class="min-h-screen font-sans">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

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
  if (toastRef.value) {
    toastRef.value.addToast(message)
  }
})

onMounted(() => {
  cartStore.loadCart()
})
</script>

<style>
/* Твої стилі транзишнів залишаються тут */
.page-enter-active, .page-leave-active { transition: all 0.3s; }
.page-enter-from, .page-leave-to { opacity: 0; filter: blur(0.5rem); }
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
</style>
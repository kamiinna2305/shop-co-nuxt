<template>
  <div class="min-h-screen flex flex-col font-sans">
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

// Reference for global toast notifications
const toastRef = ref<InstanceType<typeof TheToast> | null>(null)

/**
 * Provides a global showToast function to all child components.
 * Can be used via inject('showToast') in any component.
 */
provide('showToast', (message: string) => {
  // Debugging logs for development
  console.log('[Toast Debug] Action triggered');
  console.log('[Toast Message]:', message);
  
  if (toastRef.value) {
    toastRef.value.addToast(message)
  } else {
    console.error('[Critical Error]: toastRef is null! Ensure <TheToast /> is mounted in template.');
  }
})

onMounted(() => {
  // Restore cart items from localStorage on app initialization
  cartStore.loadCart()
})
</script>

<style>
/* Global page transitions and font smoothing.
  Add font-display: swap to your @font-face rules in global CSS 
  to ensure text remains visible during font loading.
*/
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
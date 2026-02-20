<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto border',
      
      variant === 'black' 
        ? 'bg-black text-white hover:bg-black/80 border-transparent' 
        : 'bg-white text-black border-black/10 hover:bg-[#F0F0F0]',
      
      size === 'lg' 
        ? 'px-8 py-4 text-lg' 
        : 'px-14 py-4 md:px-20 md:py-4 text-base'
    ]"
    :disabled="loading"
    type="button"
  >
    <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'black' | 'white'
  size?: 'md' | 'lg'
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'black',
  size: 'md',
  loading: false
})
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 py-8 md:py-12 bg-white min-h-screen relative">
    <nav class="text-black/60 text-sm mb-6 flex gap-2">
      <NuxtLink to="/" class="hover:text-black">Home</NuxtLink>
      <span>></span>
      <NuxtLink to="/cart" class="hover:text-black">Cart</NuxtLink>
      <span>></span>
      <span class="text-black font-medium">Checkout</span>
    </nav>

    <h1 class="text-4xl font-black uppercase tracking-tighter mb-8 italic text-left">Checkout</h1>

    <div v-if="!isOrdered" class="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
      
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-6 text-left">Shipping Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div class="space-y-2">
              <label class="text-sm font-medium opacity-60 ml-4">Full Name</label>
              <input v-model="form.name" type="text" placeholder="Inna Hiliarovska" 
                     class="w-full bg-[#F0F0F0] py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black transition" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium opacity-60 ml-4">Email Address</label>
              <input v-model="form.email" type="email" placeholder="example@mail.com" 
                     class="w-full bg-[#F0F0F0] py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black transition" />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium opacity-60 ml-4">Country</label>
              <input v-model="form.country" type="text" placeholder="Spain" 
                     class="w-full bg-[#F0F0F0] py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black transition" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-sm font-medium opacity-60 ml-4">City</label>
                <input v-model="form.city" type="text" placeholder="Lloret de Mar" 
                       class="w-full bg-[#F0F0F0] py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black transition" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium opacity-60 ml-4">ZIP Code</label>
                <input v-model="form.zip" type="text" placeholder="17310" 
                       class="w-full bg-[#F0F0F0] py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black transition" />
              </div>
            </div>

            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-medium opacity-60 ml-4">Shipping Address</label>
              <input v-model="form.address" type="text" placeholder="Street name and House number" 
                     class="w-full bg-[#F0F0F0] py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black transition" />
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6 text-left">Payment Method</h2>
          <div class="bg-[#F0F0F0] p-6 rounded-[20px] space-y-6">
            <div class="flex flex-wrap gap-2 pb-4 border-b border-black/5">
              <button v-for="method in ['visa', 'mastercard', 'paypal', 'pay', 'google-pay']" 
                :key="method" 
                @click="selectMethod(method)"
                type="button"
                class="bg-white px-3 py-2 rounded-lg border transition flex items-center justify-center w-12 h-8 md:w-14 md:h-10 shadow-sm"
                :class="selectedMethod === method ? 'border-black ring-1 ring-black' : 'border-black/5 opacity-60 hover:opacity-100'">
                <img :src="`/icons/${method}.svg`" :alt="method" class="max-w-full max-h-full object-contain" />
              </button>
            </div>

            <div v-if="selectedMethod === 'visa' || selectedMethod === 'mastercard'" class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                  <div class="w-2.5 h-2.5 bg-black rounded-full"></div>
                </div>
                <span class="font-bold text-lg uppercase italic text-left">Credit Card</span>
              </div>
              <input v-model="form.card" type="text" placeholder="Card Number (0000 0000 0000 0000)" 
                @input="formatCard" maxlength="19"
                class="w-full bg-white py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black transition" />
              <div class="grid grid-cols-2 gap-4">
                <input v-model="form.expiry" type="text" placeholder="MM/YY" maxlength="5"
                  class="w-full bg-white py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black" />
                <input v-model="form.cvv" type="text" placeholder="CVV" maxlength="3"
                  class="w-full bg-white py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-black" />
              </div>
            </div>

            <div v-else-if="selectedMethod === 'paypal'" class="space-y-4 text-left">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 border-2 border-[#0070ba] rounded-full flex items-center justify-center">
                  <div class="w-2.5 h-2.5 bg-[#0070ba] rounded-full"></div>
                </div>
                <span class="font-bold text-lg uppercase italic text-[#0070ba]">PayPal Account</span>
              </div>
              <input v-model="form.paypalEmail" type="email" placeholder="PayPal Email Address" 
                class="w-full bg-white py-3 px-5 rounded-full outline-none focus:ring-1 focus:ring-[#0070ba] transition" />
            </div>

            <div v-else class="py-4 space-y-4">
              <p class="font-medium text-center italic">Express checkout with {{ selectedMethod === 'pay' ? 'Apple Pay' : 'Google Pay' }}</p>
              <div @click="processOrder" class="bg-black text-white py-4 rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-black/90 transition shadow-lg active:scale-95">
                <span class="font-bold">Pay with</span>
                <img :src="`/icons/${selectedMethod}.svg`" class="h-6 w-auto object-contain" style="filter: invert(1);" :alt="selectedMethod" />
              </div>
              <p class="text-center text-[10px] opacity-40 uppercase tracking-widest font-bold">Secure Encrypted Payment</p>
            </div>
          </div>
        </section>
      </div>

      <div class="border border-black/10 rounded-[20px] p-6 h-fit space-y-6 bg-white shadow-sm sticky top-6">
        <h2 class="text-2xl font-bold text-left">Order Summary</h2>
        <div class="space-y-4">
          <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center text-sm">
            <div class="flex gap-3 text-left">
              <span class="font-bold">{{ item.quantity }}x</span>
              <span class="opacity-60">{{ item.name }}</span>
            </div>
            <span class="font-bold">${{ item.price * item.quantity }}</span>
          </div>
          
          <div class="pt-4 border-t border-black/10 space-y-2">
            <div class="flex justify-between opacity-60">
              <span>Subtotal</span>
              <span>${{ cartStore.totalPrice }}</span>
            </div>
            <div class="flex justify-between text-[#FF3333]">
              <span>Delivery</span>
              <span>+$15</span>
            </div>
            <div class="flex justify-between text-xl font-bold pt-2 border-t border-black/5">
              <span>Total</span>
              <span>${{ cartStore.totalPrice + 15 }}</span>
            </div>
          </div>
        </div>

        <button @click="processOrder" :disabled="isLoading"
                class="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-black/80 transition flex items-center justify-center gap-3 disabled:opacity-50">
          <span v-if="isLoading" class="animate-spin text-xl">◌</span>
          <span v-else>Confirm and Pay Now</span>
        </button>
      </div>
    </div>

    <div v-else class="text-center py-20 bg-[#F0F0F0]/50 rounded-[30px] border border-dashed border-black/10">
      <div class="text-7xl mb-6">✅</div>
      <h2 class="text-4xl font-black uppercase italic mb-4 tracking-tighter">Success!</h2>
      <p class="text-black/60 mb-8 max-w-md mx-auto">
        Thank you, {{ form.name }}! Your order has been placed. 
        We'll send the confirmation to {{ form.email }} shortly.
      </p>
      <NuxtLink to="/" class="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
        Return to Shop
      </NuxtLink>
    </div>

    <TheToast ref="toastRef" />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { ref, reactive } from 'vue'

const cartStore = useCartStore()
const isLoading = ref(false)
const isOrdered = ref(false)
const selectedMethod = ref('visa')

// Creating a link to the toast component
const toastRef = ref<any>(null)

const form = reactive({
  name: '',
  email: '',
  address: '',
  country: '',
  city: '',
  zip: '',
  card: '',
  expiry: '',
  cvv: '',
  paypalEmail: '',
})

const selectMethod = (method: string) => {
  selectedMethod.value = method
}

const formatCard = () => {
  form.card = form.card.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
}

const processOrder = async () => {
  // Validating key fields through your toasts
  if (!form.name || !form.email || !form.address || !form.country || !form.city || !form.zip) {
    toastRef.value?.addToast('Required Fields', 'Please fill in all shipping details')
    return
  }

  // Card validation
  if ((selectedMethod.value === 'visa' || selectedMethod.value === 'mastercard') && !form.card) {
    toastRef.value?.addToast('Payment Details', 'Please enter your card number')
    return
  }

  // PayPal validation
  if (selectedMethod.value === 'paypal' && !form.paypalEmail) {
    toastRef.value?.addToast('PayPal Error', 'Please enter your PayPal email')
    return
  }

  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isLoading.value = false
  isOrdered.value = true
  cartStore.$patch({ items: [] })
}
</script>
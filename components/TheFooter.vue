<template>
  <footer class="relative mt-32 bg-[#F0F0F0] pt-40 pb-10 px-4 md:px-10">
    
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-7xl bg-black rounded-[20px] p-8 md:px-16 md:py-9 flex flex-col lg:flex-row justify-between items-center gap-8">
      <h2 class="text-white text-3xl md:text-[40px] font-black uppercase leading-tight max-w-[550px]">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <div class="flex flex-col gap-3 w-full md:w-[350px]">
        <div class="relative">
          <input type="email" placeholder="Enter your email address" class="w-full py-3 px-12 rounded-full outline-none text-black text-sm" />
          <img src="/icons/letter.svg" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 object-contain" alt="mail" />
        </div>
        <button class="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-gray-200 transition text-sm">
          Subscribe to Newsletter
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-black/10 pb-12">
      <div class="col-span-2 md:col-span-1 flex flex-col gap-6">
        <h2 class="text-3xl font-black uppercase italic tracking-tighter text-black">SHOP.CO</h2>
        <p class="text-black/60 text-sm leading-relaxed">
          We have clothes that suits your style and which you’re proud to wear. From women to men.
        </p>

<div class="flex gap-3">
  <a v-for="social in socialIcons" :key="social.name" href="#" 
     :class="[
       'w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition duration-300 shadow-sm group',
       social.icon === 'facebook' 
        ? 'bg-black hover:bg-white border border-transparent hover:border-black/10' 
        : 'bg-white border border-black/10 hover:bg-black'
     ]">
    <img :src="`/icons/${social.icon}.svg`" 
         :class="[
           'w-3.5 h-3.5 md:w-4 md:h-4 object-contain transition duration-300',
           social.icon === 'facebook' ? 'group-hover:invert' : 'group-hover:invert'
         ]" 
         :alt="social.name" />
  </a>
</div>
        
      
      </div>

      <div v-for="col in footerLinks" :key="col.title">
        <h3 class="font-bold uppercase tracking-[2px] text-sm mb-6">{{ col.title }}</h3>
        <ul class="flex flex-col gap-4 text-black/60 text-sm">
          <li v-for="link in col.links" :key="link" class="hover:text-black cursor-pointer transition">{{ link }}</li>
        </ul>
      </div>
    </div>

    <div class="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-black/60 text-[12px] md:text-sm text-center">Shop.co © 2000-2023, All Rights Reserved</p>
      
      <div class="flex gap-2 h-7 md:h-8">
        <div v-for="pay in paymentIcons" :key="pay" class="w-10 md:w-12 h-full bg-white rounded border border-black/5 flex items-center justify-center p-1 shadow-sm">
          <img :src="`/icons/${pay}.svg`" class="max-w-full max-h-full object-contain" :alt="pay" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  { title: 'Company', links: ['About', 'Features', 'Works', 'Career'] },
  { title: 'Help', links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
  { title: 'FAQ', links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
  { title: 'Resources', links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] },
]

const socialIcons = [
  { name: 'Twitter', icon: 'twitter' },
  { name: 'Facebook', icon: 'facebook' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'Github', icon: 'git' }
]

const paymentIcons = ['visa', 'mastercard', 'paypal', 'pay', 'google-pay']
</script>
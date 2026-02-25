<template>
  <section class="bg-[#F2F0F1] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center">
      
      <div class="md:w-1/2 z-10 pt-8 pb-10 md:py-20">
        <h1 class="text-4xl md:text-[72px] font-black leading-[0.95] mb-5 uppercase tracking-tighter italic">
          Find clothes that matches your style
        </h1>
        <p class="text-black/60 text-sm md:text-lg mb-6 md:mb-8 max-w-[545px] leading-relaxed">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        
        <button class="w-full md:w-auto bg-black text-white px-14 py-4 rounded-full font-medium hover:bg-black/80 transition-all text-base">
          Shop Now
        </button>

        <div class="flex flex-wrap justify-center md:justify-start gap-y-6 gap-x-8 mt-10 md:mt-12">
          <div class="text-left"> <span class="text-2xl md:text-4xl font-bold text-black leading-none">200+</span>
            <p class="text-black/60 text-xs md:text-sm mt-1">International Brands</p>
          </div>
          <div class="hidden md:block w-px h-12 bg-black/10 mx-2"></div>
          <div class="text-left">
            <span class="text-2xl md:text-4xl font-bold text-black leading-none">2,000+</span>
            <p class="text-black/60 text-xs md:text-sm mt-1">High-Quality Products</p>
          </div>
          <div class="hidden md:block w-px h-12 bg-black/10 mx-2"></div>
          <div class="text-left w-full md:w-auto flex flex-col items-center md:items-start">
             <span class="text-2xl md:text-4xl font-bold text-black leading-none">30,000+</span>
             <p class="text-black/60 text-xs md:text-sm mt-1">Happy Customers</p>
          </div>
        </div>
      </div>

    <div class="md:w-1/2 relative w-full">
  <NuxtImg 
    src="/img/hero.png" 
    alt="Models" 
    class="w-full h-auto object-cover select-none"
    width="800"
    height="600"
    fetchpriority="high"
    priority
    format="webp"
  />
</div>

    </div>
  </section>
</template>

<style scoped>
h1 {
  font-family: 'Integral CF', sans-serif;
}
</style>
<template>
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="bg-[#F0F0F0] rounded-[40px] px-6 py-10 md:px-16 md:py-16 flex flex-col items-center">
      
      <h2 class="text-center text-[32px] md:text-[48px] font-black uppercase tracking-tighter mb-8 md:mb-16 leading-tight">
        Browse by dress style
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        
        <div class="relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
          <span class="absolute top-6 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10">Casual</span>
          <NuxtImg 
            src="/img/frame-1.png" 
            width="400" 
            height="289"
            alt="Man wearing casual t-shirt and jeans"
            format="webp"
            loading="lazy"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <div class="md:col-span-2 relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
          <span class="absolute top-6 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10">Formal</span>
          <NuxtImg 
            src="/img/frame-2.png" 
            width="800" 
            height="289"
            alt="Man in a formal business suit"
            format="webp"
            loading="lazy"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <div class="md:col-span-2 relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
          <span class="absolute top-6 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10">Party</span>
          <NuxtImg 
            src="/img/frame-3.png" 
            width="800" 
            height="289"
            alt="Woman in a sparkling party dress"
            format="webp"
            loading="lazy"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <div class="relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
          <span class="absolute top-6 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10">Gym</span>
          <NuxtImg 
            src="/img/frame-4.png" 
            width="400" 
            height="289"
            alt="Man in athletic tank top holding"
            format="webp"
            loading="lazy"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

      </div>
    </div>
  </section>
</template>
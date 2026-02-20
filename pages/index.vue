<template>
  <div>
    <TheHero />
    <BrandsBar />

    <div class="max-w-7xl mx-auto px-4 py-8 md:py-12">
      
      <section class="mb-12 md:mb-20"> 
        <h2 class="text-[32px] md:text-4xl font-black text-center mb-8 md:mb-10 uppercase tracking-tighter">
          New Arrivals
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          <ProductCard v-for="product in data?.newArrivals" :key="product.id" :product="product" />
        </div>
        <div class="flex justify-center mt-8 md:mt-12 border-b pb-12 md:pb-16">
          <BaseButton variant="white" class="w-full md:w-[218px]">
            View All
          </BaseButton>
        </div>
      </section>

      <section class="mb-12 md:mb-20">
        <h2 class="text-[32px] md:text-4xl font-black text-center mb-8 md:mb-10 uppercase tracking-tighter">
          Top Selling
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          <ProductCard v-for="product in data?.topSelling" :key="product.id" :product="product" />
        </div>
        <div class="flex justify-center mt-8 md:mt-12">
          <BaseButton variant="white" class="w-full md:w-[218px]">
            View All
          </BaseButton>
        </div>
      </section>

      <div>
        <DressStyle />
        <Testimonials :reviews="allReviews" class="mt-12 md:mt-20" />
      </div>

    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/products')
const { data: reviewsData } = await useFetch('/api/reviews')

const allReviews = computed(() => {
  if (!reviewsData.value) return []
  
  return Object.values(reviewsData.value).flat()
})
</script>
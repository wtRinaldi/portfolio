<template>
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="product in products">
        <ProductCard :product="product"/>
      </div>
      <div v-for="(image, index) in images" :key="image.id">
        <div class="m-12">
          <NuxtImg provider="unsplash"
                   :src="image.urls.small"
                   :alt="image.alt_description"
                   :loading="(index > 2) ? 'lazy' : 'eager'"
                   width="640"
                   height="480"
                   sizes="sm:255px md:320px lg:480px"
                   class="h-64 object-cover"
                   quality="60"
                   format="webp"
                   preload
          />
        </div>
      </div>
    </div>
</template>
<script setup>
  useHead({
    title: 'Nuxt Shop | Products',
    meta: [{
      name: 'description',
      content: 'Nuxt Shop Products'
    }]
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  const { data: images } = await useFetch('https://api.unsplash.com/photos?query=products&client_id=OTfLDBVmthQNQp7qW8R8ERB-z3sNaz03pDxSpBNFCQI')


</script>

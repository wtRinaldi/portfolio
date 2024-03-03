<template>
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="product in products">
        <ProductCard :product="product"/>
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

  definePageMeta({
    layout: 'products'
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<template>
  <Head>
    <Title>Nuxt Shop | Product Details</Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <NuxtLayout name="default">
    <ProductDetails :product />
  </NuxtLayout>
</template>

<script setup>
 const { id } = useRoute().params
 const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)

 if (!product.value) {
   throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true })
 }

</script>
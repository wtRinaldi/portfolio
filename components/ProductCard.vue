<template>
  <div class="card product-card text-center flex flex-col w-[90vw] sm:w-[400px]">
    <div class="flex justify-center pt-4 flex-1">
      <NuxtImg :src="product.image"
               :alt="product.description"
               loading="lazy"
               width="368"
               height="256"
               sizes="256px"
               class="h-64 object-scale-down"
               quality="60"
               format="webp"
               placeholder />
    </div>
    <div>
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
.product-card {
  height: 500px;
}

.product-image {
  object-fit: scale-down;
  max-height: 300px;
  max-width: 300px;
}

</style>
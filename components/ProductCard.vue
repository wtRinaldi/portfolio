<template>
  <div class="card product-card text-center flex flex-col w-[90vw] sm:w-[400px]">
    <div class="flex justify-center pt-4 flex-1">
      <NuxtImg c :src="product.image" alt="product image" class="product-image" loading="lazy" placeholder/>
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
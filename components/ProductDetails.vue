<template>
  <div class="card">
    <div class="flex flex-col md:flex-row">
      <div class="p-7">
        <NuxtImg :src="product.image" alt="product image" class="mx-auto product-image" preload placeholder />
      </div>
      <div class="p-7 md:w-3/5">
        <div>
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Price - ${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
          <p class="mb-7">{{ product.description }}</p>
        </div>
        <div class="flex justify-end">
          <button class="btn flex items-center">
            <NuxtIcon name="shopping-cart" class="text-xl mr-2 mb-0 mt-0.5"/>
            <span class="text-lg">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])

</script>

<style scoped>

.product-image {
  object-fit: scale-down;
  height: 100%;
  width: 100%;
}

</style>

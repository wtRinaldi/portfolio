<template>
    <div class="card product-card text-center selectable-card">
      <div class="flex justify-center pt-4 flex-1">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
  .product-card {
    height: 300px;
    width: 300px;
  }

  .selectable-card {
        @apply shadow hover:shadow-lg transition-shadow ease-in-out duration-500
    }
  
  
  </style>
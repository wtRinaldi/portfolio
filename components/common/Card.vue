<template>
    <div class="card product-card text-center selectable-card">
        <slot />
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
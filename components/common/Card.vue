<template>
    <div class="card text-center selectable-card">
        <slot />
    </div>
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>

  .selectable-card {
        @apply shadow hover:shadow-lg transition-shadow ease-in-out duration-500
    }
  
  
  </style>
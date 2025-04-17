<template>
    <div class="card selectable-card">
        <slot />
    </div>
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
    .card {
        @apply rounded-md bg-white shadow
    }
    .selectable-card {
        @apply shadow hover:shadow-lg transition-shadow ease-in-out duration-500
    }
  
  
  </style>
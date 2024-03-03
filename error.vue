<template>
  <div class="mt-8 max-w-md mx-auto flex flex-col items-center card p-12 h-[500px] justify-around">
      <p class="text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="text-7xl font-thin text-gray-500">Ooops</p>
      <p class="text-2xl">{{ error.message }}</p>
      <button class="btn text-lg" @click="handleClearError">Return to Home Page</button>
  </div>
</template>

<script setup>
defineProps(['error']);
const handleClearError = () => clearError({ redirect: '/' });
</script>

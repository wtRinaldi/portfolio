<template>
  <NuxtIcon :name class="flex justify-center items-center h-10 w-10 text-2xl bg-secondary-light rounded-full text-white" />
</template>
<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
})
</script>

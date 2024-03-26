<template>
  <NuxtIcon :name class="h-12 w-12 px-3 pt-2 pb-3 text-3xl bg-ternary-light rounded-full flex text-white" />
</template>
<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
})
</script>

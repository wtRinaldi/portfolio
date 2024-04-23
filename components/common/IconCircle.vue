<template>
  <Icon :name class="flex justify-center items-center p-2 h-10 w-10 bg-secondary-light rounded-full text-white" />
</template>
<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
})
</script>

<template>
    <NuxtLink :to class="flex" :target="newTab ? '_blank' : ''">
      <button class="flex items-center py-3 px-6 bg-secondary-light rounded-full text-white shadow-xl">
        <NuxtIcon :name="icon" class="mr-3 text-2xl -mb-1" />
        {{ label }}
      </button>
    </NuxtLink>
</template>
<script setup>
defineProps({
  icon: {
    type: String,
    required: false
  },
  to: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: true
  },
  newTab: {
    type: Boolean,
    default: false
  }
})
</script>

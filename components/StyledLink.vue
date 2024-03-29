<template>
    <NuxtLink :to :target="newTab ? '_blank' : ''" class="flex items-center" :class="color">
      <NuxtIcon v-if="icon" :name="icon" class="mt-1.5 mr-1 text-2xl" :class="color" />
      <span class="text-lg lg:text-xl">{{ label }}</span>
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
  },
  color: {
    type: String,
    required: false
  }
})
</script>

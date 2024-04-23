<template>
    <NuxtLink :to :target="newTab ? '_blank' : ''" class="flex items-center" :class="color">
      <Icon v-if="icon" :name="icon" class="mr-1 text-2xl" :class="color" />
      <span class="text-base lg:text-lg pt-1 lg:pt-0 font-medium">{{ label }}</span>
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

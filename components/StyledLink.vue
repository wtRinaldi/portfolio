<template>
    <NuxtLink :to :target="newTab ? '_blank' : ''" class="flex" :class="color">
      <NuxtIcon v-if="icon" :name="icon" class="mr-3 text-3xl -mb-1 my-auto" :class="color" />
      <span class="text-xl">{{ label }}</span>
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

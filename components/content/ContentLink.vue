<template>
  <span>
    <NuxtLink :to class="inline-flex text-link hover:underline">
      <slot />
    </NuxtLink>
  </span>
</template>
<script setup>
defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>
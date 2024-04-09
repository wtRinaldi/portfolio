<template>
  <ul class="list-disc ml-6">
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

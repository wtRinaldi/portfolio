<template>
  <select v-model="selectedOption">
<!--    <option v-for="option in options" key="option.value" value="option.value">-->
<!--      {{ option.name }}-->
<!--    </option>-->
    <slot />
  </select>
</template>

<script setup>
const selectedOption = defineModel()

</script>

<style scoped>

</style>
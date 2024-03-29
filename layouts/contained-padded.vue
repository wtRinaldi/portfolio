<template>
  <Navigation />
  <div class="container mx-auto view-height px-6 mb-12">
    <slot />
  </div>
</template>
<style scoped>
.view-height {
  min-height: calc(100vh - 3.6rem)
}

</style>
<script setup lang="ts">
</script>
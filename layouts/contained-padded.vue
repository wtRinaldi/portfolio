<template>
  <LayoutNavigation />
  <div class="container mx-auto view-height px-6 mb-28 pt-14">
    <slot />
  </div>
  <LayoutFooter />
</template>
<style scoped>
.view-height {
  min-height: calc(100vh - 3.6rem)
}
</style>
<script setup>
</script>
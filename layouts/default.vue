<template>
  <LayoutNavigation />
  <div class="container mx-auto view-height mb-12 pt-20 md:pt-28">
    <slot />
  </div>
</template>
<style scoped>
.view-height {
  min-height: calc(100vh - 3.6rem)
}

</style>
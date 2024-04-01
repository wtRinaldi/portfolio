<template>
  <LayoutNavigation />
  <div class="container mx-auto view-height">
    <slot />
  </div>
  <LayoutFooter />
</template>
<style scoped>
.view-height {
  min-height: calc(100vh - 3.6rem)
}

</style>
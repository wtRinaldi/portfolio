<template>
  <LayoutNavigation />
  <div class="container mx-auto view-height pt-14">
    <slot />
  </div>
</template>
<style scoped>
.view-height {
  min-height: calc(100vh - 3.6rem)
}

</style>
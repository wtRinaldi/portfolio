<template>
  <Navigation />
  <div class="container mx-auto bg-white view-height pt-6 px-6">
    <slot />
  </div>
</template>
<style scoped>
.view-height {
  height: calc(100vh - 3.6rem)
}

</style>
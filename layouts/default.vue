<template>
  <Navigation />
  <div class="container mx-auto bg-white view-height">
    <slot />
  </div>
</template>
<style scoped>
.view-height {
  height: calc(100vh - 3.6rem)
}

</style>
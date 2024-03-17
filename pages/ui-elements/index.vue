<template>
  <div class="snap-y snap-mandatory overflow-scroll no-scrollbar view-height">
    <div class="bg-sky-400 page-height snap-center flex justify-center items-center">
      <ElementsEmailSubscribeCard class="snap-center" />
    </div>
    <div class="bg-emerald-300 page-height snap-center"></div>
    <div class="bg-orange-400 page-height snap-center"></div>
    <div class="bg-gray-900 page-height snap-center"></div>
  </div>
</template>

<script setup>
useHead({
  title: 'William Rinaldi | Mini Interfaces',
  meta: [{
    name: 'description',
    content: 'ui-elements user interfaces'
  }]
})

definePageMeta({
  layout: 'scroll'
})

</script>

<style scoped>
.view-height {
  height: calc(100vh - 3.5rem)
}

.page-height {
  height: calc(100% - 56px);
  height: -o-calc(100% - 56px); /* opera */
  height: -webkit-calc(100% - 56px); /* google, safari */
  height: -moz-calc(100% - 56px); /* firefox */
}

</style>


<template>
  <NuxtLayout name="scroll">
    <div class="snap-y snap-mandatory overflow-scroll no-scrollbar view-height">
      <div class="bg-sky-400 h-full snap-center flex justify-center items-center">
        <ElementsEmailSubscribeCard class="snap-center" />
      </div>
      <div class="bg-emerald-300 h-full snap-center"></div>
      <div class="bg-orange-400 h-full snap-center"></div>
      <div class="bg-gray-900 h-full snap-center"></div>
    </div>
  </NuxtLayout>
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

</style>


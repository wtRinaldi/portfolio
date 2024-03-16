<template>
<!--  <div class="flex flex-col justify-center w-full snap-y snap-mandatory overflow-scroll">-->
<!--    <ElementsEmailSubscribeCard class="snap-center" />-->
<!--    <ElementsEmailSubscribeCard class="snap-center" />-->
<!--  </div>-->
  <div class="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
    <div class="bg-sky-400 h-screen snap-center">
          <ElementsEmailSubscribeCard class="snap-center" />
    </div>
    <div class="bg-emerald-300 h-screen snap-center"></div>
    <div class="bg-orange-400 h-screen snap-center"></div>
    <div class="bg-gray-900 h-screen snap-center"></div>
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


</script>
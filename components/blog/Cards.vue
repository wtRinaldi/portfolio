<template>
    <CommonCard v-for="article in cards" class="pr-0 py-0 mb-8 md:mb-12">
      <NuxtLink :to="article._path">
        <div class="flex">
          <div class="flex flex-1 flex-col p-4">
            <h1 class="font-bold text-lg lg:text-xl mb-2 text-primary-light">{{ article.title }}</h1>
            <p class="text-secondary-light">{{ article.description }}</p>
          </div>
          <div class="image-container flex-1 rounded-r-md max-w-[200px]">
            <NuxtImg 
              :src="article.img"
              style="height: 150px; width: 100%;"
              class=""
              format="webp"
              alt="logo"
              loading="eager" />
          </div>
        </div>
      </NuxtLink>
    </CommonCard>
  </template>
  
  <script setup>
    defineProps({
  cards: {
    type: Array,
    required: true
  },
})
  </script>

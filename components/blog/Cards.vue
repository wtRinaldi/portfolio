<template>
    <CommonCard v-for="article in cards" class="pr-0 py-0 mb-8 md:mb-12">
      <NuxtLink :to="article._path">
        <div class="flex">
          <div class="flex flex-1 flex-col p-4">
            <h1 class="font-bold text-lg lg:text-xl mb-2 text-primary-light">{{ article.title }}</h1>
            <p class="text-secondary-light">{{ article.description }}</p>
          </div>
          <div class="image-container flex-1 rounded-r-md">
            <NuxtImg 
              :src="article.img"
              class="full-cover"
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
  
  <style scoped>
  .image-container {
  width: 200px;
  height: 150px; /* or any height you want */
  position: relative;
  overflow: hidden;
}

.full-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;    /* Or try 'fill' if you want full stretch */
  object-position: center;
}
  
  </style>
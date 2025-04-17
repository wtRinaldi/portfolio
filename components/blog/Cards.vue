<template>
  <CommonCard v-for="article in cards" class="mb-8 md:mb-12">
    <NuxtLink :to="article._path">
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col p-4 flex-1 md:text-center">
          <h1 class="font-bold mb-2">{{ article.title }}</h1>
          <p class="text">{{ article.description }}</p>
        </div>
        <div class="image-container">
          <NuxtImg 
            :src="article.img"
            class="card-img"
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
  @apply w-full md:w-[300px] md:h-[169px] aspect-[16/9] md:aspect-auto overflow-hidden rounded-b-md md:rounded-r-md md:rounded-b-none;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto items-stretch">
    <CommonCard
      v-for="(article, index) in cards"
      :key="article._path"
      class="h-full transition-all duration-500 hover:shadow-2xl border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group"
      :style="{ transitionDelay: `${index * 100}ms` }"
    >
      <NuxtLink :to="article._path" class="h-full">
        <div class="relative flex flex-col bg-white dark:bg-gray-900 h-full">
          <!-- Image Section -->
          <div class="image-container relative overflow-hidden">
            <NuxtImg
              :src="article.img"
              class="card-img transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-1"
              format="webp"
              :alt="article.title"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500"
            ></div>
          </div>

          <!-- Badge -->
          <span
            class="category-badge absolute left-4 px-3 py-1 text-xs font-semibold text-white bg-blue-600 dark:bg-blue-500 rounded-full shadow-md transform -translate-y-1/2 z-10"
          >
            {{ article.type }}
          </span>

          <!-- Content Area -->
          <div
            class="p-6 flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-8 w-full flex-1"
          >
            <h1
              class="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight"
            >
              {{ article.title }}
            </h1>
            <p
              class="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4 line-clamp-3"
            >
              {{ article.description }}
            </p>
            <div
              class="flex justify-end mt-auto text-blue-500 dark:text-blue-400 font-semibold group-hover:underline transition-all duration-300"
            >
              <span>Read More</span>
              <svg
                class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </NuxtLink>
    </CommonCard>
  </div>
</template>

<script setup>
defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.image-container {
  @apply w-full h-[200px] md:h-[125px] aspect-[16/9] overflow-hidden;
}

.card-img {
  @apply w-full h-full object-contain;
}

.category-badge {
  top: calc(200px);
  @apply md:top-[125px];
}

/* Optional subtle glow effect on hover */
.group:hover {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
}
</style>

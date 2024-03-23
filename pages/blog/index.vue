<template>
  <NuxtLayout name="contained">
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="card max-w-3xl mx-auto p-5">
        <NuxtLink :to="article._path">
          <div class="flex justify-between">
            <div class="flex flex-col justify-between pr-12">
              <h1 class="font-bold text-lg lg:text-xl mb-2">{{ article.title }}</h1>
              <p class="text-secondary-light font-thin">{{ article.description }}</p>
            </div>
            <div class="flex flex-col justify-between">
              <div class="text-sm font-semibold text-gray-500 flex justify-end">
                <NuxtIcon name="code" class="text-xl mr-1" />
                <span>Code</span>
              </div>
              <p class="text-sm font-semibold text-gray-500 self-end">{{ article.date }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </ContentList>
  </NuxtLayout>
</template>
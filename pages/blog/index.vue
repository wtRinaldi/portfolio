<template>
  <NuxtLayout name="contained">
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="card max-w-3xl mx-auto">
        <NuxtLink :to="article._path">
          <div class="flex flex-col">
            <h2 class="font-bold lg:text-xl">{{ article.title }}</h2>
            <p class="text-secondary-light">{{ article.description }}</p>
            <p class="self-end">{{ article.date }}</p>
          </div>
        </NuxtLink>
      </div>
    </ContentList>
  </NuxtLayout>
</template>
<template>
  <NuxtLayout name="contained">
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="card max-w-3xl mx-auto">
        <NuxtLink :to="article._path">
          <h2 class="font-bold lg:text-xl">{{ article.title }}</h2>
          <p class="text-secondary-light">{{ article.description }}</p>
          <p>{{ article.date }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </NuxtLayout>
</template>
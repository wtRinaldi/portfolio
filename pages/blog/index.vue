<template>
  <NuxtLayout name="contained">
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="card">
        <NuxtLink :to="article._path">
          <h2 class="font-bold text-3xl">{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          {{ article }}
        </NuxtLink>
      </div>
    </ContentList>
  </NuxtLayout>
</template>
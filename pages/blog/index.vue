<template>
  <NuxtLayout name="contained-padded">
    <div class="max-w-3xl mx-auto pb-12">
      <h1 class="text-4xl md:text-7xl font-black py-6 lg:py-11">musings of a fe dev</h1>
      <h2 class="text-secondary-light font-semibold">Topics in front end code, philosophies, soft skills, company culture and life.</h2>
    </div>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="card selectable-card max-w-3xl mx-auto p-5 mb-6">
        <NuxtLink :to="article._path">
          <div class="flex justify-between">
            <div class="flex flex-col justify-between pr-12">
              <h1 class="font-bold text-lg lg:text-xl mb-2 text-primary-light">{{ article.title }}</h1>
              <p class="text-secondary-light">{{ article.description }}</p>
            </div>
            <div class="flex flex-col justify-between items-end">
              <div class="flex text-white rounded-full text-sm font-semibold bg-secondary-light pt-0.5 px-2">
                <NuxtIcon :name="article.type" class="text-xl mr-1.5" />
                <span>{{ getArticleLabel(article.type) }}</span>
              </div>
              <p class="text-sm font-semibold text-gray-500 mr-1">{{ article.date }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </ContentList>
  </NuxtLayout>
</template>

<script setup>
const query = { path: '/blog', sort: [{ date: -1 }] }

function getArticleLabel (type) {
  if (type === 'soft-skills') {
    return 'Soft Skills'
  } else {
    return type
  }

}

</script>
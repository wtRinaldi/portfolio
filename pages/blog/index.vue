<template>
  <NuxtLayout name="contained-padded">
    <div class="max-w-3xl mx-auto">
      <div class="mb-8">
        <h1 class="page-header">musings of a fe dev</h1>
        <h2 class="text-secondary-light font-semibold">Topics in front end code, philosophies, soft skills, company culture and life.</h2>
      </div>

      <ContentList :query="query" v-slot="{ list }">
        <BlogCards v-if="list.length" :cards="list" />
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup>

definePageMeta({
  documentDriven: false
})
let sortDateBy = ref(-1)
const query = ref({ path: '/blog', sort: [{ date: sortDateBy }]})

</script>
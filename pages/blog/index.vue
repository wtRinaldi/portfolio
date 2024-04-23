<template>
  <NuxtLayout name="contained-padded">
    <div class="max-w-3xl mx-auto pb-12">
      <h1 class="text-4xl md:text-7xl font-black py-6 lg:py-11">musings of a fe dev</h1>
      <h2 class="text-secondary-light font-semibold">Topics in front end code, philosophies, soft skills, company culture and life.</h2>
    <div class="py-6">
      <div class="mb-2">
        <label for="filterType" class="mb-2">Filter By Type</label>
      </div>
      <CommonSelect id="filterType" v-model="selectedOption">
        <option :value="undefined">All</option>
        <option value="code">Code</option>
        <option value="soft skills">Soft Skills</option>
        <option value="culture">Culture</option>
        <option value="architecture">Architecture</option>
      </CommonSelect>
      <NuxtIcon name="sort" class="transition-all ease-in-out duration-500 text-2xl" :class="[isDescendingDateOrder ? 'rotate-x-0' : 'rotate-x-180']" @click="toggleSortOrder" />
    </div>
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
                <span class="text-nowrap">{{ article.type }}</span>
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
const selectedOption = ref(undefined)
let sortDateBy = ref(-1)
const query = ref({ path: '/blog', sort: [{ date: sortDateBy }], where: [{ type: selectedOption }]})
const isDescendingDateOrder = computed(() => {
  return sortDateBy.value === -1
})
function toggleSortOrder() {
  sortDateBy.value = isDescendingDateOrder.value ? 1 : -1
}

</script>

<style scoped>
.rotate-x-180 {
  transform: rotateX(180deg) !important;
}

.rotate-x-0 {
  transform: rotateX(0) !important;
}
</style>
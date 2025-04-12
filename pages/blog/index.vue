<template>
  <NuxtLayout name="contained-padded">
    <div class="max-w-3xl mx-auto">
      <div class="mb-8">
        <h1 class="page-header">musings of a fe dev</h1>
        <h2 class="text-secondary-light font-semibold">Topics in front end code, philosophies, soft skills, company culture and life.</h2>
      </div>
      <div class="pt-6 flex justify-end items-center mb-3 mr-2">
        <div class="mr-4">
          <label for="filterType" class="mb-2">Type: </label>
          <CommonSelect id="filterType" v-model="selectedOption">
            <option :value="undefined">All</option>
            <option value="code">Code</option>
            <option value="soft skills">Soft Skills</option>
            <option value="culture">Culture</option>
            <option value="frameworks">Frameworks</option>
          </CommonSelect>
        </div>

        <Icon v-show="isDescendingDateOrder" class="text-3xl text-primary-light" name="mdi:sort-calendar-ascending" @click="toggleSortOrder" tabindex="0" />
        <Icon v-show="!isDescendingDateOrder" class="text-3xl text-primary-light" name="mdi:sort-calendar-descending" @click="toggleSortOrder" tabindex="0" />
      </div>
      <ContentList :query="query" v-slot="{ list }">
        <div v-for="article in list" :key="article._path" class="card selectable-card max-w-3xl p-5 mb-6">
          <NuxtLink :to="article._path">
            <div class="flex justify-between min-h-20">
              <div class="flex flex-col justify-between pr-12">
                <h1 class="font-bold text-lg lg:text-xl mb-2 text-primary-light">{{ article.title }}</h1>
                <p class="text-secondary-light">{{ article.description }}</p>
              </div>
              <div class="flex flex-col justify-between mt-1 items-end">
                <div class="flex text-white rounded-full text-sm font-semibold bg-secondary-light px-2 py-1">
                  <Icon :name="getIconName(article.type)" class="text-xl mr-1.5" />
                  <span class="text-nowrap">{{ article.type }}</span>
                </div>
                <p class="text-sm font-semibold text-gray-500 mr-1">{{ article.date }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
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

function getIconName(type) {
  switch (type) {
    case 'frameworks': return 'material-symbols:computer-outline'
    case 'code': return 'mdi:code-tags'
    case 'culture': return 'mdi:crowd'
    case 'soft skills': return 'material-symbols:cognition-outline'
    case 'life': return 'material-symbols:sentiment-satisfied-outline-rounded'
  }
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
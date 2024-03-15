<template>
  <div>
    <div v-for="image in images" :key="image.id">
      <div class="m-12">
        <NuxtImg provider="unsplash"
                 :src="image.urls.small"
                 :alt="image.title"
                 :loading="image.loading ? image.loading : 'lazy'"
                 width="640"
                 height="480"
                 sizes="sm:255px md:320px lg:480px"
                 class="max-w-120 h-64 object-cover"
                 quality="60"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'William Rinaldi | Home',
  meta: [{
    name: 'description',
    content: 'Senior Front End Developer'
  }]
})

// const { data } = useFetch('/api/currency/EUR%2CUSD%2CCAD')
const { imageKey } = useRuntimeConfig()

const { data: images } = await useFetch('https://api.unsplash.com/photos?query=products&client_id=OTfLDBVmthQNQp7qW8R8ERB-z3sNaz03pDxSpBNFCQI', {

})



</script>
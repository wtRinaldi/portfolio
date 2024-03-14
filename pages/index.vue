<template>
  <div>
    <div v-for="image in images" :key="image.id">
      <div class="m-12">
        {{ image.urls.small }}
        <NuxtImg provider="unsplash" :src="image.urls.small" />
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

const { data: images } = await useFetch('https://api.unsplash.com/photos?query=test&client_id=OTfLDBVmthQNQp7qW8R8ERB-z3sNaz03pDxSpBNFCQI')

// const { data: image } = await useFetch('api/images')


</script>
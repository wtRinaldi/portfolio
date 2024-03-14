<template>
  <div>
    <div>{{ image }}</div>
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

const { data: image } = await useFetch('https://api.unsplash.com/photos?query=test&client_id=OTfLDBVmthQNQp7qW8R8ERB-z3sNaz03pDxSpBNFCQI')

// const { data: image } = await useFetch('api/images')


</script>
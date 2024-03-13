<template>
  <div>{{ data }} test nuxt img</div>
</template>

<script setup>
useHead({
  title: 'William Rinaldi | Home',
  meta: [{
    name: 'description',
    content: 'Senior Front End Developer'
  }]
})

const { data } = useFetch('/api/currency/EUR%2CUSD%2CCAD')

</script>
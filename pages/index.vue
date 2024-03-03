<template>
  <div>{{ data }}</div>
</template>

<script setup>
// const { data } = await useFetch('/api/about?store=Nuxt Store', {
//   method: 'post',
//   body: { name: 'William' }
// })

const { data } = useFetch('/api/currency/EUR%2CUSD%2CCAD')

</script>
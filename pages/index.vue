<template>
  <NuxtLayout name="contained-padded">
    <Hero class="mb-20"/>
    <LazyTechnicalProficiencies />
  </NuxtLayout>
</template>

<script setup>

definePageMeta({
  documentDriven: false
})

useHead({
  title: 'William Rinaldi | Home',
  meta: [{
    name: 'description',
    content: 'Senior Front End Developer'
  }]
})

</script>
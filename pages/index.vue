<template>
  <NuxtLayout name="contained-padded">
    <Hero class="mb-12"/>
    <TechnicalProficiencies />
  </NuxtLayout>
</template>

<script setup>

useHead({
  title: 'William Rinaldi | Home',
  meta: [{
    name: 'description',
    content: 'Senior Front End Developer'
  }]
})

</script>
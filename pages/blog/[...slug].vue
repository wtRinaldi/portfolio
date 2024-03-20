<template>
  <NuxtLayout name="contained">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <h1 class="text-lg lg:text-5xl font-bold uppercase">{{ doc.title }}</h1>
    </ContentDoc>
  </NuxtLayout>
</template>
<script setup>
const { slug } = useRoute().params
</script>
<template>
  <NuxtLayout name="contained-padded">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <article class="max-w-2xl mx-auto">
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
<script setup>
const { slug } = useRoute().params
</script>
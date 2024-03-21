<template>
  <NuxtLayout name="contained">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <article class="overflow-scroll">
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
<script setup>
const { slug } = useRoute().params
</script>
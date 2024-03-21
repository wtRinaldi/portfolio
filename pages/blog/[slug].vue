<template>
  <NuxtLayout name="contained">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <article>
        <ContentRenderer :value="doc">

        </ContentRenderer>
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
<script setup>
const { slug } = useRoute().params
</script>
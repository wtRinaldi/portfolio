<template>
  <NuxtLayout name="contained">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <article class="overflow-x-auto">
        <ContentRenderer :value="doc">

        </ContentRenderer>
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
<script setup>
const { slug } = useRoute().params
</script>

<style>
[data-content-id] {
  h1 {
    @apply text-xl font-bold text-primary-light
  }
  subheader {
    @apply pt-6
  }
  p {
    @apply pt-3
  }
  pre {
    @apply bg-primary-light text-white rounded-xl p-12 mb-8 mt-6
  }
}

</style>
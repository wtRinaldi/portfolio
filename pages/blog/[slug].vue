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
[data-content-id] h1 {
    @apply text-xl font-bold text-primary-light
}
[data-content-id] subheader {
    @apply pt-6
}

[data-content-id] p {
    @apply pt-3
}

[data-content-id] pre {
  @apply rounded-xl pl-1 py-4 mb-8 mt-6 overflow-x-auto
}


</style>
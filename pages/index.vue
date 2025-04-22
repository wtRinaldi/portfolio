<template>
  <NuxtLayout name="default">
    <Hero class="mb-16"/>
    <Suspense>
      <template #default>
        <LazyTechnicalProficiencies class="mb-16" />
      </template>
      <template #fallback>
        <div class="text-center text-sm text-gray-500">Loading skills...</div>
      </template>
    </Suspense>
    <LazyEndorsements />
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
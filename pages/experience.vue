<template>
  <NuxtLayout name="contained-padded">
    <ContentDoc :path="`/experience`" v-slot="{ doc }">
      <article class="max-w-xl mx-auto relative">
        <div class="flex justify-between">
          <h1 class="page-header">experience</h1>
          <LazyDownloadResume class="md:mt-3" />
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
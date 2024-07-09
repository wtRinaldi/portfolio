<template>
  <NuxtLayout name="contained-padded">
    <ContentDoc :path="`/experience`" v-slot="{ doc }">
      <article class="max-w-xl mx-auto">
        <h1 class="page-header">experience</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
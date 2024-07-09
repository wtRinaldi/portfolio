<template>
  <NuxtLayout name="contained-padded">
    <ContentDoc :path="`/about`" v-slot="{ doc }">
      <article class="max-w-xl mx-auto">
        <h1 class="page-header">about me</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
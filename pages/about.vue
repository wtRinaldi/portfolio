<template>
  <NuxtLayout name="contained-padded">
    <ContentDoc :path="`/about`" v-slot="{ doc }">
      <article class="max-w-xl mx-auto">
        <h1 class="text-4xl md:text-7xl font-black py-6 lg:py-11">about me</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </NuxtLayout>
</template>
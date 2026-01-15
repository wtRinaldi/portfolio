<template>
  <div class="container mx-auto view-height px-6 mb-28 pt-28 md:pt-40">
    <slot />
  </div>

</template>
<style scoped>
.view-height {
  min-height: calc(100vh - 3.6rem)
}
</style>
<script setup>
  useHead({
    link: [
      { rel: 'preload', as: 'font', href: '/fonts/roboto-v47-latin-400.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', as: 'font', href: '/fonts/roboto-v47-latin-700.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
      { rel: 'preload', as: 'image', href: '/gdp_hero.svg' }
    ]
  })
</script>
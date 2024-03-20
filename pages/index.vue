<template>
  <NuxtLayout name="default">
    <div class="view-height lg:h-full min-h-160">
      <div class="h-1/2 bg-white">
        <div class="max-w-6xl mx-auto px-10 pt-12 md:pt-16 lg:pt-24 w-full flex flex-col">
          <img src="@/assets/icons/william-rinaldi.svg" alt="William Rinaldi logo" class="mb-6 md:mb-12 w-5/6 mx-auto" />
          <img src="@/assets/icons/coeur-dalene-idaho.svg" alt="William Rinaldi logo" class="mb-16 w-1/2 md:w-1/3 mx-auto" />
          <img src="@/assets/icons/front-end-developer.svg" alt="William Rinaldi logo" class="pt-6 mb-16 w-3/4 md:w-1/2 mx-auto" />
        </div>
      </div>
      <div class="h-1/2 lg:h-120 bg-black text-white p-8 flex justify-center items-center">
        <p class="container font-bold max-w-xl mx-auto text-md sm:text-lg md:text-xl leading-[2.5rem] md:leading-loose">
          Experienced front-end developer specializing in crafting immersive user experiences.
          With seven years of hands-on experience, I excel in sophisticated data-heavy applications, and thrive on translating complex designs into clean code.
          Proficient in Vue.js, experienced in React and Angular.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="bg-slate-600 text-white">
        <figure class="p-8">
          <figcaption class="text-2xl pb-4">Areas of expertise:</figcaption>
          <ul class="list-disc pl-5">
            <li>Vue / Nuxt</li>
            <li>Front End Architecture</li>
            <li>Page Speed Optimization</li>
            <li>Responsive Mobile First Development</li>
            <li>Tailwind CSS</li>
            <li>Design Systems managed via Storybook UI</li>
          </ul>
        </figure>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup>

useHead({
  title: 'William Rinaldi | Home',
  meta: [{
    name: 'description',
    content: 'Senior Front End Developer'
  }]
})




</script>

<style scoped>
.view-height {
  height: calc(100vh - 3.5rem)
}
</style>
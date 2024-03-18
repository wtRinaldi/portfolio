<template>
  <div class="h-dvh lg:h-full min-h-160">
    <section id="hero">
      <div class="max-w-6xl mx-auto px-10 pt-12 md:pt-16 lg:pt-24 w-full">
        <img src="@/assets/icons/william-rinaldi.svg" alt="William Rinaldi logo" class="mb-6 md:mb-12 w-5/6 mx-auto" />
        <img src="@/assets/icons/coeur-dalene-idaho.svg" alt="William Rinaldi logo" class="mb-16 w-1/2 md:w-1/3 mx-auto" />
        <img src="@/assets/icons/front-end-developer.svg" alt="William Rinaldi logo" class="mb-16 w-3/4 md:w-1/2 mx-auto" />
      </div>
    </section>

    <section id="description" class="px-6 text-center mb-40">
      <p class="max-w-xl mx-auto mb-10 text-md sm:text-lg md:text-xl text-slate-600 leading-[2.5rem] md:leading-loose">
        Experienced front-end developer specializing in crafting immersive user experiences.
        With seven years of hands-on experience, I excel in sophisticated data-heavy applications, and thrive on translating complex designs into clean code.
        Proficient in Vue.js, experienced in React and Angular.
      </p>
    </section>
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

</template>

<script setup>

useHead({
  title: 'William Rinaldi | Home',
  meta: [{
    name: 'description',
    content: 'Senior Front End Developer'
  }]
})

// const { data } = useFetch('/api/currency/EUR%2CUSD%2CCAD')




</script>
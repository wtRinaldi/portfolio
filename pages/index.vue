<template>
  <section id="hero">
    <div class="max-w-6xl mx-auto text-center px-10 pt-12 md:pt-16 lg:pt-24">
      <div>
        <img src="@/assets/icons/wr.svg" alt="William Rinaldi logo" class="mb-12 md:px-24" />
      </div>
      <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mx-auto font-bold mb-12 md:mb-24">Front End Developer</h3>
    </div>
  </section>

  <section id="description" class="px-6 text-center mb-40">
    <p class="max-w-xl mx-auto mb-10 text-lg sm:text-xl md:text-2xl text-slate-600 leading-[2.5rem] md:leading-loose">
      Experienced front-end developer specializing in crafting immersive user experiences.
      With seven years of hands-on experience, I excel in sophisticated data-heavy applications, and thrive on translating complex designs into clean code.
      Proficient in Vue.js, experienced in React and Angular.
    </p>
  </section>

  <div class="card">
    <div class="bg-orange-400 text-white">
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
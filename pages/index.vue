<template>
  <div>
    <div class="card">
      <div class="bg-sky-500 text-white">
        <div class="border-b-2 p-8">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest text-center">WILLIAM RINALDI</h1>
          <p class="text-xl pt-4 pl-1 text-center">Senior Front End Developer</p>
        </div>
        <figure class="p-8">
          <figcaption class="text-2xl pb-4">Areas of expertise:</figcaption>
          <ul class="list-disc pl-5">
            <li>Vue / Nuxt ( + React & Angular experience )</li>
            <li>Front End Architecture</li>
            <li>Page Speed Optimization</li>
            <li>Responsive Mobile First Development</li>
            <li>Tailwind CSS</li>
            <li>Design Systems managed via Storybook UI</li>
          </ul>
        </figure>
      </div>
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
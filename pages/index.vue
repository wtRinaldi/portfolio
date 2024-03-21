<template>
  <NuxtLayout name="default" >
    <div class="flex flex-col view-height">
      <div class="container mx-auto flex flex-col justify-center items-center flex-1 bg-white min-h-60 lg:min-h-160 p-12">
        <img src="@/assets/icons/william-rinaldi.svg" alt="William Rinaldi logo" class="mb-6 md:mb-12 w-5/6 mx-auto" />
        <img src="@/assets/icons/coeur-dalene-idaho.svg" alt="William Rinaldi logo" class="mb-16 w-1/2 md:w-1/3 mx-auto" />
        <img src="@/assets/icons/front-end-developer.svg" alt="William Rinaldi logo" class="mb-16 w-3/4 md:w-1/2 mx-auto" />
      </div>

      <div class="flex justify-center items-center flex-1 lg:h-120 bg-primary-light text-white p-8 ">
        <p class="container font-bold max-w-xl text-md sm:text-lg md:text-xl leading-[2.5rem] md:leading-loose text-center">
          Experienced front-end developer specializing in crafting immersive user experiences.
          With seven years of hands-on experience, I excel in sophisticated data-heavy applications, and thrive on translating complex designs into clean code.
          Experienced in React and Angular.  Proficient in Vue & Nuxt.
        </p>
      </div>
    </div>
    <div class="container mx-auto flex bg-orange-400 h-120 block">test</div>

<!--    <div class="card">-->
<!--      <div class="bg-slate-600 text-white">-->
<!--        <figure class="p-8">-->
<!--          <figcaption class="text-2xl pb-4">Areas of expertise:</figcaption>-->
<!--          <ul class="list-disc pl-5">-->
<!--            <li>Vue / Nuxt</li>-->
<!--            <li>Front End Architecture</li>-->
<!--            <li>Page Speed Optimization</li>-->
<!--            <li>Responsive Mobile First Development</li>-->
<!--            <li>Tailwind CSS</li>-->
<!--            <li>Design Systems managed via Storybook UI</li>-->
<!--          </ul>-->
<!--        </figure>-->
<!--      </div>-->
<!--    </div>-->
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
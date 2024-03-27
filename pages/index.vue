<template>
  <NuxtLayout class="flex flex-col">
      <div class="flex flex-col md:min-h-120 mb-12">
        <div class="relative font-black text-white tracking-widest">
          <div class="absolute pl-[5%] pt-[5%] left-0 top-0 text-white">
            <h1 class="hero-text-large">william rinaldi</h1>
            <h2 class="hero-text-small pl-3">couer d'alene, idaho</h2>
          </div>
          <div class="absolute pr-[5%] pb-[5%] bottom-0 right-0 hero-text-small">front end developer</div>
          <img src="/mountain.jpg" height="1920" width="1281" class="w-full"/>
        </div>

        <div class="flex justify-center items-center flex-1 lg:h-120 bg-primary-light text-white p-8 mt-12">
          <p class="font-thin max-w-xl text-md sm:text-lg md:text-xl lg:text-2xl leading-loose text-center">
            Experienced front-end developer specializing in crafting immersive user experiences.
            With seven years of hands-on experience, I excel in sophisticated data-heavy applications, and thrive on translating complex designs into clean code.
            Experienced in React and Angular.  Proficient in Vue & Nuxt.
          </p>
        </div>

      </div>
      <div class="flex flex-col md:flex-row justify-around items-center max-w-2xl my-36 mx-auto gap-8">
        <StyledLink icon="linkedin" to="https://www.linkedin.com/in/wtrinaldi/" label="LinkedIn" color="text-primary-light" new-tab />
        <StyledLink icon="github" to="https://github.com/wtRinaldi" label="GitHub" color="text-primary-light" new-tab />
      </div>
      <div class="px-2">
        <Summary />
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
  min-height: calc(100vh - 3.5rem)
}

.hero-text-large {
  font-size: clamp(1.5rem, 4vw + 1rem, 6rem);
}

.hero-text-small {
  font-size: clamp(1rem, 2vw + 1rem, 4rem);
}

</style>
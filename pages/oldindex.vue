<template>
  <NuxtLayout name="contained-padded">
      <div class="flex flex-col md:min-h-120 gap-6">
        <div class="relative tracking-widest mt-6 uppercase text-primary-light shadow rounded-3xl">
          <NuxtImg src="/mountains_1920x1281.jpg"
                   class="w-full max-h-160 opacity-25 rounded-3xl"
                   alt="mountains"
                   loading="eager"
                   width="1920"
                   height="1280"
                   sizes="sm:255px md:320px lg:480px xl:1280px"
                   quality="50"
                   format="webp"
                   preload
          />

          <div class="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto
            w-2/3 max-w-120 h-fit flex flex-col items-center border border-secondary-light text-primary-light hero-box-padding">
            <h1 class="hero-text-large mb-3 font-bold">william rinaldi</h1>
            <h2 class="hero-text-small mb-1">couer d'alene, idaho</h2>
            <h2 class="hero-text-small">front end developer</h2>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row shadow rounded-3xl">
          <div class="flex justify-center items-center min-h-96 bg-primary-light text-white p-8 rounded-3xl w-full">
            <p class="font-light max-w-xl text-lg md:text-xl xl:text-2xl text-center leading-relaxed !lg:leading-[36px]">
              Seasoned front-end developer with a focus on creating immersive user interactions.
              With seven years of hands-on experience, I specialize in developing sophisticated, data-driven applications, and excel in translating intricate designs into engaging and high-performing user experiences.
              Proficient in Vue/Nuxt and React.
            </p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center self-center max-w-xl my-20 gap-8">
          <StyledLink icon="mdi:linkedin" to="https://www.linkedin.com/in/wtrinaldi/" label="LinkedIn" color="text-primary-light" new-tab />
          <div class="text-lg font-medium">williamtrinaldi@gmail.com</div>
          <StyledLink icon="mdi:github" to="https://github.com/wtRinaldi" label="GitHub" color="text-primary-light" new-tab />
        </div>

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
.hero-text-large {
  font-size: clamp(1.65rem, 2vw, 2.8rem);
}

.hero-text-small {
  font-size: clamp(1rem, 2vw, 1.35rem);
}

.hero-text-large {
  @apply text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
}

.hero-text-small {
  @apply text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
}

.hero-box-padding {
  @apply py-6 sm:py-10 md:py-12 lg:py-14 xl:py-16
}

</style>
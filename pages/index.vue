<template>
  <NuxtLayout class="flex flex-col gap-8">
      <div class="flex flex-col md:min-h-120 mb-12 px-6">
        <div class="relative font-thin tracking-widest mt-12 uppercase text-primary-light">
          <NuxtImg src="/photo-1486520299386-6d106b22014b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Nzg2MDR8MHwxfGFsbHx8fHx8fHx8fDE3MTE1MDc5ODV8&ixlib=rb-4.0.3&q=80&w=1080"
                   class="w-full max-h-160 opacity-30 rounded-3xl"
                   alt="mountains"
                   loading="eager"
                   width="1920"
                   height="1280"
                   sizes="sm:255px md:320px lg:480px xl:1280px"
                   quality="50"
                   format="webp"
                   preload
          />
          <div class="absolute pl-[5%] pt-[3%] lg:pt-[2%] left-0 top-0">
            <h1 class="hero-text-large">william rinaldi</h1>
            <h2 class="hero-text-small pl-2">couer d'alene, idaho</h2>
          </div>
          <div class="absolute pr-[5%] pb-[4%] bottom-0 right-0 hero-text-small">front end developer</div>
        </div>

        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex justify-center items-center flex-1 min-h-96 bg-primary-light text-white p-8 mt-12 rounded-3xl">
            <p class="font-thin max-w-xl text-md sm:text-lg md:text-xl lg:text-2xl leading-loose text-center">
              Experienced front-end developer specializing in crafting immersive user experiences.
              With seven years of hands-on experience, I excel in sophisticated data-heavy applications, and thrive on translating complex designs into clean code.
              Experienced in React and Angular.  Proficient in Vue & Nuxt.
            </p>
          </div>
          <div class="flex flex-col justify-center items-center flex-1 min-h-96 bg-quinary rounded-3xl md:mt-12 gap-8">
            <StyledLink icon="linkedin" to="https://www.linkedin.com/in/wtrinaldi/" label="LinkedIn" color="text-primary-light" new-tab />
            <StyledLink icon="github" to="https://github.com/wtRinaldi" label="GitHub" color="text-primary-light" new-tab />
          </div>
        </div>

        <div class="px-2 mt-12">
          <Summary />
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

const {data: images} = await useFetch('https://api.unsplash.com/photos/kKvQJ6rK6S4?client_id=OTfLDBVmthQNQp7qW8R8ERB-z3sNaz03pDxSpBNFCQI')
// https://images.unsplash.com/photo-1486520299386-6d106b22014b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Nzg2MDR8MHwxfGFsbHx8fHx8fHx8fDE3MTE1MDc5ODV8&ixlib=rb-4.0.3&q=80&w=1080

//           <img src="/mountain.jpg" alt="mountains" height="1920" width="1281" class="w-full"/>
</script>

<style scoped>
.hero-text-large {
  font-size: clamp(1.5rem, 4vw + 1rem, 6rem);
}

.hero-text-small {
  font-size: clamp(1rem, 1vw + 1rem, 4rem);
}

</style>
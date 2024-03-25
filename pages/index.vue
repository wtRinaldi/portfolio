<template>
  <NuxtLayout name="default"class="flex flex-col">
      <div class="flex flex-col view-height md:min-h-120 mb-12">
        <div class="container mx-auto flex flex-col justify-center items-center flex-1 bg-white min-h-60 lg:min-h-160 p-12">
          <img src="@/assets/icons/william-rinaldi.svg" alt="William Rinaldi logo" class="mb-6 md:mb-12 w-5/6 mx-auto" />
          <img src="@/assets/icons/coeur-dalene-idaho.svg" alt="William Rinaldi logo" class="mb-16 w-1/2 md:w-1/3 mx-auto" />
          <img src="@/assets/icons/front-end-developer.svg" alt="William Rinaldi logo" class="mb-16 w-3/4 md:w-1/2 mx-auto" />
        </div>

        <div class="flex justify-center items-center flex-1 lg:h-120 bg-primary-light text-white p-8 ">
          <p class="container font-bold max-w-xl text-md sm:text-lg md:text-xl lg:text-2xl leading-loose text-center">
            Experienced front-end developer specializing in crafting immersive user experiences.
            With seven years of hands-on experience, I excel in sophisticated data-heavy applications, and thrive on translating complex designs into clean code.
            Experienced in React and Angular.  Proficient in Vue & Nuxt.
          </p>
        </div>

      </div>
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-around max-w-2xl my-20 gap-8">
        <ButtonLink icon="email-contact" label="williamtrinaldi@gmail.com" />
        <ButtonLink icon="linkedin" to="https://www.linkedin.com/in/wtrinaldi/" label="LinkedIn" new-tab />
        <ButtonLink icon="github" to="https://github.com/wtRinaldi" label="GitHub" new-tab />
      </div>
      <div class="container mx-auto">
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
</style>
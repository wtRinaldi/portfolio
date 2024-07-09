<template>
  <section class="flex flex-col md:flex-row mt-8 md:mt-20 justify-center">
    <div class="flex justify-center mb-6">
      <DotLottieVue style="height: 300px; width: 300px" autoplay loop speed="0.9" src="/animation.lottie"/>
    </div>

    <div class="flex flex-col justify-center items-center xl:pl-0 order-1 md:order-2">
      <h1 class="font-bold text-6xl mb-8">Hi!</h1>
      <h2 class="font-medium text-2xl mb-5">I'm William Rinaldi</h2>
      <p class="text-center max-w-md">An experienced front-end developer, proficient in HTML, CSS, JavaScript, Tailwind, React, and Vue. Strong collaborator focused on creating responsive, user-friendly, and performant web applications.</p>
    </div>

<!--        <NuxtImg src="/mountains_1920x1281.jpg"-->
<!--                 class=" mb-24 md:mb-0 order-2 md:order-1 mx-auto"-->
<!--                 alt="mountains"-->
<!--                 loading="eager"-->
<!--                 width="1920"-->
<!--                 height="1280"-->
<!--                 sizes="sm:255px md:320px lg:480px xl:1280px"-->
<!--                 quality="80"-->
<!--                 format="webp"-->
<!--                 preload-->
<!--        />-->
  </section>
</template>

<script setup>

import {DotLottieVue} from "@lottiefiles/dotlottie-vue";
</script>

<style scoped>

</style>
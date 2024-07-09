<template>
  <section class="flex flex-col md:flex-row mt-12 md:mt-20 justify-center">
<!--    <NuxtImg src="/mountains_1920x1281.jpg"-->
<!--             class="h-64 w-64 md:h-96 md:w-96 max-h-160 max-w-96 mb-24 md:mb-0 rounded-full order-2 md:order-1 mx-auto"-->
<!--             alt="mountains"-->
<!--             loading="eager"-->
<!--             width="1920"-->
<!--             height="1280"-->
<!--             sizes="sm:255px md:320px lg:480px xl:1280px"-->
<!--             quality="80"-->
<!--             format="webp"-->
<!--             preload-->
<!--    />-->
    <div class="flex justify-center">
      <DotLottieVue style="height: 300px; width: 300px" autoplay loop speed="0.9" src="/animation.lottie"/>
    </div>

    <div class="flex flex-col justify-center items-center xl:pl-0 order-1 md:order-2 max-w-xl">
      <h1 class="font-bold text-6xl mb-6">Hi!</h1>
      <h2 class="font-medium text-2xl mb-4">I'm William Rinaldi</h2>
      <p class="mb-24 md:mb-0 text-center">An experienced in front-end developer. Skilled in HTML, CSS, JavaScript, React, and Vue. Strong collaborator focused on creating responsive, performant, user-friendly, and secure web applications.</p>
    </div>
  </section>
</template>

<script setup>

import {DotLottieVue} from "@lottiefiles/dotlottie-vue";
</script>

<style scoped>

</style>
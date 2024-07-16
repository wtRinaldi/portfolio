<template>
  <Vue3Lottie @click="toggle" ref="lightDarkToggle" style="height: 50px; width: 100px" :auto-play="false" :loop="false" :speed="2" :animation-data="nightToggle" />
</template>

<script setup>
import nightToggle from "public/nightToggle.json";
import {Vue3Lottie} from "vue3-lottie";
import {useDarkMode} from "~/composables/useDarkMode.js";

const lightDarkToggle = ref(null)
const [isDarkMode, toggleDarkMode] = useDarkMode()

function toggle() {
  toggleDarkMode()
  if (isDarkMode()) {
    lightDarkToggle.value.playSegments([0,240], true)
  } else {
    lightDarkToggle.value.playSegments([240,481], true)
  }
}
</script>
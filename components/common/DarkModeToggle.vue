<template>
  <button>hi</button>
</template>

<script setup>
import nightToggle from "public/nightToggle.json";
import {useDarkMode} from "~/composables/useDarkMode.js";

const lightDarkToggle = ref(null)
const [isDarkMode, toggleDarkMode] = useDarkMode()

function toggle() {
  // toggleDarkMode()
  // if (isDarkMode()) {
  //   lightDarkToggle.value.playSegments([0,240], true)
  // } else {
  //   lightDarkToggle.value.playSegments([240,481], true)
  // }
}
</script>
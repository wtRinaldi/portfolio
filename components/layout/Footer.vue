<template>
  <footer class="flex justify-center bg-primary-light/90 text-white border-t border-white/10 shadow-inner">
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 max-w-xl py-10 px-6 text-center">
      <StyledLink
        icon="mdi:linkedin"
        to="https://www.linkedin.com/in/wtrinaldi/"
        label="LinkedIn"
        color="text-white"
        new-tab
        class="hover:text-accent transition-colors duration-200"
      />

      <div
        @click="copyEmail"
        class="text-lg font-medium tracking-wide cursor-pointer hover:text-accent transition-colors duration-200"
        title="Click to copy"
      >
        {{ email }}
      </div>

      <StyledLink
        icon="mdi:github"
        to="https://github.com/wtRinaldi"
        label="GitHub"
        color="text-white"
        new-tab
        class="hover:text-accent transition-colors duration-200"
      />
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('williamtrinaldi@gmail.com')

function copyEmail() {
  navigator.clipboard.writeText(email.value).then(() => {
    alert('Email copied to clipboard!')
  }).catch(err => {
    console.error('Failed to copy email:', err)
  })
}
</script>

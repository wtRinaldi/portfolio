<template>
  <header class="w-full fixed top-0 left-0 bg-white lg:hidden transition-transform ease-in-out duration-500 z-40"
       :class="[isShowMenu ? 'translate-y-14' : '-translate-y-72']">
    <nav class="mt-6 mx-12 mb-10">
      <ul class="flex flex-col gap-2 list-none">
        <li>
          <NuxtLink to="/about" @click="closeMenu" class="mobile-navigation-option">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience" @click="closeMenu" class="mobile-navigation-option">Experience</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" @click="closeMenu" class="mobile-navigation-option">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <header class="w-full shadow-sm bg-white fixed z-50 border-b-2">
    <nav class="container mx-auto p-4 w-full">
      <div class="hidden lg:flex justify-between">
        <NuxtLink to="/" class="font-bold" @click="closeMenu">William Rinaldi</NuxtLink>
        <ul class="flex gap-4 list-none">
          <li>
            <NuxtLink to="/about" @click="closeMenu" class="desktop-navigation-option">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/experience" @click="closeMenu" class="desktop-navigation-option">Experience</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" @click="closeMenu" class="desktop-navigation-option">Blog</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex justify-between lg:hidden">
        <NuxtLink to="/" class="font-bold" @click="closeMenu">WR</NuxtLink>
        <button @click="toggleMenu" aria-label="navigation menu">
          <Icon name="mdi:menu" class="text-2xl" />
        </button>
      </div>
    </nav>
  </header>

</template>
<script setup>
const isShowMenu = ref(false)

function toggleMenu() {
  isShowMenu.value = !isShowMenu.value
}

function closeMenu() {
  isShowMenu.value = false
}

</script>

<style scoped>
.router-link-exact-active {
  @apply text-active
}

.mobile-navigation-option {
  @apply flex items-center h-16 hover:bg-quinary rounded-full pl-6 hover:transition-colors duration-500 ease-in-out
}

.desktop-navigation-option {
  @apply hover:bg-quinary rounded-full px-3 py-2 hover:transition-colors duration-500 ease-in-out
}

</style>

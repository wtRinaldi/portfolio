<template>
  <div class="w-full absolute left-0 bg-white lg:hidden transition-transform ease-in-out duration-500 z-40"
       :class="[isShowMenu ? 'translate-y-14' : '-translate-y-72']">
    <nav class="mt-6 mx-12 mb-10">
      <ul class="flex flex-col gap-2">
        <li>
          <NuxtLink to="/about" @click="closeMenu" class="mobile-navigation-option">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience" @click="closeMenu" class="mobile-navigation-option">Experience</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" @click="closeMenu" class="mobile-navigation-option">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/ui-elements" @click="closeMenu" class="mobile-navigation-option">UI Elements</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
  <header class="w-full shadow-sm bg-white sticky z-50 border-b-2">
    <nav class="container mx-auto p-4 w-full">
      <div class="hidden lg:flex justify-between">
        <NuxtLink to="/" class="font-bold" @click="closeMenu">William Rinaldi</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/about" @click="closeMenu">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/experience" @click="closeMenu">Experience</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" @click="closeMenu">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ui-elements" @click="closeMenu">UI Elements</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex justify-between lg:hidden">
        <NuxtLink to="/" class="font-bold" @click="closeMenu">WR</NuxtLink>
        <button @click="toggleMenu" aria-label="navigation menu">
          <NuxtIcon name="hamburger" class="text-xl" />
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
  @apply flex items-center h-16 hover:bg-quinary rounded-full pl-6;
}

</style>

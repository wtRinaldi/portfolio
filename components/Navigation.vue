<template>
  <header class="w-full shadow-sm bg-white">
    <nav class="container mx-auto p-4">
      <div class="hidden lg:flex justify-between">
        <NuxtLink to="/" class="font-bold">William Rinaldi</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/ui-elements">UI Elements</NuxtLink></li>
        </ul>
      </div>
      <div class="flex justify-between lg:hidden">
        <NuxtLink to="/" class="font-bold">WR</NuxtLink>
        <button>
          <NuxtIcon name="hamburger" class="text-xl" @click="toggleMenu"/>
        </button>
      </div>
      <div v-if="isShowMenu" class="w-full overflow-hidden relative left-0 top-4 pb-5 bg-white lg:hidden">
        <ul class="flex flex-col gap-4">
          <li><NuxtLink to="/about" @click="closeMenu">About</NuxtLink></li>
          <li><NuxtLink to="/products" @click="closeMenu">Products</NuxtLink></li>
          <li><NuxtLink to="/ui-elements" @click="closeMenu">UI Elements</NuxtLink></li>
        </ul>
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

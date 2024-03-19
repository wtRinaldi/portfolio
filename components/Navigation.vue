<template>
  <div class="w-full absolute left-0 bg-white lg:hidden transition-transform z-40"
       :class="[isShowMenu ? 'translate-y-14' : '-translate-y-60']">
    <nav class="mt-6 ml-12 mb-12">
      <ul class="flex flex-col gap-4">
        <li class="py-3">
          <NuxtLink to="/about" @click="closeMenu" class="flex">About</NuxtLink>
        </li>
        <li class="py-3">
          <NuxtLink to="/products" @click="closeMenu" class="flex">Products</NuxtLink>
        </li>
        <li class="py-3">
          <NuxtLink to="/ui-elements" @click="closeMenu" class="flex">UI Elements</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
  <header class="w-full shadow-sm bg-white sticky z-50">
    <nav class="container mx-auto p-4 w-full">
      <div class="hidden lg:flex justify-between">
        <NuxtLink to="/" class="font-bold" @click="closeMenu">William Rinaldi</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/about" @click="closeMenu">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" @click="closeMenu">Products</NuxtLink>
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
  color: blue;
}
</style>

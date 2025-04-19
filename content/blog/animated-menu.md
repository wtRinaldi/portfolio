---
date: '3.20.2024'
description: 'Simple animated menu dropdown with Vue & Tailwind CSS'
type: 'code'
img: '/menu.svg'
---

::ContentH1
Simple Animated Hamburger Menu with Tailwind
::

::SubTitle
If you're seeking the cleanest method to create an animated hamburger menu, this is it
::

::Paragraph
After reviewing several other approaches, I found this to be the most straightforward method. 
You can test the behavior of this menu on mobiles views of this site.
::

::Paragraph
We can set both a dynamic and static class on the menu container element, dynamically setting the position of the menu.
The variable 'isShowMenu' determines which translate class is applied, moving the menu into or out of position depending on value.
'transition-transform' applies the Tailwind animation CSS and 'ease-in-out' and 'duration' class adds a smooth animation to the menu.
::

::ContentH2
Vue template
::

::CodeBlock
```html
<div class="w-full 
          fixed 
          left-0 
          bg-white
          lg:hidden 
          transition-transform 
          ease-in-out 
          duration-500 
          z-40"
   :class="[isShowMenu ? 'translate-y-14' : '-translate-y-72']">
    <nav class="mt-6 ml-12 mb-12">
      <ul class="flex flex-col gap-4">
         <!-- add list items here -->
      </ul>
    </nav>
</div>
```
::

::CodeDescription
Template for menu
::

::ContentH2
Vue script
::

::CodeBlock
```js
const isShowMenu = ref(false)

function toggleMenu() {
  isShowMenu.value = !isShowMenu.value
}

function closeMenu() {
  isShowMenu.value = false
}
```
::

::CodeDescription
Script for menu
::

::CodeDescription
Template for menu
::

::ContentH2
Vue script
::

::CodeBlock
```html
    <transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
        <div
          v-if="isShowMenu"
          class="absolute w-full h-screen bg-black/60 z-10"
          @click="toggleMenu"
        ></div>
    </transition>
```
::

::CodeDescription
Animated underlay to gray out screen and close menu
::

::CodeBlock
```vue
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
    <transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
        <div
          v-if="isShowMenu"
          class="absolute w-full h-screen bg-black/60 z-10"
          @click="toggleMenu"
        ></div>
    </transition>
  </header>
  <header class="w-full shadow-sm bg-white fixed z-50 border-b-2">
    <nav class="container mx-auto p-4 w-full">
      <div class="hidden lg:flex">
        <ul class="flex gap-4 list-none items-center w-full">
          <li class="mr-auto">
            <NuxtLink to="/" class="desktop-navigation-option" @click="closeMenu">William Rinaldi</NuxtLink>
          </li>
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
        <NuxtLink to="/" class="font-bold desktop-navigation-option" @click="closeMenu">WR</NuxtLink>
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
  @apply bg-black text-white
}

.mobile-navigation-option {
  @apply flex items-center h-16 rounded-full pl-6 hover:transition-colors duration-1000 ease-in-out
}

.desktop-navigation-option {
  @apply hover:bg-gray-400 rounded-full px-3 py-2 hover:transition-colors hover:text-white duration-500 ease-in-out flex items-center
}

</style>

```
::

::CodeDescription
Complete navigation component
::


::Paragraph
That's it!  It's really easy.  Feel free to reach out to me with any questions on :LinkedinLink.
::




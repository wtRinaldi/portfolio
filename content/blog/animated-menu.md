---
date: '03.20.2024'
description: 'Super easy way of animating a hambuger menu in Vue with Tailwind CSS'

---

::MainTitle
Simple Animated Hamburger Menu with Tailwind
::

::SubTitle
If you're seeking the simplest method to create an animated hamburger menu, this is it.</h2>
::

::ContentParagraph
After reviewing several other approaches, I found this to be the most straightforward method. 
You can test the behavior of this menu on mobiles views of this site.
::

::ContentParagraph
We can set both a dynamic and static class on the menu container element, dynamically setting the position of the menu.
The variable 'isShowMenu' determines which translate class is applied, moving the menu into or out of position depending on value.
'transition-transform' applies the Tailwind animation CSS and 'ease-in-out' and 'duration' class adds a smooth animation to the menu.
::

::ContentH2
Template of Hamburger Menu
::

::CodeBlock
```html
<div class="w-full 
          absolute 
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

::ContentH2
Vue code used to set boolean
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




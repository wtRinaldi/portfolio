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

::Paragraph
That's it!  It's really easy.  Feel free to reach out to me with any questions on :LinkedinLink.
::




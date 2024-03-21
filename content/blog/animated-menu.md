---
date: 2024-03-20
description: 'Super easy way of animating a hambuger menu in Vue with Tailwind CSS'

---

<h1 class="text-xl font-bold text-primary-light">Simple Animated Hamburger Menu with Tailwind</h1>

<h2 class="pt-6 font-bold text-secondary-light">If you're seeking the simplest method to create an animated hamburger menu, this is it.</h2>

<p class="pt-6">After reviewing several other approaches, I found this to be the most straightforward method. You can test the behavior of this menu on mobiles views of this site.</p>


<p class="pt-6 pb-4">The wrapper div is positioned absolute with the transform and animation classes.  The variable 'isShowMenu' dynamically the position classes, moving the menu into or out of position depending on value.</p>


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


<p class="pt-6 pb-3">'isShowMenu' variable used to apply classes along with some functions to set the variable</p>

```js
const isShowMenu = ref(false)

function toggleMenu() {
  isShowMenu.value = !isShowMenu.value
}

function closeMenu() {
  isShowMenu.value = false
}
```

<style>
pre {
    overflow-x: auto;
}
</style>

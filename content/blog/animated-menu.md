---
date: 2024-03-20
description: 'Super easy way of animating a hambuger menu in Vue with Tailwind CSS'

---

# Simple Animated Hamburger Menu with Tailwind

::subheader
If you're seeking the simplest method to create an animated hamburger menu, this is it. 
::

After reviewing several other approaches, none were as straightforward and simple as this one. Additionally, you have the freedom to style it however you prefer.


The variable 'isShowMenu' dynamically applies classes. When true, the menu animates to one position, otherwise, it animates off the screen.

```
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
         <!-- list items go here -->
      </ul>
    </nav>
  </div>
```

'isShowMenu' variable used to apply classes along with some functions to set the variable
```vue
const isShowMenu = ref(false)

function toggleMenu() {
  isShowMenu.value = !isShowMenu.value
}

function closeMenu() {
  isShowMenu.value = false
}
```


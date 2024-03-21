---
date: 2024-03-20
description: 'Super easy way of animating a hambuger menu in Vue with Tailwind CSS'

---


# Simple Animated Hamburger Menu with Tailwind

```
  <div class="w-full absolute left-0 bg-white lg:hidden transition-transform ease-in-out duration-500 z-40"
       :class="[isShowMenu ? 'translate-y-14' : '-translate-y-72']">
    <nav class="mt-6 ml-12 mb-12">
      <ul class="flex flex-col gap-4">
        <li class="py-3">
          <NuxtLink to="/about" @click="closeMenu" class="flex">About</NuxtLink>
        </li>
        <li class="py-3">
          <NuxtLink to="/experience" @click="closeMenu" class="flex">Experience</NuxtLink>
        </li>
        <li class="py-3">
          <NuxtLink to="/blog" @click="closeMenu" class="flex">Blog</NuxtLink>
        </li>
        <li class="py-3">
          <NuxtLink to="/ui-elements" @click="closeMenu" class="flex">UI Elements</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
```


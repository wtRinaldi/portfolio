<template>
    <div class="flex flex-col md:flex-row bg-zinc-800 mx-6 rounded-2xl w-fit">
      <img src="assets/images/image.jpg"
           alt="sample image"
           class="object-cover rounded-xl h-72 md:h-64 md:rounded-l-xl
               md:rounded-r-none transform hover:scale-105 hover:rounded:xl duration-200 z-0">

      <div class="p-6 md:p-12">
        <h2 class="font-serif text-xl font-medium text-center text-white md:text-left">
          Get diet and fitness tips in your inbox
        </h2>
        <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
          Eat better and exercise better. Sign up for the Diet & Fitness newsletter.
        </p>
        <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
          <input type="text" placeholder="Enter your email address"
                 class="py-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600
                   placeholder:text-xs placeholder:text-center md:text-left md:placeholder:md:text-left focus:outline-none">
          <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">Subscribe</button>
        </div>
      </div>
    </div>
</template>
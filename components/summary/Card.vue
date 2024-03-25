<template>
  <div class="flex flex-col min-h-96 max-w-lg bg-quinary rounded-2xl hover:scale-105 transition-transform duration-500">
    <div class="flex justify-center items-end uppercase h-1/4">
      <slot name="header" />
    </div>
    <div class="p-8 mx-3 mb-3 rounded-b-xl bg-quinary text-xl h-3/4">
      <slot />
    </div>
  </div>
</template>
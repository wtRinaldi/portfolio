<template>
  <div class="flex flex-col min-h-96 min-w-96 max-w-lg border-2 rounded-2xl">
    <div class="flex flex-col justify-center items-center uppercase pt-6 h-36">
      <slot name="header" />
    </div>
    <div class="flex items-center px-8 mx-3 mb-3 rounded-b-xl bg-quinary text-xl flex-1">
      <slot />
    </div>
  </div>
</template>
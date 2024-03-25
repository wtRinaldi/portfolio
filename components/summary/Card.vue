<template>
  <div class="flex flex-col items-center justify-center min-h-120 bg-quinary rounded-2xl">
    <div class="flex my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
      <div class="p-8 mx-3 mt-3 rounded-t-xl bg-quinary">
        <div class="text-center uppercase">
          <slot name="header" />
        </div>
      </div>
    </div>
    <div class="p-8 mx-3 mb-3 rounded-b-xl bg-quinary">
      <slot />
    </div>
  </div>
</template>
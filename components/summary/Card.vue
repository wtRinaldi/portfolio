<template>
  <div class="flex flex-col min-h-80 border rounded-3xl shadow bg-white w-full max-w-120">
    <div class="flex flex-col justify-center items-center uppercase pt-8 pb-6 text-primary-light font-bold tracking-wide">
      <div class="flex w-full">
        <CommonIconCircle :name="icon" class="ml-6" />
        <div class="flex items-center text-xl  uppercase px-6 font-medium">{{ label }}</div>
      </div>
    </div>
    <div class="flex items-center px-8 mx-3 mb-3 rounded-b-xl bg-secondary-light text-white leading-relaxed text-xl flex-1 font-light">
      <slot />
    </div>
  </div>
</template>
<script setup>

defineProps({
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

</script>
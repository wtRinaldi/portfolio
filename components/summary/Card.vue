<template>
  <div class="flex flex-col min-h-64 rounded-3xl shadow bg-white w-full">
    <div class="flex flex-col justify-center items-center uppercase py-5 text-primary-light tracking-wide border-b">
      <div class="flex w-full">
        <CommonIconCircle :name="icon" class="ml-6" />
        <div class="flex items-center  uppercase pl-4 font-medium">{{ label }}</div>
      </div>
    </div>
    <div class="flex items-center px-8 mx-3 rounded-b-xl leading-relaxed flex-1">
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
<template>
  <div class="relative group mb-6 p-6 rounded-xl overflow-x-auto bg-primary-light">
    <!-- Raw code block slot -->
    <pre ref="codeBlock" class="whitespace-pre-wrap text-sm font-mono">
      <code><slot /></code>
    </pre>

    <!-- Copy button -->
    <button
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition bg-white text-black text-xs px-3 py-1 rounded shadow"
      @click="copyCode"
    >
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const codeBlock = ref(null)
const copied = ref(false)

const copyCode = async () => {
  const text = codeBlock.value?.innerText
  if (!text) return

  try {
    await navigator.clipboard.writeText(text.trim())
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>

<style scoped>
.group:hover button {
  opacity: 1;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

const messages = ref([])
const newMessage = ref('')
const editMessageId = ref(null)
const editMessageText = ref('')

const API_BASE = import.meta.env.VITE_API_BASE;

// Fetch all messages
const fetchHealth = async () => {
  try {
    const res = await fetch(`${API_BASE}/health`);
    const data = await res.json();
    messages.value = data;
  } catch (err) {
    console.error(err);
  }
}

// Submit a new message
const submitMessage = async () => {
  if (!newMessage.value) return
  try {
    await fetch(`${API_BASE}/health`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage.value })
    })
    newMessage.value = ''
    await fetchHealth()
  } catch (err) {
    console.error(err)
  }
}

// Delete a message
const deleteMessage = async (id) => {
  try {
    await fetch(`${API_BASE}/health/${id}`, { method: 'DELETE' })
    await fetchHealth()
  } catch (err) {
    console.error(err)
  }
}

// Save edited message
const saveEdit = async () => {
  if (!editMessageText.value) return
  try {
    await fetch(`${API_BASE}/health/${editMessageId.value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: editMessageText.value })
    })
    editMessageId.value = null
    editMessageText.value = ''
    await fetchHealth()
  } catch (err) {
    console.error(err)
  }
}

// Start editing a message
const startEdit = (msg) => {
  editMessageId.value = msg.id
  editMessageText.value = msg.message
}

onMounted(fetchHealth)
</script>

<template>
  <NuxtLayout name="contained-padded">
    <div class="max-w-xl mx-auto p-4">
      <h1 class="text-2xl font-bold text-center mb-6">Full Stack Test</h1>

      <!-- Form -->
      <div class="flex gap-2 mb-6">
        <input
          v-model="newMessage"
          placeholder="Type a new message"
          class="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="submitMessage"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>

      <h2 class="text-xl font-semibold mb-4">All Messages:</h2>
      <ul class="space-y-4">
        <li v-for="msg in messages" :key="msg.id" class="border border-gray-200 rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between">
          
          <!-- Editing state -->
          <div v-if="editMessageId === msg.id" class="flex flex-col md:flex-row md:items-center flex-1 gap-2">
            <input
              v-model="editMessageText"
              class="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div class="flex gap-2 mt-2 md:mt-0">
              <button @click="saveEdit" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Save</button>
              <button @click="editMessageId = null" class="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition">Cancel</button>
            </div>
          </div>

          <!-- Normal state -->
          <div v-else class="flex flex-col md:flex-row md:items-center md:justify-between flex-1 gap-2">
            <div class="flex gap-2 items-center flex-wrap">
              <span class="font-bold">{{ msg.id }}:</span>
              <span>{{ msg.message }}</span>
            </div>
            <div class="flex gap-2 mt-2 md:mt-0">
              <button @click="startEdit(msg)" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">Edit</button>
              <button @click="deleteMessage(msg.id)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
            </div>
          </div>

        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

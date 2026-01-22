<script setup>
import { ref, onMounted } from 'vue'

const messages = ref([])
const newMessage = ref('')
const editMessageId = ref(null)
const editMessageText = ref('')

// Fetch all messages
const fetchHealth = async () => {
  try {
    const res = await fetch('http://127.0.0.1:4000/health')
    const data = await res.json()
    messages.value = data
  } catch (err) {
    console.error(err)
  }
}

onMounted(fetchHealth)

// Submit a new message
const submitMessage = async () => {
  if (!newMessage.value) return
  try {
    await fetch('http://127.0.0.1:4000/health', {
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
    await fetch(`http://127.0.0.1:4000/health/${id}`, { method: 'DELETE' })
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

// Save edited message
const saveEdit = async () => {
  if (!editMessageText.value) return
  try {
    await fetch(`http://127.0.0.1:4000/health/${editMessageId.value}`, {
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
</script>

<template>
  <NuxtLayout name="contained-padded">
    <div class="container">
      <h1>Full Stack Test</h1>

      <div class="form">
        <input v-model="newMessage" placeholder="Type a new message" />
        <button @click="submitMessage" class="btn submit">Submit</button>
      </div>

      <h2>All Messages:</h2>
      <ul class="message-list">
        <li v-for="msg in messages" :key="msg.id" class="message-card">
          <div v-if="editMessageId === msg.id" class="message-content">
            <input v-model="editMessageText" class="edit-input" />
            <div class="message-actions">
              <button @click="saveEdit" class="btn save">Save</button>
              <button @click="editMessageId = null" class="btn cancel">Cancel</button>
            </div>
          </div>
          <div v-else class="message-content">
            <span class="message-id">{{ msg.id }}:</span>
            <span class="message-text">{{ msg.message }}</span>
            <div class="message-actions">
              <button @click="startEdit(msg)" class="btn edit">Edit</button>
              <button @click="deleteMessage(msg.id)" class="btn delete">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  transition: background 0.2s;
}

button:hover {
  opacity: 0.9;
}

.message-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.message-card {
  border: 1px solid #ddd;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.message-content {
  display: flex;
  flex: 1;
  align-items: center;
}

.message-id {
  font-weight: bold;
  margin-right: 0.5rem;
}

.message-text {
  flex: 1;
}

.message-actions {
  display: flex;
  gap: 0.3rem;
}

.edit-input {
  flex: 1;
  padding: 0.4rem;
  margin-right: 0.5rem;
  font-size: 0.9rem;
}

.btn.edit {
  background-color: #4caf50;
  color: white;
}

.btn.delete {
  background-color: #f44336;
  color: white;
}

.btn.save {
  background-color: #2196f3;
  color: white;
}

.btn.cancel {
  background-color: #999;
  color: white;
}

.btn.submit {
  background-color: #007bff;
  color: white;
}
</style>

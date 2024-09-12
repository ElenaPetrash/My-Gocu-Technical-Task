<script setup>
import { ref, onMounted } from 'vue'
import UsersList from '@/components/UsersList.vue'

const usuarios = ref([])

const fetchUsers = () => {
  fetch('http://localhost:4010/usuarios')
    .then((response) => {
      if (!response.ok) {
        throw new Error('error')
      }
      return response.json()
    })
    .then((data) => {
      usuarios.value = data
      console.log(data)
    })
    .catch((error) => {
      console.error('error', error)
    })
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <main>
    <h1>Users</h1>

    <UsersList :usuarios="usuarios" />
  </main>
</template>

<script setup>
defineProps({
  usuarios: {
    type: Array,
    default: []
  }
})

const yearInMs = 365.25 * 24 * 60 * 60 * 1000
const getAge = (birthDate) => Math.floor((new Date() - new Date(birthDate).getTime()) / yearInMs)
</script>

<template>
  <ul>
    <li v-for="user in usuarios" :key="user.id" >
      {{ user.nombre + user.apellido }}, {{ getAge(user.fechaNacimiento) }} años
    </li>
  </ul>
</template>



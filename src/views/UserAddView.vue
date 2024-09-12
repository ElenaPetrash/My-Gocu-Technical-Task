<script setup>
import FormAddUsers from '@/components/FormAddUsers.vue'
import { reactive } from 'vue'

const formValues = reactive({
  nombre: '',
  apellido: '',
  fechaDeNacimiento: ''
})
const errors = reactive({
  nombre: null,
  apellido: null,
  fechaDeNacimiento: null
})
const validateForm = () => {
  if (formValues.nombre === '') {
    errors.nombre = 'Username is required'
  } else {
    errors.nombre = null
  }
  if (formValues.apellido === '') {
    errors.apellido = 'Surname name is required'
  } else {
    errors.apellido = null
  }
  if (formValues.fechaDeNacimiento === '') {
    errors.fechaDeNacimiento = 'BirthDate is required'
  } else {
    errors.fechaDeNacimiento = null
  }

  return !Object.values(errors).some((error) => error)
}
const submitForm = () => {
  if (validateForm()) {
    console.log('Form submitted:', formValues)
    formValues.nombre = ''
    formValues.apellido = ''
    formValues.fechaDeNacimiento = ''
  } else {
    console.log('Validation errors:', errors)
  }
}
</script>

<template>
  <div>
    <h2>Add Users</h2>
    <FormAddUsers :formValues="formValues" :errors="errors" :submitForm="submitForm" />
  </div>
</template>

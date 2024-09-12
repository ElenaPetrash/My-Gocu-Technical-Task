<script setup>
defineProps({
  formValues: {
    type: Object,
    required: true
  },
  errors: {
    type: Object,
    required: true
  },
  submitForm: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre">User name</label>
        <input
          type="text"
          placeholder="nombre"
          id="nombre"
          v-model="formValues.nombre"
          :class="{ 'is-invalid': errors.nombre }"
        />
        <span v-if="errors.nombre" class="error">{{ errors.nombre }}</span>
      </div>

      <div>
        <label for="apellido">Last name</label>
        <input
          type="text"
          placeholder="apellido"
          id="apellido"
          v-model="formValues.apellido"
          :class="{ 'is-invalid': errors.apellido }"
        />
        <span v-if="errors.apellido" class="error">{{ errors.apellido }}</span>
      </div>

      <div>
        <label for="fecha-de-nacimiento">Date of Birth</label>
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          id="fechaDeNacimiento"
          v-model="formValues.fechaDeNacimiento"
          :class="{ 'is-invalid': errors.fechaDeNacimiento }"
        />
        <span v-if="errors.fechaDeNacimiento" class="error">{{ errors.fechaDeNacimiento }}</span>
      </div>

      <button type="submit">Add user</button>
    </form>
  </div>
</template>

<style>
.is-invalid {
  border: 1px solid red;
}

.error {
  color: red;
  font-size: 0.9em;
}
</style>

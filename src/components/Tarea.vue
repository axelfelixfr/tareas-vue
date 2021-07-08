<template>
  <div>
    <h3>
      {{ titulo }}<button @click="$emit('eliminarItem')">Eliminar</button>
      <!-- {{ titulo }}<button @click="mostrarDetalles(titulo)">Eliminar</button> -->
    </h3>
  </div>
</template>

<script>
import state from "../state.js";
export default {
  name: "Tarea",
  props: ["titulo"],
  methods: {
    mostrarDetalles(titulo) {
      state.guardarTarea(titulo);
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: $corporativo;
}
button {
  background-color: $alternativo;
}
</style>
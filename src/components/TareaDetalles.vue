<template>
  <div>
    <h1>Los detalles:</h1>
    <p>{{ detalles.tituloTarea }}</p>
  </div>
</template>

<script>
import state from "../state.js";
export default {
  name: "TareaDetalles",
  created() {
    this.detalles = state.state;
  },
  data() {
    return {
      detalles: "",
    };
  },
};
</script>

<style scoped>
div {
  position: fixed;
  width: 500px;
  height: 200px;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid black;
}
</style>
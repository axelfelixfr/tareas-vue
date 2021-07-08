<template>
  <div>
    <h1>Tareas</h1>
    <input type="text" v-model="nuevoItem" placeholder="Añadir item" />
    <input type="button" value="Agregar item" @click="agregarItem" /><br />
    <input
      type="search"
      placeholder="Buscar items por título"
      v-model="buscarItems"
    />
    <Tarea
      v-for="(item, $index) in itemsBuscados"
      :key="item.id"
      :titulo="item.title"
      @eliminarItem="eliminarItem($index)"
    >
    </Tarea>
    <!-- <TareaDetalles></TareaDetalles> -->
  </div>
</template>

<script>
import Tarea from "@/components/Tarea.vue";
// import TareaDetalles from "@/components/TareaDetalles.vue";
import todoService from "../services/todoService.js";
import { crudItemsMixin } from "../mixins/crudItems.js";
export default {
  name: "Tareas",
  components: {
    Tarea,
    // TareaDetalles
  },
  mixins: [crudItemsMixin],
  created() {
    /* Fetch 
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((respuesta) => respuesta.json())
      .then((datos) => (this.tareas = datos))
      .catch((error) => console.error(error));
      */
    todoService.get().then((items) => (this.items = items.data));
  },
};
</script>

<style>
</style>
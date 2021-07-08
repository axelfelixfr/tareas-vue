<template>
  <div>
    <h1>Posts</h1>
    <input type="text" v-model="nuevoItem" placeholder="Añadir item" />
    <input type="button" value="Agregar item" @click="agregarItem" /><br />
    <input
      type="search"
      placeholder="Buscar items por título"
      v-model="buscarItems"
    />
    <ul>
      <li
        v-for="(item, $index) in itemsBuscados"
        :key="item.id"
        @click="verPost(item.id)"
        @eliminarItem="eliminarItem($index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import postService from "../services/postService.js";
import { crudItemsMixin } from "../mixins/crudItems.js";
export default {
  name: "PostsList",
  mixins: [crudItemsMixin],
  created() {
    postService.get().then((items) => (this.items = items.data));
  },
  methods: {
    verPost(postId) {
      this.$router.push({
        name: "Post",
        params: {
          id: postId,
        },
      });
    },
  },
};
</script>

<style>
li {
  cursor: pointer;
}
</style>
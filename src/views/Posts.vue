<template>
  <div class="about">
    <h1>Post publicados</h1>
    <Posts></Posts>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
export default {
  name: "PostsView",
  components: {
    Posts,
  },
};
</script>
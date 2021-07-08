<template>
  <div>
    <Logo></Logo>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'Posts' }">Posts</router-link>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "Navegacion",
  components: {
    Logo,
  },
};
</script>

<style>
</style>
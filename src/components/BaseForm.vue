<template>
  <article>
    <h2>Suscríbete a mi lista de correo</h2>
    <form>
      <input type="email" placeholder="Correo electrónico" />
      <input type="submit" value="Suscribirse" />
    </form>
  </article>
</template>

<style scoped>
article * {
  box-sizing: border-box;
}

h2 {
  margin-bottom: 0;
}

article {
  border: 1px solid gray;
}

form {
  padding: 20px;
}

input {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
</style>
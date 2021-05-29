<template>
  <div class="home">
    <h1>Pajareando Chile</h1>
    <h3>Página sobre aves chilenas</h3>
    <router-link :to="{ name: 'Enciclopedia' }"
      >Enciclopedia de Aves de Chile</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

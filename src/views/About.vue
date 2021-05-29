<template>
  <div id="about">
    <h2>¿Qué es Pajareando Chile?</h2>
    <p>
      Pajareando Chile es un proyecto en desarrollo que espera convertirse en la
      primera aplicación destinada a la colección de fotografías de aves
      chilenas para fotografos profesionales y amateurs.
    </p>
    <p>
      Por el momento, puedes visitar nuestra
      <router-link :to="{ name: 'Enciclopedia' }"
        >Enciclopedia de Aves de Chile</router-link
      >
      donde podrás encontrar todas las especies presentes en el territorio
      Chileno, junto a información relevante sobre cada una y donde encontrarla.
    </p>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scoped>
#about {
  margin-left: 10%;
  margin-right: 10%;
  text-align: justify;
}
</style>
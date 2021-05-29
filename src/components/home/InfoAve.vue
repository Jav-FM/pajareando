<template>
  <div>
    <h3>Especie: {{ ave.name.spanish }}</h3>
    <img id="imgAve" :src="`${ave.images.main}`">
    <div id="infoAve">
    <img id="mapa" :src="`${ave.map.image}`" alt="mapaChile">
    <br>
    <p><b>Nombre en latin:</b> {{ave.name.latin}}</p>
    <p><b>Donde encontrarlo:</b> {{ave.map.title}}</p>
    <p><b>Información:</b> {{ave.iucn.description}}</p>
    <p>{{ave.didyouknow}}</p>
    <p><b>Habitat:</b> {{ave.habitat}}</p>
    <p><b>Tamaño:</b> {{ave.size}}</p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ave: {},
    };
  },
  props: ["especie"],
  created() {
    return fetch(`https://aves.ninjas.cl/api/birds/${this.especie}`)
      .then((response) => response.json())
      .then((json) => {
        this.ave = json;
      });
  },
};
</script>

<style scoped>
#infoAve {
  margin-left: 10%;
  margin-right: 10%;
  text-align: justify;
}

#mapa {
  width: 350px;
  height: auto;
  float: right;
  margin-left: 10px;
}

#imgAve {
  width: 250px;
  height: auto;
}
</style>
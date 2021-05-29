<template>
  <div id="enciclopedia">
    <h2>Enciclopedia de aves de Chile</h2>
    <ul>
      <li v-for="(ave, i) in aves" :key="i">
        <router-link :to="`infoave/${ave.uid}`"
          >{{ ave.name.spanish }} ({{ ave.name.latin }})</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Enciclopedia",
  data() {
    return {
      aves: [],
      nombres: [],
    };
  },
  methods: {
    // makingNamesArray() {
    //     let avesNames = [];
    //     for(let i=0; i == this.aves.lenght; i++) {
    //         avesNames.push(this.aves[i].name.spanish)
    //     };
    //     console.log(avesNames)
    //     this.nombres = avesNames;
    // }
  },
  created() {
    return fetch("https://aves.ninjas.cl/api/birds")
      .then((response) => response.json())
      .then((json) => {
        this.aves = json;
      });
    // .then(() =>
    // this.makingNamesArray())
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
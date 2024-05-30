<script setup>
import router from "@/router";

function rota() {
  router.push("/premio");
}
</script>

<script>
export default {
  name: "ListaPremios",
  data() {
    return {
      premios: null 
    };
  },
  mounted() {
    fetch('/premios.json')
      .then(response => response.json())
      .then(json => {
        this.premios = json.premios;
      })
      .catch(error => {
        console.error('Error fetching the JSON data:', error);
      });
  }
}
</script>

<template>
  <div class="container text-left mt-5">
    <h1>Prémios</h1>
  </div>
  <div id ="listaPremios">
  <div class="d-flex flex-column gap-4 mt-3">
    <div class="list" v-for="premio in premios" :key="premio.id" @click="rota">
      <div id="informacao">
        <h4>{{ premio.nome }}</h4>
        <p>Creditos: {{ premio.creditos }}</p> 
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  color: #f5f5f5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.container-fluid {
  border-radius: 1rem;
}
.list {
  text-align: left;
  text-indent: 1rem;
  background: rgba(245, 245, 245, 0.63);
  list-style-type: none;
  color: #1e1e1e;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 5rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 0.5rem;

}
#listaPremios{
    max-height: 27rem;
    overflow-y: auto;
}

#informacao {
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 0.5rem;
}
</style>
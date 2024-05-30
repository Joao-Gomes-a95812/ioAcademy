<script setup>
import Navbar from '@/components/Nav_Bar.vue'

const email = sessionStorage.getItem('email')
let trocas = JSON.parse(localStorage.getItem('Historico'))

let array = []

trocas.forEach((troca) => {
  if (troca.email == email) {
    troca.premio.forEach((premio, index) => {
      array.push({
        premio: premio,
        data: troca.data[index],
        pontosUsados: troca.pontosUsa[index]
      })
    })
  }
})
</script>

<script>
export default {
  name: 'Historico',
  components: { Navbar }
}
</script>

<template>
  <div class="container text-left mt-5">
    <h1>Historico</h1>
  </div>
  <div class="container-fluid mt-5 bg-white p-1 text-center" id="listaTrocas">
    <b-table striped hover class="table-striped" :items="array"></b-table>
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>

<style scoped>
.container-fluid {
  border-radius: 1rem;
}
h1 {
  font-size: 2.7rem;
  color: #010101;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#listaTrocas {
  max-height: 27rem;
  overflow-y: auto;
}
</style>

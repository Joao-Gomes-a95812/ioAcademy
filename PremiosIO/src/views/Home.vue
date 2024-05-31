<script setup>
import router from '@/router'
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-3'
import Navbar from '@/components/Nav_Bar.vue'

function rota() {
  router.push('/historico')
}
</script>

<script>
export default {
  name: 'Home',
  components: { Navbar },
  data: function () {
    return {
      idpremio: localStorage.getItem('idPremio'),
      premios: [],
      premioEscolhido: [],
      pontos: null,
      utilizadores: JSON.parse(localStorage.getItem('Utilizadores')),
      email: sessionStorage.getItem('email'),
      BCarousel,
      BCarouselSlide
    }
  },
  methods: {
    async getPremios() {
      try {
        const response = await fetch('/premios.json')
        if (!response.ok) {
          throw new Error('ERROR')
        }
        const json = await response.json()
        this.premios = json.premios
      } catch (error) {
        console.error('Error fetching the JSON data:', error)
      }
    },

    escolherPremio() {
      this.premioEscolhido = this.premios.find((premio) => premio.id == this.idpremio)
    },
    lista: function () {
      this.utilizadores.forEach((utilizador) => {
        if (utilizador.email == this.email) {
          this.pontos = utilizador.pontos
        }
      })
    }
  },
  mounted() {
    this.getPremios().then(() => {
      this.escolherPremio()
      this.lista()
    })
  }
}
</script>

<template>
  <div class="container pb-4">
    <h1>Os Teus Pontos:</h1>
    <h2>{{ pontos }}</h2>
  </div>
  <b-card class="mb-4">
    <b-card-header id="header" class="text-center header"> <h3>Destaques</h3> </b-card-header>

    <b-card-body class="text-center">
      <h4 class="name">{{ premioEscolhido.nome }}</h4>
      <b-img
        :src="premioEscolhido.imagem"
        alt="Imagem do perfil"
        rounded="circle"
        class="image"
      ></b-img>
    </b-card-body>
  </b-card>
  <div id="butoes" class="d-flex justify-content-between fixed-bottom container">
    <b-button title="historico" class="btn btn-success rounded-pill" @click="rota" id="historico"
      >Histórico</b-button
    >
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>
<style scoped>
h1 {
  font-size: 2rem;
  color: #010101;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 3.5rem;
  text-align: center;
}
h2 {
  font-size: 2rem;
  color: #d76700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.header {
  margin-bottom: 1rem;
  background-color: #010101;
}
.card {
  max-height: 23rem;
  font-size: 1.2rem;
  margin: auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

h3 {
  color: #ebb300;
  font-weight: bold;
  font-size: 1.7rem;
}

#historico {
  border: rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  color: #f5f5f5;
  text-shadow: #1e1e1e;
  border-radius: 0.3125rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 9rem;
  font-size: 1.2rem;
  min-width: 8rem;
  left: 13rem;
}

.image {
  max-width: 7rem;
  max-height: 7rem;
}
</style>

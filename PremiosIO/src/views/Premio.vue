<script setup>
import router from '@/router'
import Navbar from '@/components/Nav_Bar.vue'
</script>

<script>
export default {
  name: 'Premio',
  components: { Navbar },
  data: function () {
    return {
      utilizadores: JSON.parse(localStorage.getItem('Utilizadores')),
      trocas: JSON.parse(localStorage.getItem('Historico')),
      idpremio: localStorage.getItem('idPremio'),
      premios: [],
      email: sessionStorage.getItem('email'),
      dataFormatada: '',
      premioEscolhido: []
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
      console.log(this.premioEscolhido)
    },

    formatarData: function () {
      const hoje = new Date()
      const dia = hoje.getDate().toString().padStart(2, '0')
      const mes = (hoje.getMonth() + 1).toString().padStart(2, '0')
      const ano = hoje.getFullYear()
      this.dataFormatada = `${dia}/${mes}/${ano}`
    },

    trocar: function () {
      const premioEsc = this.premios.find((premio) => premio.id == this.idpremio)
      this.utilizadores.forEach((utilizador) => {
        if (utilizador.email == this.email) {
          if (premioEsc && Number(utilizador.pontos) >= Number(premioEsc.creditos)) {
            utilizador.pontos -= Number(premioEsc.creditos)
            let historicoTrocas = this.trocas.find((troca) => troca.email == this.email)
            if (!historicoTrocas) {
              historicoTrocas = {
                email: this.email,
                data: [],
                pontosUsa: [],
                premio: []
              }
              this.trocas.push(historicoTrocas)
            }
            historicoTrocas.data.push(this.dataFormatada)
            historicoTrocas.pontosUsa.push(premioEsc.creditos)
            historicoTrocas.premio.push(premioEsc.nome)

            localStorage.setItem('Utilizadores', JSON.stringify(this.utilizadores))
            localStorage.setItem('Historico', JSON.stringify(this.trocas))
          } else {
            console.error('Prêmio não encontrado ou pontos insuficientes')
          }
        }
      })
      router.push('/listapremios')
    }
  },

  mounted() {
    this.getPremios().then(() => {
      this.escolherPremio()
      this.formatarData()
    })
  }
}
</script>

<template>
  <div class="container pb-4">
    <h1>Informação do Prémio</h1>
  </div>
  <b-card class="mb-4">
    <b-card-header class="text-center header">
      <b-img
        :src="premioEscolhido.imagem"
        alt="Imagem do perfil"
        rounded="circle"
        class="image"
      ></b-img>
    </b-card-header>

    <b-card-body class="text-center">
      <h2 class="name">{{ premioEscolhido.nome }}</h2>
      <p id="creditos">Creditos: {{ premioEscolhido.creditos }}</p>
      <p>Tipo: {{ premioEscolhido.tipo }}</p>
    </b-card-body>
  </b-card>
  <div id="butoes" class="d-flex fixed-bottom container">
    <b-button title="trocar" class="btn btn-success rounded-pill" @click="trocar" id="trocar"
      >Trocar</b-button
    >
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  color: #d76700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 3.5rem;
  text-align: center;
}
.header {
  margin-bottom: 1rem;
}
.card {
  height: 24rem;
  font-size: 1.2rem;
  margin: auto;
  padding: 2rem;
  background-color: #f2f7bfb3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

h2 {
  color: #ebb300;
  font-weight: bold;
  font-size: 1.7rem;
}

#trocar {
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
  width: 8rem;
  height: 8rem;
}
</style>

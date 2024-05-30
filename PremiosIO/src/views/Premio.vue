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
      dataFormatada: ''
    }
  },
  methods: {
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
            localStorage.setItem('Utilizadores', JSON.stringify(this.utilizadores))
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
    this.formatarData()
    fetch('/premios.json')
      .then((response) => response.json())
      .then((json) => {
        this.premios = json.premios
      })
      .catch((error) => {
        console.error('Error fetching the JSON data:', error)
      })
  }
}
</script>

<template>
  <div class="container pb-4">
    <h1>Premio</h1>
  </div>
  <div id="butoes" class="d-flex fixed-bottom container">
    <b-button
      title="trocar"
      class="btn btn-success rounded-pill"
      :onclick="() => trocar()"
      id="trocar"
      >Trocar</b-button
    >
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>

<style scoped>
h1 {
  padding-top: 6rem;
  padding-left: 0.3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.32);
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
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
  left: 14rem;
}
</style>

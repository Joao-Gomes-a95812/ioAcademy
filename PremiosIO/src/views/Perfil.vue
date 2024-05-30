<script setup>
import router from '@/router'
import Navbar from '@/components/Nav_Bar.vue'

function rota() {
  router.push('/historico')
}
</script>

<script>
export default {
  name: 'Perfil',
  components: { Navbar },
  data() {
    return {
      utilizador: {
        name: '',
        email: '',
        image: '',
        pontos: 120,
        address: 'Rua Exemplo, 123, Cidade, País'
      }
    }
  },
  methods: {},
  mounted() {
    this.utilizador.name = sessionStorage.getItem('nome')
    this.utilizador.email = sessionStorage.getItem('email')
    this.utilizador.image = sessionStorage.getItem('imagem')
  }
}
</script>

<template>
  <b-card class="mb-4">
    <b-card-header class="text-center header">
      <b-img :src="utilizador.image" alt="Imagem do perfil" rounded="circle" class="image"></b-img>
    </b-card-header>

    <b-card-body class="text-center">
      <h1 class="name">{{ utilizador.name }}</h1>
      <p class="email">{{ utilizador.email }}</p>
      <b-badge variant="warning" class="pontos">Pontos: {{ utilizador.pontos }}</b-badge>
      <h4>Endereço de Entrega:</h4>
      <p>{{ utilizador.address }}</p>
    </b-card-body>

    <b-card-footer class="text-center">
      <b-button title="editar" class="btn btn-primary" @click="rota">Editar</b-button>
    </b-card-footer>
  </b-card>
  <div id="butoes" class="d-flex justify-content-between fixed-bottom container">
    <b-button title="historico" class="btn btn-success rounded-pill" @click="rota" id="historico"
      >Histórico</b-button
    >
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>

<style scoped>
.profile-card {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.header,
.btn-editar {
  margin-bottom: 2rem;
}

.image {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border: 3px solid #d76700;
}

.btn-editar {
  color: #d76700;
  font-weight: bold;
  margin-top: 1rem;
}

.name {
  color: #d76700;
  font-weight: bold;
}
.email {
  color: #6c757d;
  font-size: 1rem;
}

.pontos {
  font-size: 1rem;
  margin: 1rem 0;
}

.address h4 {
  color: #343a40;
  margin-bottom: 0.5rem;
}

.address p {
  color: #495057;
}

.btn-editar {
  border: none;
  background: #d76700;
  color: #f5f5f5;
  text-shadow: none;
  border-radius: 0.3125rem;
  box-shadow: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
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
</style>

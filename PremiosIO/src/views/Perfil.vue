<script setup>
import Navbar from '@/components/Nav_Bar.vue'
</script>

<script>
export default {
  name: 'Perfil',
  components: { Navbar },
  data() {
    return {
      user: {
        name: '',
        email: '',
        image: '',
        pontos: null,
        morada: null,
        pais: null
      },
      utilizadores: JSON.parse(localStorage.getItem('Utilizadores')),
      mail: sessionStorage.getItem('email')
    }
  },
  methods: {
    lista: function () {
      this.utilizadores.forEach((utilizador) => {
        if (utilizador.email == this.mail) {
          this.user.pontos = utilizador.pontos
          this.user.morada = utilizador.morada
          this.user.pais = utilizador.pais
        }
      })
    }
  },
  mounted() {
    this.user.name = sessionStorage.getItem('nome')
    this.user.email = sessionStorage.getItem('email')
    this.user.image = sessionStorage.getItem('imagem')
    this.lista()
  }
}
</script>

<template>
  <b-card class="mb-4">
    <b-card-header class="text-center header">
      <b-img :src="user.image" alt="Imagem do perfil" rounded="circle" class="image"></b-img>
    </b-card-header>

    <b-card-body class="text-center">
      <h1 class="name">{{ user.name }}</h1>
      <p class="email">{{ user.email }}</p>
      <b-badge variant="warning" class="pontos">Pontos: {{ user.pontos }}</b-badge>
      <h4>Endereço de Entrega:</h4>
      <p>{{ user.morada }}</p>
      <h5>Pais:</h5>
      <p>{{ user.pais }}</p>
    </b-card-body>

    <b-card-footer class="text-center">
      <b-button title="editar" class="btn btn-primary" @click="rota">Editar</b-button>
    </b-card-footer>
  </b-card>

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

.header {
  margin-bottom: 1rem;
}

.image {
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border: 3px solid #d76700;
}

.name {
  color: #d76700;
  font-weight: bold;
  font-size: 2rem;
}
.email {
  color: #6c757d;
  font-size: 1.2rem;
}

.pontos {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.btn-editar {
  color: #d76700;
  font-weight: bold;
  margin-top: 1rem;
  border: none;
  background: #d76700;
  color: #f5f5f5;
  text-shadow: none;
  border-radius: 0.3125rem;
  box-shadow: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
}
</style>

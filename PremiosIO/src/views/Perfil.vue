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
      user: {
        name: '',
        email: '',
        image: '',
        points: 120,
        address: 'Rua Exemplo, 123, Cidade, País'
      }
    }
  },
  methods: {},
  mounted() {
    this.user.name = sessionStorage.getItem('nome')
    this.user.email = sessionStorage.getItem('email')
    this.user.image = sessionStorage.getItem('imagem')
  }
}
</script>

<template>
  <b-container class="profile-container">
    <b-row>
      <b-col cols="12" class="text-center profile-header">
        <b-img
          :src="user.image"
          alt="Imagem do perfil"
          rounded="circle"
          class="profile-image"
        ></b-img>
        <h1 class="profile-name">{{ user.name }}</h1>
        <p class="profile-email">{{ user.email }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-center">
        <b-badge variant="info" class="profile-points">Pontos: {{ user.points }}</b-badge>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="profile-address">
        <h4>Endereço de Entrega:</h4>
        <p>{{ user.address }}</p>
      </b-col>
    </b-row>
  </b-container>
  <div id="butoes" class="d-flex fixed-bottom container">
    <b-button
      title="historico"
      class="btn btn-success rounded-pill"
      :onclick="() => rota()"
      id="historico"
      >Historico</b-button
    >
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.profile-header {
  margin-bottom: 2rem;
}

.profile-image {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border: 3px solid #d76700;
}

.profile-name {
  color: #d76700;
  font-weight: bold;
  margin-top: 1rem;
}

.profile-email {
  color: #6c757d;
  font-size: 1rem;
}

.profile-points {
  font-size: 1rem;
  margin: 1rem 0;
}

.profile-address h4 {
  color: #343a40;
  margin-bottom: 0.5rem;
}

.profile-address p {
  color: #495057;
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
  left: 14rem;
}
</style>

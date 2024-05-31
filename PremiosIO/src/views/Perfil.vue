<script setup>
import Navbar from '@/components/Nav_Bar.vue'
import router from '@/router'
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
      mail: sessionStorage.getItem('email'),
      editMode: false
    }
  },
  methods: {
    lista: function () {
      this.utilizadores.forEach((utilizador) => {
        if (utilizador.email == this.mail) {
          this.user.name = utilizador.nome
          this.user.pontos = utilizador.pontos
          this.user.morada = utilizador.morada
          this.user.pais = utilizador.pais
        }
      })
    },
    logout: function () {
      sessionStorage.removeItem('nome')
      sessionStorage.removeItem('email')
      sessionStorage.removeItem('imagem')
      router.push('/')
    },
    toggleEditMode: function () {
      this.editMode = !this.editMode
    },
    salvar: function () {
      this.utilizadores.forEach((utilizador) => {
        if (utilizador.email == this.mail) {
          utilizador.nome = this.user.name
          utilizador.morada = this.user.morada
          utilizador.pais = this.user.pais
        }
        localStorage.setItem('Utilizadores', JSON.stringify(this.utilizadores))
      })
      this.editMode = false
    },
    cancelar: function () {
      this.editMode = false
    }
  },
  mounted() {
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
      <div v-if="editMode">
        <b-form-input v-model="user.name" placeholder="Nome"></b-form-input>
        <b-form-input v-model="user.morada" placeholder="Morada"></b-form-input>
        <b-form-input v-model="user.pais" placeholder="País"></b-form-input>
      </div>
      <div v-else>
        <h1 class="name">{{ user.name }}</h1>
        <p>{{ user.email }}</p>
        <b-badge variant="warning" class="pontos">Pontos: {{ user.pontos }}</b-badge>
        <h4>Endereço de Entrega:</h4>
        <p>{{ user.morada }}</p>
        <h5>Pais:</h5>
        <p>{{ user.pais }}</p>
      </div>
    </b-card-body>

    <b-card-footer class="text-center footer">
      <div v-if="!editMode">
        <b-button id="editar" class="btn footer-btn" @click="toggleEditMode">Editar</b-button>
        <b-button id="LogOut" class="btn footer-btn" @click="logout">LogOut</b-button>
      </div>
      <div v-if="editMode">
        <b-button class="btn footer-btn" @click="salvar">Salvar</b-button>
        <b-button class="btn footer-btn" @click="cancelar">Cancelar</b-button>
      </div>
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

.footer {
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 0.3125rem;
  display: flex;
  justify-content: center;
}

.footer-btn {
  background: #d76700;
  color: #fff;
  border: none;
  width: 5rem;
  height: 2.7rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}
</style>

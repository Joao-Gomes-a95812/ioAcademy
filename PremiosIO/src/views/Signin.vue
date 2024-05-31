<script setup>
import router from '@/router'
</script>

<script>
export default {
  name: 'Signin',
  data: function () {
    return {
      utilizadores: JSON.parse(localStorage.getItem('Utilizadores')),
      trocas: JSON.parse(localStorage.getItem('Historico'))
    }
  },
  methods: {
    onSubmit: function () {
      const novoUtilizador = {
        email: InputEmail.value,
        morada: 'Por definir',
        nome: InputNome.value,
        pais: 'Por definir',
        pontos: 50000
      }

      if (!novoUtilizador.nome || !novoUtilizador.email) {
        this.$notify({
          group: 'foo',
          title: 'Por favor, preencha todos os campos!',
          type: 'error',
          duration: 5000
        })
        return
      }

      let utilizadorEsc = this.utilizadores.find(
        (utilizador) => utilizador.email == novoUtilizador.email
      )
      let historicoTrocas
      if (!utilizadorEsc) {
        utilizadorEsc = {
          email: novoUtilizador.email,
          nome: novoUtilizador.nome,
          morada: novoUtilizador.morada,
          pais: novoUtilizador.pais,
          pontos: novoUtilizador.pontos
        }
        historicoTrocas = {
          email: novoUtilizador.email,
          data: [],
          pontosUsa: [],
          premio: []
        }
      } else if (utilizadorEsc) {
        historicoTrocas = this.trocas.find((troca) => troca.email == novoUtilizador.email) || {
          email: novoUtilizador.email,
          data: [],
          pontosUsa: [],
          premio: []
        }
      }
      this.trocas.push(historicoTrocas)
      this.utilizadores.push(utilizadorEsc)
      localStorage.setItem('Utilizadores', JSON.stringify(this.utilizadores))
      localStorage.setItem('Historico', JSON.stringify(this.trocas))

      InputNome.value = ''
      InputEmail.value = ''
      router.push('/')

      this.$notify({
        group: 'foo',
        title: 'Utilzador ' + novoUtilzador.nome + ' Registado!',
        type: 'warn',
        duration: 5000
      })
    }
  }
}
</script>
<template>
  <div class="text-center mt-5" id="img">
    <img src=" ../assets/fnac.png" class="object-fit-cover" id="logo" alt="image" />
  </div>
  <div class="b-container mt-3">
    <form>
      <div class="text-center mb-3 mt-2">
        <h1>SignIn</h1>
      </div>
      <div class="form-group mb-2">
        <label for="InputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
          placeholder=""
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group mb-2">
        <label for="InputNome">Nome</label>
        <input type="name" class="form-control" id="InputNome" placeholder="" />
      </div>
      <div class="d-flex flex-row-reverse mt-4">
        <b-button
          type="submit"
          class="btn btn-success position-relative py-2 px-4 rounded-pill"
          id="registar"
          @click="onSubmit"
        >
          Registar!
        </b-button>
      </div>
    </form>
  </div>
</template>

<style scoped>
#logo {
  max-width: 8rem;
  flex-shrink: 0;
  background: #f5f5f5;
  border-radius: 1.7rem;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
}

form {
  color: #111111;
  flex-shrink: 0;
  justify-content: center;
  background-color: #f2f7bfb3;
  border-radius: 0.5rem;
  padding: 2rem;
  padding-top: 2rem;
  border-radius: 2.1875rem;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);
}

#id {
  margin-right: 1rem;
}

#registar {
  border: rgba(167, 167, 72, 0.55);
  background: #ebb300;
  color: #010101;
  text-shadow: #1e1e1e;
  border-radius: 0.3125rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
}

.google-sing-in {
  background: #232d2b;
  border-radius: 2rem;
}

#InputNome,
#InputEmail {
  border: none;
  border-radius: 0;
  background: none;
  border-bottom: 0.01rem solid #1e1e1e;
  box-shadow: none;
}
</style>

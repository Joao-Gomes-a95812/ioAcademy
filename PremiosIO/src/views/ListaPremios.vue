<script setup>
import router from '@/router'
import Navbar from '@/components/Nav_Bar.vue'
import Premios from '@/components/Premios.vue'
</script>

<script>
export default {
  name: 'ListaPremios',
  components: { Navbar, Premios },
  data() {
    return {
      premios: [],
      tipoSelecionado: '',
      tipos: []
    }
  },
  methods: {
    rota: function (premio) {
      router.push('/premio')
      localStorage.setItem('idPremio', JSON.stringify(premio.id))
    }
  },
  mounted() {
    fetch('/premios.json')
      .then((response) => response.json())
      .then((json) => {
        this.premios = json.premios
        this.tipos = [...new Set(this.premios.map((premio) => premio.tipo))]
      })
      .catch((error) => {
        console.error('Error fetching the JSON data:', error)
      })
  }
}
</script>

<template>
  <Premios class="fixed-top"></Premios>
  <div id="tipo" class="form-group">
    <label for="cargosChoice">Pesquisar por tipo:</label>
    <select id="tipoChoice">
      <option value="" selected disabled></option>
      <option v-for="tipo in tipos" :key="tipo" :value="tipo">
        {{ tipo }}
      </option>
    </select>
  </div>
  <div id="listaPremios">
    <div class="d-flex flex-column gap-4 mt-3">
      <div class="list" v-for="premio in premios" :key="premio.id" @click="rota(premio)">
        <div id="informacao">
          <h4>{{ premio.nome }}</h4>
          <p>Creditos: {{ premio.creditos }}</p>
        </div>
      </div>
    </div>
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
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
  background-color: #1e1e1e;
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.279),
    0px 4px 4px 0px rgba(0, 0, 0, 0.279) inset;
  height: 6.5rem;
}

.container-fluid {
  border-radius: 0rem;
  width: 100%;
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
#listaPremios {
  max-height: 27rem;
  overflow-y: auto;
  margin-top: 2rem;
}

#informacao {
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 0.5rem;
}

#tipo {
  color: #d76700;
  text-align: center;
  font-family: Helvetica;
  margin-top: 6rem;
  font-style: normal;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
}
#tipoChoice {
  font-size: 1.3rem;
}
#tipo label {
  font-size: 1.6rem;
}
</style>

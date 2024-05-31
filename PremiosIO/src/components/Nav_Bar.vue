<script setup>
import router from '@/router'
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import Icon1 from '@/components/icons/icon1.vue'
import Icon2 from '@/components/icons/icon2.vue'
import Icon3 from '@/components/icons/icon3.vue'

const route = useRoute()

const select0 = () => {
  let routeName = route.name
  document.getElementById('icon-1').style.color = '#f5f5f5'
  document.getElementById('icon-2').style.color = '#f5f5f5'
  document.getElementById('icon-3').style.color = '#f5f5f5'

  if (routeName == 'home') {
    document.getElementById('icon-2').style.color = '#ebb300'
  } else if (routeName == 'perfil' || routeName == 'historico') {
    document.getElementById('icon-1').style.color = '#ebb300'
  } else if (routeName == 'listapremios' || routeName == 'premio') {
    document.getElementById('icon-3').style.color = '#ebb300'
  }
}
onMounted(select0)
onUpdated(select0)

router.afterEach(() => {
  setTimeout(select0, 150)
})

function select() {
  router.push('/perfil')
}

function select1() {
  router.push('/home')
}
function select2() {
  router.push('/listapremios')
}
</script>

<script>
export default {
  name: 'Navbar',
  components: {
    Icon1,
    Icon2,
    Icon3
  }
}
</script>

<template>
  <ul class="nav justify-content-center gap-4">
    <li class="nav-item btn">
      <Icon1 id="icon-1" class="icon my-2" @click="select" />
    </li>
    <li class="nav-item btn">
      <Icon2 id="icon-2" class="icon my-2" @click="select1" />
    </li>
    <li class="nav-item btn">
      <Icon3 id="icon-3" class="icon my-2" @click="select2" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  background: #010101;
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.279),
    0px 4px 4px 0px rgba(0, 0, 0, 0.279) unset;
  height: 6.5rem;
}
</style>

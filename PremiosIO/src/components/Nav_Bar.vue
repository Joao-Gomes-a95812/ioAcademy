<script setup>
import router from '@/router'
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const select0 = () => {
  let routeName = route.name
  document.getElementById('icon-1').style.opacity = 0.5
  document.getElementById('icon-2').style.opacity = 0.5
  document.getElementById('icon-3').style.opacity = 0.5

  if (routeName == 'home') {
    document.getElementById('icon-2').style.opacity = 1
  } else if (routeName == 'perfil' || routeName == 'Historico') {
    document.getElementById('icon-1').style.opacity = 1
  } else if (routeName == 'listapremios' || routeName == 'premio') {
    document.getElementById('icon-3').style.opacity = 1
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
  name: 'Navbar'
}
</script>

<template>
  <ul class="nav justify-content-center gap-4">
    <li class="nav-item btn">
      <img id="icon-1" src="./icons/folder-open-solid.svg" class="icon my-2" @click="select" />
    </li>
    <li class="nav-item btn">
      <img id="icon-2" src="./icons/list-check-solid.svg" class="icon my-2" @click="select1" />
    </li>
    <li class="nav-item btn">
      <img id="icon-3" src="./icons/chart-simple-solid.svg" class="icon my-2" @click="select2" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  background: #ebb300;
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.279),
    0px 4px 4px 0px rgba(0, 0, 0, 0.279) inset;
  height: 6.5rem;
}

.icon {
  height: 2.8rem;
  opacity: 0.6;
  filter: drop-shadow(0px 9px 9px rgba(0, 0, 0, 0.45));
}

#icon-1,
#icon-2,
#icon-3 {
  transition: opacity 0.8s ease;
}
</style>

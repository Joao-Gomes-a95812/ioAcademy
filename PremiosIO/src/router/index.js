import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Perfil from '@/views/Perfil.vue'
import Historico from '@/views/Historico.vue'
import ListaPremios from '@/views/ListaPremios.vue'
import Premio from '@/views/Premio.vue'
import QRGenerator from '@/views/QRGenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/historico',
      name: 'historico',
      component: Historico
    },
    {
      path: '/listapremios',
      name: 'listapremios',
      component: ListaPremios
    },
    {
      path: '/premio',
      name: 'premio',
      component: Premio
    },
    {
      path: '/qrgenerator',
      name: 'qrgenerator',
      component: QRGenerator
    }
  ]
})

export default router

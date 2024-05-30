import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/main.css'

import vue3GoogleLogin from 'vue3-google-login'

const authkey = '415034066399-imnm6opf083t2dptfdvratlgp6p89tfh.apps.googleusercontent.com'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(vue3GoogleLogin, { clientId: authkey })
app.use(router)
app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/main.css'

import vue3GoogleLogin from 'vue3-google-login'

const authkey = '269884064871-omt2st9tga33d51cce11fh0s7ea5mmup.apps.googleusercontent.com'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(vue3GoogleLogin, { clientId: authkey })
app.mount('#app')

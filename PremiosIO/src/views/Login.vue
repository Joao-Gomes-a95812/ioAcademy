<script setup>
import router from '@/router'

let callback = async (response) => {
  if (!response.credential) {
    console.log('JWT is not valid.')
    return
  }

  const payload = JSON.parse(atob(response.credential.split('.')[1]))
  const utilizadores = JSON.parse(localStorage.getItem('Utilizadores')) || []
  const utilizador = utilizadores.find((u) => u.email === payload.email)

  if (utilizador) {
    sessionStorage.setItem('nome', payload.name)
    sessionStorage.setItem('email', payload.email)
    sessionStorage.setItem('imagem', payload.picture)
    router.push('/home')
  }
}
import { GoogleLogin } from 'vue3-google-login'
</script>

<template>
  <div class="text-center mt-5" id="img">
    <img src=" ../assets/fnac.png" class="object-fit-cover" id="logo" alt="image" />
  </div>
  <div class="b-container" id="login">
    <div class="text-center">
      <GoogleLogin :callback="callback" class="google-sign-in"> </GoogleLogin>
    </div>
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

#login {
  color: #111111;
  flex-shrink: 0;
  justify-content: center;
  text-align: center;
  background-color: #f5f5f5;
  margin-top: 9rem;
  padding: 2rem;
  padding-top: 2rem;
  border-radius: 2.1875rem;
  background-color: #ebb300;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);
}

.google-sing-in {
  background: #232d2b;
  border-radius: 2rem;
  font-size: 1.5rem;
  text-shadow: #1e1e1e;
  border-radius: 0.3125rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
}
</style>

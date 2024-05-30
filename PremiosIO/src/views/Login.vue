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
</script>

<template>
  <div class="text-center mt-5" id="img">
    <img src=" ../assets/fnac.png" class="object-fit-cover" id="logo" alt="image" />
  </div>
  <div class="b-container mt-3">
    <form>
      <div class="d-flex flex-row-reverse mt-4">
        <button
          type="submit"
          class="btn btn-success position-relative py-2 px-4 rounded-pill"
          id="bora"
        >
          Login por Google
        </button>
      </div>
    </form>
    <div class="text-center mt-5">
      <GoogleLogin :callback="callback" class="google-sign-in"> </GoogleLogin>
    </div>
  </div>
</template>

<style scoped>
#logo {
  max-width: 9.325rem;
  flex-shrink: 0;
  background: #f5f5f5;
  border-radius: 12rem;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
}

form {
  color: #111111;
  flex-shrink: 0;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  padding: 2rem;
  padding-top: 2rem;
  border-radius: 2.1875rem;
  background: #f5f5f5;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);
}

span {
  margin-left: 1rem;
  font-size: 1.2rem;
  color: #f5f5f5;
}

#bora {
  border: rgba(130, 167, 72, 0.55);
  background: rgba(130, 167, 72, 0.55);
  color: #f5f5f5;
  text-shadow: #1e1e1e;
  border-radius: 0.3125rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
}

.google-sing-in {
  background: #232d2b;
  border-radius: 2rem;
}
</style>

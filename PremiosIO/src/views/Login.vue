<script setup>
import router from '@/router'
</script>

<template>
  <div class="text-center mt-5" id="img">
    <img src=" ../assets/logo.png" class="object-fit-cover" id="logo" alt="image" />
  </div>
  <div class="b-container mt-3">
    <form>
      <div class="text-center mb-3 mt-2">
        <h1>Login</h1>
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
        <label for="InputPassword">Password</label>
        <input type="password" class="form-control" id="InputPassword" placeholder="" />
      </div>
      <div class="form-group form-check mt-2 d-flex flex-row-reverse align-center">
        <input type="checkbox" class="form-check-input m-1" id="Check" />
        <label class="form-check-label" for="Check">Check me out</label>
      </div>
      <div class="d-flex flex-row-reverse mt-4">
        <button
          type="submit"
          class="btn btn-success position-relative py-2 px-4 rounded-pill"
          id="bora"
        >
          BORA!
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

#id {
  margin-right: 1rem;
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

#InputPassword,
#InputEmail {
  border: none;
  border-radius: 0;
  background: none;
  border-bottom: 0.01rem solid #1e1e1e;
  box-shadow: none;
}
</style>

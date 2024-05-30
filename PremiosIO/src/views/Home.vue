<script setup>
import Navbar from '@/components/Nav_Bar.vue'
</script>

<script>
export default {
  name: 'Home',
  components: { Navbar }
}
</script>

<template>
  <div class="container pb-4">
    <h1>Atividades Abertas</h1>
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>
<style scoped>
h1 {
  font-size: 2rem;
  color: #d76700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 3.5rem;
  text-align: center;
}
</style>

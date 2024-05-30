<script setup>
import Navbar from '@/components/Nav_Bar.vue'
</script>

<script>
export default {
  name: 'Historico',
  components: { Navbar }
}
</script>

<template>
  <div class="container pb-4">
    <h1>Historico</h1>
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>
<style scoped>
h1 {
  padding-top: 6rem;
  padding-left: 0.3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.32);
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
}
</style>

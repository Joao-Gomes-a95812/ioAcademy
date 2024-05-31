<script setup>
import QrcodeVue from 'qrcode.vue'
import Navbar from '@/components/Nav_Bar.vue'
</script>

<script>
export default {
  data() {
    return {
      QRValue: sessionStorage.getItem('email'),
      size: 300
    }
  },
  components: {
    QrcodeVue,
    Navbar
  }
}
</script>

<template>
  <div class="container pb-4">
    <h1>O Teu QR Code:</h1>
  </div>
  <div class="bg-gray-50" id="code">
    <qrcode-vue v-if="QRValue" :value="QRValue" :size="size" level="H" />
  </div>
  <Navbar class="fixed-bottom pb-4 p-1"></Navbar>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  color: #010101;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Helvetica;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 3.5rem;
  text-align: center;
}
#code {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

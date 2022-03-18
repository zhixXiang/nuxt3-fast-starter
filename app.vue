<template>
  <div>
    <Header></Header>
    <NuxtPage />
    <Footer></Footer>
    <ModalContainer></ModalContainer>
  </div>
</template>
<script setup>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  import ModalContainer from '~/components/Modals/ModalContainer.vue';
</script>

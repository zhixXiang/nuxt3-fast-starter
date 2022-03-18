<template>
  <div :class="{ modal: true, 'is-active': isShow }" :id="currentId">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box" v-if="currentModal != ''">
        <component :is="currentModal" v-bind="data"></component>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { storeToRefs } from 'pinia';
  import { useModalStore } from '~/stores/modal';
  const modalStore = useModalStore();
  const { currentModal, currentId, data, isShow } = storeToRefs(modalStore);
</script>
<style lang="scss"></style>

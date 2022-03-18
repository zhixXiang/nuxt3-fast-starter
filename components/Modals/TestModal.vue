<template>
  <Modal>
    <template v-slot:title>Modal Title</template>
    <template v-slot:content>
      Modal Content
    </template>
    <template v-slot:buttons>
      <button class="button is-light" @click="props.close">Cancel</button>
      <button class="button is-primary" @click="props.close">OK</button>
    </template>
  </Modal>
</template>

<script setup>
  import Modal from './Modal.vue';
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      default: {}
    },
    close: {
      type: Function,
      required: false,
      default: () => console.log('close modal!')
    }
  });
</script>

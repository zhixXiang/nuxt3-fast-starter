<template>
  <div>
    <h1>{{ message }}</h1>
    <p>mouse position: {{ x }}, {{ y }}</p>
    <div class="button" @click="onClickOpenModal">Open Modal</div>
    <br />
    <NuxtLink to="/login"> Login </NuxtLink>
    <br />
    <NuxtLink to="/register"> Register </NuxtLink>
  </div>
</template>
<script setup>
  import useModal from '~/composables/useModal';
  import TestModal from '~/components/Modals/TestModal.vue';

  const { $m } = useModal();
  const message = ref('hello world');
  // Auto Import lodash
  message.value = _ToUpper(message.value);
  console.log(isEmpty(''));
  // Auto Import VueUse
  const { x, y } = useMouse();

  const onClickOpenModal = () => {
    $m.show({
      component: TestModal,
      id: 'testModal',
      data: {}
    });
  };
</script>
<style lang="scss" scoped>
  h1 {
    color: cadetblue;
  }
  p {
    color: cornflowerblue;
  }
</style>

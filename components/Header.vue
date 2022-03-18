<template>
  <header>{{ logo }}</header>
</template>
<script setup>
  const logo = ref('LOGO');
</script>
<style lang="scss" scoped>
  header {
    background: green;
    color: white;
    height: 80px;
    display: flex;
    align-items: center;
  }
</style>

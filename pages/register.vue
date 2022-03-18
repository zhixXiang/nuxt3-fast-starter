<template>
  <div>
    {{ message }}
    <NuxtLink to="/login"> Login </NuxtLink>
  </div>
</template>
<script setup>
const message = ref("Register Page");
</script>
<style lang="scss"></style>

<script setup>
import NpcCards from './components/NpcCards.vue';
import Form from './components/Form.vue';
</script>

<template>
  <div class="vue-container">
    <NpcCards />
    <Form />
  </div>
</template>

<style scoped>
.vue-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>

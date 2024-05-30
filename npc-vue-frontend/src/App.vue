<script setup>
import NpcCards from './components/NpcCards.vue';
import Form from './components/Form.vue';
</script>

<template>
  <Form />
  <div class="vue-container">
    <NpcCards />
  </div>
</template>

<style scoped>
.vue-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  gap: 1rem;
  align-items: stretch;
  margin: 1rem;
}
</style>

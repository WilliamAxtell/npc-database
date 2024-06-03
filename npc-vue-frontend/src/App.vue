<script setup>
import NpcCards from './components/NpcCards.vue';
import FormCont from './components/FormCont.vue';
import EditForm from './components/EditForm.vue';

</script>

<template>
  <FormCont />
  <div class="vue-container">
    <NpcCards />
  </div>
  <EditForm />
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

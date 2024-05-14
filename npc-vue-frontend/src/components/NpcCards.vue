<script setup>

import { ref, onMounted } from 'vue';

const npcList = ref([]);
const npcs = ref([]);

const fetchNpc = async () => {
    try {
        return await fetch('http://localhost:3000/api/v1/npcs', {
        headers: {
        'Content-Type': 'application/json'
        },
        method: 'GET'
        }).then((response) => response.json());
    } catch (err) {
        console.log(err);
    }
};

onMounted(async () => {
    npcList.value = await fetchNpc();
    npcs.value = npcList.value['npcs'];
});

</script>

<template>
  <div v-for="npc in npcs">
    <div>
      <h2>{{ npc.title }} {{ npc.firstName }} {{ npc.lastName }}</h2>
    </div>
  </div>
</template>

<style scoped>

</style>

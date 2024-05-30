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
        })
        .then((response) => response.json());
    } catch (err) {
        console.log(err);
    }
};

onMounted(async () => {
    npcList.value = await fetchNpc();
    npcs.value = npcList.value['npcs'].sort((a, b) => {
              if (a.firstName < b.firstName) {
                  return -1;
              }

              if (a.firstName == b.firstName) {
                  if (a.lastName < b.lastName) {
                      return -1;
                  }
              }
            });
    });

const deleteNpc = async (id) => {
    try {
        return await fetch(`http://localhost:3000/api/v1/npcs/${id}`, {
        headers: {
        'Content-Type': 'application/json'
        },
        method: 'DELETE'
        })
        .then((response) => {
          window.location.reload();
          return response.json();
        });
    } catch (err) {
        console.log(err);
    }
};
</script>

<template>
  <div v-for="npc in npcs">
    <div class="card">
      <h2><span v-if="npc.title">{{ npc.title + " " }}</span>{{ npc.firstName }} {{ npc.lastName }}</h2>
      <p class="card-subtitle">{{ npc.folk }} - {{ npc.class }}</p>
      <ul>
        <li v-if="npc.appearance"><span class="card-list-title">Appearance: </span>{{ npc.appearance }}</li>
        <li v-if="npc.personality"><span class="card-list-title">Personality: </span>{{ npc.personality }}</li>
        <li v-if="npc.equipment"><span class="card-list-title">Equipment: </span>{{ npc.equipment }}</li>
        <li v-if="npc.speech"><span class="card-list-title">Speech: </span>{{ npc.speech }}</li>
        <li v-if="npc._id"><span class="card-list-title">ID: </span>{{ npc._id }}</li>
      </ul>
      <div class="card-btn-container">
        <button class="card-btn">Edit</button>
        <button class="card-btn" @click="deleteNpc(npc._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  padding: 1rem;
  box-shadow: 0.2rem 0.2rem 0.8rem #000;
  background-color: var(--vt-c-green);
}

.card-subtitle {
  font-style: italic;
}

.card-list-title {
  font-weight: bold;
}

li {
  margin: 0.5rem 0;
}

.card-btn-container {
  margin: 1rem -1rem -1rem -1rem;
}
.card-btn{
  display: inline-block;
  width: 50%;
  border: none;
  height: 2rem;
  cursor: pointer;
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue';

const npcList = ref([]);
const npcs = ref([]);
const searchQuery = ref('');

const fetchNpc = async () => {
    try {
        return await fetch('https://npc-database-backend.onrender.com/api/v1/npcs', {
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
  await fetch(`https://npc-database-backend.onrender.com/api/v1/npcs/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
  .then((response) => {
    return response.json();
  });
  window.location.reload();
};

const editNpc = (npc) => {
  document.querySelector('.edit-form-modal').style.display = 'flex';
  document.querySelector('.npc-edit-form').style.display = 'flex';
  document.querySelector('.edit-form-title').textContent = `Edit ${npc.firstName}`;
  document.querySelector('#edit-id').value = npc._id;
  document.querySelector('#edit-title').value = npc.title;
  document.querySelector('#edit-first-name').value = npc.firstName;
  document.querySelector('#edit-last-name').value = npc.lastName;
  document.querySelector('#edit-folk').value = npc.folk;
  document.querySelector('#edit-class').value = npc.class;
  document.querySelector('#edit-appearance').value = npc.appearance;
  document.querySelector('#edit-personality').value = npc.personality;
  document.querySelector('#edit-equipment').value = npc.equipment;
  document.querySelector('#edit-speech').value = npc.speech;
  document.querySelector('#edit-alive').checked = npc.alive;
};

const filteredNpcs = computed(() => {
  return npcs.value.filter(npc => 
    npc.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    npc.lastName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="card-search">
    <input type="text" v-model="searchQuery" placeholder="Filter NPCs by name...">
  </div>
  <div class="vue-container">
  <div v-for="npc in filteredNpcs">
    <div class="card">
      <h2><span v-if="npc.title">{{ npc.title + " " }}</span>{{ npc.firstName }}<span v-if="npc.lastName">{{" " + npc.lastName }}</span></h2>
      <p class="card-deceased" v-if="!npc.alive">(Deceased)</p>
      <p class="card-subtitle">{{ npc.folk }}<span v-if="npc.class">{{" - " + npc.class }}</span></p>
      <ul>
        <li v-if="npc.appearance"><span class="card-list-title">Appearance: </span>{{ npc.appearance }}</li>
        <li v-if="npc.personality"><span class="card-list-title">Personality: </span>{{ npc.personality }}</li>
        <li v-if="npc.equipment"><span class="card-list-title">Equipment: </span>{{ npc.equipment }}</li>
        <li v-if="npc.speech"><span class="card-list-title">Speech: </span>{{ npc.speech }}</li>
        <!-- <li v-if="npc._id"><span class="card-list-title">ID: </span>{{ npc._id }}</li> -->
      </ul>
      <div class="card-btn-container">
        <button id="card-btn-1" class="card-btn" @click="editNpc(npc)">Edit</button>
        <button id="card-btn-2" class="card-btn" @click="deleteNpc(npc._id)">Delete</button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

.card-search {
  background-color: var(--vt-c-black-soft);
  box-shadow: 0.2rem 0.2rem 0.8rem #000;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}

.vue-container {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  /* This is better for small screens, once min() is better supported */
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 1rem;
  align-items: stretch;
  margin: 1rem;
}

.card-search input {
  width: 100%;
  /* height: 2.5rem; */
  border-radius: 1rem;
  box-sizing: border-box;
  border: none;
  padding-inline-start: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5;
}

.card {
  padding: 1rem;
  box-shadow: 0.2rem 0.2rem 0.8rem #000;
  background-color: var(--vt-c-white-soft);
}

.card-deceased {
  font-weight: bold;
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
  font-family: "Poppins", sans-serif;
  font-weight: 400;  
}

#card-btn-1 {
  background-color: var(--vt-c-green);
  color: white;
  }

#card-btn-2 {
  background-color: firebrick;
  color:white;
}
</style>

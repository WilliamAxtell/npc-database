<script setup>

import { ref, onMounted } from 'vue';

const fetchStaff = async () => {
    try {
        const token = import.meta.env.VITE_APP_BAMBOONINE_CLIENT_TOKEN;
        return await fetch('http://localhost:3000/api/v1/npcs', {
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        },
        method: 'POST'
        }).then((response) => response.json());
    } catch (err) {
        console.log(err);
    }
};

onMounted(async () => {
    staffList.value = await fetchStaff();
});

</script>

<template>
  <div class="post">
    {{staffList}}
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

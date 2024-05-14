<script setup>

    import { ref } from 'vue';

    const title = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const folk = ref('');
    const classType = ref('');
    const appearance = ref('');
    const personality = ref('');
    const equipment = ref('');
    const speech = ref('');

    function createNpc(e) {
        e.preventDefault();
        const npc = {
            "title": title.value,
            "firstName": firstName.value,
            "lastName": lastName.value,
            "folk": folk.value,
            "class": classType.value,
            "appearance": appearance.value,
            "personality": personality.value,
            "equipment": equipment.value,
            "speech": speech.value
        };
        fetch('http://localhost:3000/api/v1/npcs', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(npc)
        }).then((response) => response.json());
        clearForms();
    }

    function clearForms() {
        title.value = '';
        firstName.value = '';
        lastName.value = '';
        folk.value = '';
        classType.value = '';
        appearance.value = '';
        personality.value = '';
        equipment.value = '';
        speech.value = '';
    }
</script>

<template>
        <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" v-model="title"><br/>
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" v-model="firstName"><br/>
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" v-model="lastName"><br/>
                <label for="folk">Folk:</label>
                <input type="text" id="folk" name="folk" v-model="folk"><br/>
                <label for="class">Class:</label>
                <input type="text" id="class" name="class" v-model="classType"><br/>
                <label for="appearance">Appearance:</label>
                <input type="text" id="appearance" name="appearance" v-model="appearance"><br/>
                <label for="personality">Personality:</label>
                <input type="text" id="personality" name="personality" v-model="personality"><br/>
                <label for="equipment">Equipment:</label>
                <input type="text" id="equipment" name="equipment" v-model="equipment"><br/>
                <label for="speech">Speech:</label>
                <input type="text" id="speech" name="speech" v-model="speech"><br/>
                <button type="submit" @click="createNpc">Submit</button>
        </form>
</template>

<style scoped>

</style>
<script setup>
    import { ref } from 'vue';
    let title = '';
    let description = '';
    let level = 0;
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
                <button type="submit">Submit</button>
        </form>
</template>

<style scoped>

</style>
<script setup>
    import { ref } from 'vue';

    const modalToggle = ref(false);

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
        console.log('createNpc');
        e.preventDefault();
        const npc = {
            "title": capUp(title.value).trim(),
            "firstName": capUp(firstName.value).trim(),
            "lastName": capUp(lastName.value).trim(),
            "folk": capUp(folk.value).trim(),
            "class": capUp(classType.value).trim(),
            "appearance": appearance.value.trim(),
            "personality": personality.value.trim(),
            "equipment": equipment.value.trim(),
            "speech": speech.value.trim()
        };
        fetch('http://localhost:3000/api/v1/npcs', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(npc)
        }).then((response) => response.json());
        window.location.reload();
    }

    function capUp(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }    
</script>

<template>
    <div class="edit-form-modal"></div>
        <div class="npc-edit-form">
            <div class="form-container">
                <h2 class="edit-form-title"></h2>
                <form>
                    <label for="title">Title:<br/>
                        <input type="text" id="title" name="title" v-model="title">
                    </label>
                    <label for="firstName">First Name:<br/>
                        <input type="text" id="firstName" name="firstName" v-model="firstName">
                    </label>
                    <label for="lastName">Last Name:<br/>
                        <input type="text" id="lastName" name="lastName" v-model="lastName">
                    </label>
                    <label for="folk">Folk:<br/>
                        <input type="text" id="folk" name="folk" v-model="folk">
                    </label>
                    <label for="class">Class:<br/>
                        <input type="text" id="class" name="class" v-model="classType">
                    </label>
                    <label for="appearance">Appearance:<br/>
                        <input type="text" id="appearance" name="appearance" v-model="appearance">
                    </label>
                    <label for="personality">Personality:<br/>
                        <input type="text" id="personality" name="personality" v-model="personality">
                    </label>
                    <label for="equipment">Equipment:<br/>
                        <input type="text" id="equipment" name="equipment" v-model="equipment">
                    </label>
                    <label for="speech">Speech:<br/>
                        <input type="text" id="speech" name="speech" v-model="speech">
                    </label>
                    <button type="submit" @click="createNpc">Update!</button>
                </form>
            </div>
        </div>    
</template>

<style scoped>
    .edit-form-modal {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .npc-edit-form {
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        align-items: start;
    }

    .form-container {
        padding: 1rem 2rem;
        color: var(--vt-c-white-soft);
        background-color: var(--vt-c-black-soft);
    }

    form {
        width: 20rem;
        padding: 1rem 0;
        flex: none;
        display: flex;
        flex-direction: column;
    }

    form label {
        margin-bottom: 1rem;
    }

    form input {
        width: 100%;
        height: 2rem;
        border-radius: 1rem;
        box-sizing: border-box;
        border: none;
        padding-inline-start: 1rem;
    }

    form button {
        margin-top: 1rem;
        height: 2rem;
        padding: 0.5rem;
        background-color: var(--vt-c-green);
        color: var(--vt-c-whlite-soft);
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 700;
    }

    form button:hover {
        background-color: var(--vt-c-green-dark);
    }    
</style>
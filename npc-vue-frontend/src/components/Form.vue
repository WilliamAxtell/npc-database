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

    const modalToggle = ref(false);

    const formOffset = ref(true);

    function callForm() {
        if (formOffset.value) {
            document.querySelector('.npc-form').style.left = 'calc(50% - 4rem)';
            document.querySelector('.npc-form').style.transform = 'translate(-50%, 5%)';
            document.querySelector('.arrow-left').style.transform = 'rotate(180deg)';
        } else {
            document.querySelector('.npc-form').style.left = 'calc(100% - 4rem)';
            document.querySelector('.npc-form').style.transform = 'translate(0%, 5%)';
            document.querySelector('.arrow-left').style.transform = 'rotate(0)';
        }
        formOffset.value = !formOffset.value;
        modalToggle.value = !modalToggle.value;
    }

    function createNpc(e) {
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

    function capUp(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>

<template>
    <div v-if="modalToggle" class="modal"></div>
        <div class="npc-form">
            <button class="form-call-dismiss" @click="callForm">
                <div class="arrow-left"></div>
            </button>
            <div class="form-container">
                <h2>Create an NPC</h2>
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
                    <button type="submit" @click="createNpc">Create!</button>
                </form>
            </div>
        </div>    
</template>

<style scoped>
    .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .npc-form {
        position:absolute;
        top: 0;
        left: 0;
        left: calc(100% - 4rem);
        transform: translate(0%, 5%);
        display: flex;
        align-items: start;
        transition: 
            left 1s,
            transform 1s;
    }

    .form-call-dismiss {
        width: 4rem;
        flex: none;
        aspect-ratio: 1 / 1;
        background-color: var(--vt-c-green);
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    .arrow-left {
        width: 0; 
        height: 0; 
        border-top: 1rem solid transparent;
        border-bottom: 1rem solid transparent; 
        border-right: 1rem solid black; 
        transform: rotate(0);
        transition: transform 1s;
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
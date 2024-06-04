<script setup>
    import { ref } from 'vue';

    const editTitle = ref('');
    const editFirstName = ref('');
    const editLastName = ref('');
    const editFolk = ref('');
    const editClass = ref('');
    const editAppearance = ref('');
    const editPersonality = ref('');
    const editEquipment = ref('');
    const editSpeech = ref('');
    const editAlive = ref(true);

    function updateNpc(e) {
        e.preventDefault();
        console.log('editNpc');
        const id = document.querySelector('#edit-id').value;
        const npc = {
            alive: editAlive.value,
        };
        
        if(editTitle.value !== '') {
            npc["title"] = capUp(editTitle.value).trim();
        }

        if(editFirstName.value !== '') {
            npc["firstName"] = capUp(editFirstName.value).trim();
        }

        if(editLastName.value !== '') {
            npc["lastName"] = capUp(editLastName.value).trim();
        }

        if(editFolk.value !== '') {
            npc["folk"] = capUp(editFolk.value).trim();
        }

        if(editClass.value !== '') {
            npc["class"] = capUp(editClass.value).trim();
        }

        if(editAppearance.value !== '') {
            npc["appearance"] = capUp(editAppearance.value).trim();
        }

        if(editPersonality.value !== '') {
            npc["personality"] = capUp(editPersonality.value).trim();
        }

        if(editEquipment.value !== '') {
            npc["equipment"] = capUp(editEquipment.value).trim();
        }

        if(editSpeech.value !== '') {
            npc["speech"] = capUp(editSpeech.value).trim();
        }
        
        fetch(`http://localhost:3000/api/v1/npcs/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(npc)
        }).then((response) => response.json());
        window.location.reload();
    }

    function capUp(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function closeEditForm() {
        document.querySelector('.edit-form-modal').style.display = 'none';
        document.querySelector('.npc-edit-form').style.display = 'none';
    }
</script>

<template>
    <div class="edit-form-modal"></div>
        <div class="npc-edit-form">
            <div class="form-container">
                <div class="edit-form-dismiss">
                    <h2 class="edit-form-title"></h2>
                    <button @click="closeEditForm">X</button>
                </div>
                <form>
                    <input type="hidden" id="edit-id" name="id" value="">
                    <label for="edit-title">Title:<br/>
                        <input type="text" id="edit-title" name="title" v-model="editTitle">
                    </label>
                    <label for="edit-firstName">First Name:<br/>
                        <input type="text" id="edit-firstName" name="firstName" v-model="editFirstName">
                    </label>
                    <label for="edit-lastName">Last Name:<br/>
                        <input type="text" id="edit-lastName" name="lastName" v-model="editLastName">
                    </label>
                    <label for="edit-folk">Folk:<br/>
                        <input type="text" id="edit-folk" name="folk" v-model="editFolk">
                    </label>
                    <label for="edit-class">Class:<br/>
                        <input type="text" id="edit-class" name="class" v-model="editClass">
                    </label>
                    <label for="edit-appearance">Appearance:<br/>
                        <input type="text" id="edit-appearance" name="appearance" v-model="editAppearance">
                    </label>
                    <label for="edit-personality">Personality:<br/>
                        <input type="text" id="edit-personality" name="personality" v-model="editPersonality">
                    </label>
                    <label for="edit-equipment">Equipment:<br/>
                        <input type="text" id="edit-equipment" name="equipment" v-model="editEquipment">
                    </label>
                    <label for="edit-speech">Speech:<br/>
                        <input type="text" id="edit-speech" name="speech" v-model="editSpeech">
                    </label>
                    <label for="edit-alive">Alive:<br/>
                        <input type="checkbox" id="edit-alive" name="edit-alive" v-model="editAlive">
                    </label>
                    <button type="submit" @click="updateNpc">Update!</button>
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
        height: 100%;
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

    .edit-form-dismiss {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .edit-form-dismiss button {
        background-color: var(--vt-c-green);
        color: var(--vt-c-white-soft);
        height: 2rem;
        aspect-ratio: 1 / 1;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 700;        
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

    form button:hover,  .edit-form-dismiss button:hover {
        background-color: var(--vt-c-green-dark);
    }
    
    #edit-alive {
        width: 2rem;
        height: 2rem;
        margin: 0 0 auto 0;
        accent-color: var(--vt-c-green);
    }

    #alive:hover {
        accent-color: var(--vt-c-green-dark);
    }    
</style>
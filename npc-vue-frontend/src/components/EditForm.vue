<script setup>

    async function updateNpc(e) {
        e.preventDefault();
        console.log('editNpc');
        const id = document.querySelector('#edit-id').value;
        const npc = {
            title: capUp(document.querySelector('#edit-title').value).trim(),
            firstName: capUp(document.querySelector('#edit-first-name').value).trim(),
            lastName: capUp(document.querySelector('#edit-last-name').value).trim(),
            folk: capUp(document.querySelector('#edit-folk').value).trim(),
            class: capUp(document.querySelector('#edit-class').value).trim(),
            appearance: capUp(document.querySelector('#edit-appearance').value).trim(),
            personality: capUp(document.querySelector('#edit-personality').value).trim(),
            equipment: capUp(document.querySelector('#edit-equipment').value).trim(),
            speech: capUp(document.querySelector('#edit-speech').value).trim(),
            alive: document.getElementById("edit-alive").checked,
        };
        
        await fetch(`http://localhost:3000/api/v1/npcs/${id}`, {
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
    <div class="edit-form-modal">
        <div class="npc-edit-form">
            <div class="form-container">
                <div class="edit-form-dismiss">
                    <h2 class="edit-form-title"></h2>
                    <button @click="closeEditForm">X</button>
                </div>
                <form>
                    <input type="hidden" id="edit-id" name="id" value="">
                    <label for="edit-title">Title:<br/>
                        <input type="text" id="edit-title" name="title" value="">
                    </label>
                    <label for="edit-firstName">First Name:<br/>
                        <input type="text" id="edit-first-name" name="firstName" value="">
                    </label>
                    <label for="edit-lastName">Last Name:<br/>
                        <input type="text" id="edit-last-name" name="lastName" value="">
                    </label>
                    <label for="edit-folk">Folk:<br/>
                        <input type="text" id="edit-folk" name="folk" value="">
                    </label>
                    <label for="edit-class">Class:<br/>
                        <input type="text" id="edit-class" name="class" value="">
                    </label>
                    <label for="edit-appearance">Appearance:<br/>
                        <input type="text" id="edit-appearance" name="appearance" value="">
                    </label>
                    <label for="edit-personality">Personality:<br/>
                        <input type="text" id="edit-personality" name="personality" value="">
                    </label>
                    <label for="edit-equipment">Equipment:<br/>
                        <input type="text" id="edit-equipment" name="equipment" value="">
                    </label>
                    <label for="edit-speech">Speech:<br/>
                        <input type="text" id="edit-speech" name="speech" value="">
                    </label>
                    <label for="edit-alive">Alive:<br/>
                        <input type="checkbox" id="edit-alive" name="edit-alive" value="">
                    </label>
                    <button type="submit" @click="updateNpc">Update!</button>
                </form>
            </div>
        </div>
    </div>        
</template>

<style scoped>
    .edit-form-modal {
        display: none;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
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

    #edit-alive:hover {
        accent-color: var(--vt-c-green-dark);
    }    
</style>

<script setup>

    import { ref } from 'vue';
    import Form from './Form.vue';

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
</script>

<template>
    <div v-if="modalToggle" class="modal"></div>
        <div class="npc-form">
            <button class="form-call-dismiss" @click="callForm">
                <div class="arrow-left"></div>
            </button>
            <div class="form-container">
                <h2>Create an NPC</h2>
                <Form />
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
</style>
<template>
    <input class="input" :value="model" @input="onChange"/>
</template>

<script setup>
//vue
import { defineProps } from "vue"


//props
const props = defineProps({
    model: String,
    onChange: Function
})

</script>

<style scoped>
    .input {
        width: 100%;
        height: 60px;
        font-size: 30px;
        outline: none;
        border: 1px solid rgb(224, 220, 220);
        border-radius: 5px;
        padding: 10px 15px;
    }

    .input:focus {
        border: 1px solid rgb(7, 151, 247);
    }
</style>
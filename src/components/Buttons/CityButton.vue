<template>
  <button
    @click="$emit('action')"
    :class="['city-button', { 'city-button__active': active }]"
  >
    <slot />
  </button>
</template>

<script setup>
//vue
import { defineProps } from "vue";

//props
const props = defineProps({
  active: Boolean,
});
</script>

<style scoped>
.city-button {
  width: 300px;
  height: 60px;
  border: 1px solid rgb(7, 151, 247);
  border-radius: 5px;
  background-color: white;
  font-size: 24px;
  cursor: pointer;
}

.city-button__active {
  background-color: rgb(7, 151, 247);
  border-color: rgb(7, 151, 247);
  color: white;
}
</style>
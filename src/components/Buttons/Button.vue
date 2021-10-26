<template>
  <button @click="$emit('action')" class="button">
    <slot />
  </button>
</template>

<script setup>
</script>

<style scoped>
.button {
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background-color: rgb(7, 151, 247);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
</style>
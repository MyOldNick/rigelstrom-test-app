<template>
  <Header/>
  <div class="default-container">
    <slot/>  
  </div>
</template>

<script setup>
//components
import Header from "../components/Header/Header.vue"

</script>

<style scoped>

.default-container {
    max-width: 1200px;
    margin: 0 auto;
}

</style>
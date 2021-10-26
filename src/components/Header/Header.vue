<template>
  <div class="header">
    <h2
      @click="pushToRouter(el)"
      class="header__button"
      v-for="el in buttons"
      :key="el"
    >
      {{ el }}
    </h2>
  </div>
</template>

<script setup>
//vue
import { useRouter } from "vue-router";

//state
const buttons = ["Main", "Details"];

//hooks
const router = useRouter();

const pushToRouter = (name) => router.push({ name });
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: rgb(224, 220, 220);
}

.header__button {
  margin-right: 20px;
  user-select: none;
  cursor: pointer;
}
</style>
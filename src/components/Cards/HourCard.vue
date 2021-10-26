<template>
  <div class="hourcard">
    <h2>{{ props.time.split(" ").pop() }}</h2>
    <p>
      {{ props.text }}
      {{ props.temp }}&#8451;
    </p>
  </div>
</template>

<script setup>
//vue
import { defineProps } from "vue";

//props
const props = defineProps({
  time: String,
  text: String,
  temp: Number,
});
</script>

<style scoped>
.hourcard {
    width: 200px;
    height: 100px;
    padding: 15px;
    border: 1px solid rgb(224, 220, 220);
    border-radius: 5px;
}
</style>
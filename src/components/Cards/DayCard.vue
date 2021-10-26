<template>
  <div class="daycard">
      <p class="daycard__title">{{props.date.split("-").reverse().join("/")}}</p>
      <div class="daycard__main-info">
        <h2>{{props.weather}}</h2>
        <img :src="props.icon" alt="weather icon">
      </div>
      <p><span class="daycard__title">Max Temp: </span>{{props.maxtemp}} &#8451;</p>
      <p><span class="daycard__title">Min Temp: </span>{{props.mintemp}} &#8451;</p>
  </div>
</template>

<script setup>
//vue
import { defineProps } from "vue";


const props = defineProps({
    weather: String,
    icon: String,
    date: String,
    maxtemp: Number,
    mintemp: Number
});

</script>

<style scoped>
    .daycard {
        width: 32%;
        height: 200px;
        border: 1px solid rgb(224, 220, 220);
        border-radius: 5px;
        padding: 20px 20px;
    }

    .daycard__main-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
    }

    .daycard__title {
        font-weight: bold;
    }
</style>
<template>
  <h1 class="details__title">{{ Store.activeCity.name }}</h1>
  <div class="details">
    <HourCard
      v-for="{ condition, time, temp_c } in Store.forecast.value[0].hour"
      :key="time"
      :time="time"
      :temp="temp_c"
      :text="condition.text"
    />
  </div>
</template>

<script setup>
//vue
import { onMounted } from "vue";
import { useRoute } from "vue-router";
//store
import Store from "../store";
//components
import HourCard from "../components/Cards/HourCard.vue";

//hooks
const route = useRoute();

onMounted(() => checkRoute());

//methods
const checkRoute = () => {

  const { city } = route.params;

  city && Store.getForecast(city);
  
};
</script>

<style scoped>
.details {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 130px);
}

.details__title {
  margin-top: 50px;
}
</style>
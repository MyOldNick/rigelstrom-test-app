<template>
  <div class="main">
    <div class="main__city-buttons">
      <CityButton
        @action="findCity(el)"
        v-for="el in cityButtons"
        :key="el"
        :active="el === Store.activeCity.name ? true : false"
      >
        {{ el }}
      </CityButton>
    </div>
    <h2 class="main__search-title">Search</h2>
    <div class="main__search">
      <Input :model="cityName" :onChange="onChange" />
      <Button @action="findCity" class="main__search-button">Search</Button>
    </div>
    <CityCard
      :name="Store.activeCity.name"
      :region="Store.activeCity.region"
      :localtime="Store.activeCity.localtime"
      class="main__citycard"
    />
    <div class="main__cards-container">
      <DayCard
        v-for="{ day, date } in Store.forecast.value"
        :key="date"
        :weather="day.condition.text"
        :icon="day.condition.icon"
        :date="date"
        :maxtemp="day.maxtemp_c"
        :mintemp="day.mintemp_c"
        class="main__day-card"
      />
    </div>
  </div>
</template>

<script setup>
//vue
import { ref } from "vue";
//store
import Store from "../store";
//components
import Input from "../components/Inputs/Input.vue";
import CityCard from "../components/Cards/CityCard.vue";
import DayCard from "../components/Cards/DayCard.vue";
import Button from "../components/Buttons/Button.vue";
import CityButton from "../components/Buttons/CityButton.vue";

//state
const cityName = ref("");
const cityButtons = ["Moscow", "Bratislava", "Minsk"];

//methods

const onChange = ({ target }) => (cityName.value = target.value);

const findCity = (city) => {

  Store.getForecast(city || cityName.value);

  cityName.value = "";
  
};
</script>

<style scoped>
.main {
  margin-top: 50px;
}

.main__cards-container {
  display: flex;
  justify-content: space-between;
}

.main__day-card {
  margin-top: 20px;
}

.main__citycard {
  margin-top: 20px;
}

.main__search {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.main__search-title {
  margin-left: 20px;
}

.main__search-button {
  margin-left: 20px;
}

.main__city-buttons {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
</style>
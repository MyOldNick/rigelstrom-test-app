<template>
  <component :is="activeLayout">
    <router-view />
  </component>
</template>

<script setup>
//vue
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
//layouts
import Default from "./layouts/Default.vue";
//utils
import StorageService from "./utils/StorageService";
//store
import Store from "./store/index";

//hooks
const route = useRoute();

onMounted(() => {

  checkStorage()

  window.addEventListener("beforeunload", saveData);

});

//computed
const activeLayout = computed(() => route.meta.layout || Default);

//methods
const saveData = () => StorageService.setData("city", Store.activeCity.name);

const checkStorage = () => {

  const city = StorageService.getData("city");

  Store.getForecast(city || "Moscow");

}

</script>


<style>
* {
  margin: 0 0;
  padding: 0 0;
  box-sizing: border-box;
}
</style>

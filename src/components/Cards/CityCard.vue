<template>
  <div class="citycard">
    <h2>{{ props.name }}</h2>
    <h3>{{ props.region }}</h3>
    <p v-if="props.localtime">
      {{
        new Date(props.localtime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      }}
    </p>
  </div>
</template>

<script setup>
//vue
import { defineProps } from "vue"


//props
const props = defineProps({
    name: String,
    region: String,
    localtime: String
})

</script>

<style scoped>
.citycard {
    padding: 20px 20px;
    border: 1px solid rgb(224, 220, 220);
    border-radius: 5px;
}
</style>
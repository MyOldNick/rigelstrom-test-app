//vue
import { reactive, ref } from "vue"
//axios
import axios from "axios"


class Store {

    activeCity = reactive({});
    forecast = ref([]);


    async getForecast(city) {

        const { data } = await axios.get("/forecast.json", { params: { q: city, days: 3 } })

        const { location, forecast } = data

        this.forecast.value = forecast.forecastday

        Object.assign(this.activeCity, location)

    }

}

export default new Store();
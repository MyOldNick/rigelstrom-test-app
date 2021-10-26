//vue
import { createApp } from 'vue'
//app
import App from './App.vue'
//axios
import axios from "axios"
import VueAxios from 'vue-axios'
import "./plugins/api"
//router
import router from "./router"


const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)

app.mount('#app')

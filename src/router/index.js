//router
import { createRouter, createWebHistory } from "vue-router"


const routes = [

    {
        path: '/',
        name: "Main",
        component: () => import('../views/Main.vue')
    },

    {
        path: '/details',
        name: "Details",
        component: () => import('../views/Details.vue')
    },

    {
        path: '/details/:city',
        name: "DetailsInCity",
        component: () => import('../views/Details.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
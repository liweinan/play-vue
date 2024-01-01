/* *router/index.ts */
import {
    createRouter,
    createWebHistory,
    type RouteLocationNormalizedLoaded,
    type RouteRecordRaw
} from 'vue-router';

import HomeView  from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PizzasView from "../views/PizzasView.vue";
import ContactView from "../views/ContactView.vue";
import LoginView from "../views/LoginView.vue";

const routes:RouteRecordRaw[]  = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/pizzas',
        name: 'pizzas',
        component: PizzasView,
        props: (route: RouteLocationNormalizedLoaded) => ({
            searchTerm: route.query?.search || "",
        }),
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    }
]

export const router = createRouter({
    history: createWebHistory("https://your-domain-name"),
    // history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
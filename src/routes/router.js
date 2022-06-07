import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue';
import Dashboard from '../views/Dashboard.vue';



const routes = [
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/btc',
        component: Dashboard,
    },
    {
        path: '/eth',
        component: Dashboard
    },
    {
        path: '/dacxi',
        component: Dashboard
    },
    {
        path: '/atom',
        component: Dashboard
    },
    {
        path: '/luna',
        component: Dashboard
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
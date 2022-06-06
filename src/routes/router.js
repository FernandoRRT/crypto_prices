import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue';
import Dashboard from '../views/Dashboard.vue';



const routes = [
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/bitcoin',
        component: Dashboard
    },
    {
        path: '/ethereum',
        component: Dashboard
    },
    {
        path: '/dacxi',
        component: Dashboard
    },
    {
        path: '/cosmos',
        component: Dashboard
    },
    {
        path: '/terra-luna-2',
        component: Dashboard
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
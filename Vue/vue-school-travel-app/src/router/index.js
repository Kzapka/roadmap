import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/brazil', name: 'brazil', component: () => ('@/views/Brazil.vue') },
    { path: '/havai', name: 'havai', component: () => ('@/views/Havai.vue') },
    { path: '/jamaica', name: 'jamaica', component: () => ('@/views/Jamaica.vue') },
    { path: '/panama', name: 'panama', component: () => ('@/views/Panama.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
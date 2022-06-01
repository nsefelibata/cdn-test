import { createRouter, createWebHistory } from 'vue-router'
import constantRoutes from './constant'
const router = createRouter({
    routes: constantRoutes,
    history: createWebHistory()
})

export default router
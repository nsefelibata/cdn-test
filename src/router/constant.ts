import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/',
        name: 'Layout',
        children: []
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login')
    }
]

export default routes
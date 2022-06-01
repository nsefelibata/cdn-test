import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/',
        name: 'Layout',
        children: []
    }
]

export default routes
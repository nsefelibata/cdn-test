import { createApp } from 'vue'
import App from './App'
import router from '@/router'
import useElementPlus from '@/utils/lazyload-element'

import "@/styles/index.scss"
import axios from 'axios'

const Vue = createApp(App)
useElementPlus(Vue)
Vue.use(router)
Vue.mount('#app')

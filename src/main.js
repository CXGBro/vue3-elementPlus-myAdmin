import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './router/permission'
import ElementUI from './plugins/elementui'
import SvgIcon from '@/components/svgIcon/Index.vue'

import 'normalize.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementUI)

// 在这里注册全局组件
app.component('svg-icon',SvgIcon).mount('#app')

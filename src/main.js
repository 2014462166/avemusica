import './assets/main.css'
import {createPinia} from "pinia"
import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible-computer'
import {router} from "./router/index.ts"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';




const app = createApp(App)
const pinia =  createPinia()
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')

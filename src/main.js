import './assets/main.css'
import {createPinia} from "pinia"
import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible-computer'
import {router} from "./router/index.ts"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import axios from "axios";


//设置后端地址（本地或服务器），会将请求转发到后端端口
axios.defaults.baseURL = ("http://localhost:8080");
axios.defaults.timeout = 30000;



const app = createApp(App)

app.use(ElementPlus)


app.use(router)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible-computer'
import {router} from "./router/index.ts"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';

import {axios} from "./utils/request.ts"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//设置后端地址（本地或服务器），会将请求转发到后端端口
axios.defaults.baseURL = ("http://localhost:8080");
axios.defaults.timeout = 30000;
//const bodyParser = require('body-parser');


const app = createApp(App)

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(router)

app.mount('#app')

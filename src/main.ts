import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// if (process.env.NODE_ENV === "development") {
//     require("./mock");
// }
// import axios from '@/src/plugins/axiosInstance.js'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).use(store).use(router).mount('#app')

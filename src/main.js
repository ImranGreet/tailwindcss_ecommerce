import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import productInfo from "@/components/utility/productInfo.vue";
createApp(App)
.component('globalProductInfo',productInfo)
.use(store)
.use(router)
.mount('#app')

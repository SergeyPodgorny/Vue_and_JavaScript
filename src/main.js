import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";

createApp(App).use(store).user(router).mount('#app')

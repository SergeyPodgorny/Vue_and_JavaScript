import { createRouter,createWebHashHistory } from "vue-router";
import LoginFormView from "../views/LoginView.vue";


const routes = [
    { path: '/', component: LoginFormView, alias: '/' },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router


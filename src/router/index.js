import { createRouter,createWebHashHistory } from "vue-router";
import LoginFormView from "../views/LoginFormView.vue";


const routes = [
    { path: '/', component: LoginFormView },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router


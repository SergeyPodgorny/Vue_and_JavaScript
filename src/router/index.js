import Vue from'vue'
import Router from 'vue-router'
import LoginFormView from "../views/LoginFormView.vue";

const routes = [
    {
    path: "/",
    name: "login",
    component: LoginFormView,
    }
]
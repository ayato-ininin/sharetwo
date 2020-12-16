import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Profile from "../views/Profile.vue";
import Detail from "../views/Detail.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,f
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
    meta: {
      requiresAuth: true,
    },
    props:true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
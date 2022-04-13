import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/home-component.vue";
import Login from "./components/login-component.vue";
import Register from "./components/register-component.vue";
// lazy-loaded
const Profile = () => import("./components/profile-component.vue");
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
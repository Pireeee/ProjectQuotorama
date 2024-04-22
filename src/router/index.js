import { createRouter, createWebHistory } from "vue-router";
import Quotes from "../components/QuotesComponent.vue";
import CGU from "../components/CGUComponent.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Default route : redirect to Quotes
      path: "/",
      name: "Quotes",
      component: Quotes,
    },

    {
      // CGU route
      path: "/cgu",
      name: "CGU",
      component: CGU,
    },
    {
      // admin route
      path: "/admin",
      name: "Admin",
      component: () => import("../components/AdminComponent.vue"),
    },

    {
      // login route
      path: "/login",
      name: "Login",
      component: () => import("../components/LoginComponent.vue"),
    },
    {
      // register route
      path: "/register",
      name: "Register",
      component: () => import("../components/RegisterComponent.vue"),
    }
  ],
});

export default router;

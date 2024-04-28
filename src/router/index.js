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
      params: { admin: true },
      component: () => import("../components/AdminComponent.vue"),
    },
  ],
});

export default router;

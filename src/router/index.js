import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/IndexView.vue"),
      children: [
        {
          path: "/",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/products",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: "/product/:id",
          component: () => import("../views/ProductView.vue"),
        },
        // {
        //   path: "/product/:id",
        //   // path: "/product/:id",
        //   component: () => import("../views/ProductsDetailView.vue"),
        // },
        {
          path: "/cart",
          component: () => import("../views/CartView.vue"),
        },
        {
          path: "/contactus",
          component: () => import("../views/ContactView.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          component: () => import("../views/HomeView.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/admin/IndexView.vue"),
      children: [
      ],
    },
  ],
});

export default router;

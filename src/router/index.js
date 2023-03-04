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
          path: "/products",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: "/product",
          // path: "/product/:id",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          component: () => import("../views/HomeView.vue"),
        },
      ],
    },
    // {
    //   path: "/login",
    //   component: () => import("../views/LoginView.vue"),
    // },
    {
      path: "/admin",
      component: () => import("../views/admin/IndexView.vue"),
      children: [
      ],
    },
  ],
});

export default router;

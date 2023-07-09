import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "FirstPage",
    component: () => import("../views/FirstPage.vue"),
  },
  {
    path: "/2",
    name: "SecondPage",
    component: () => import("../views/SecondPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import contants from "./modules";
import Welcome from "@/views/Welcome/index.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      redirect: "/welcome",
      children: [
        {
          path: "/welcome",
          name: "welcome",
          meta: {
            locale: "欢迎",
            icon: "icon-apps",
          },
          component: Welcome,
        },
        ...contants,
      ],
    },
  ],
});

export default router;

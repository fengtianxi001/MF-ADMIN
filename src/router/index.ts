import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import { reduce } from "loadsh";

//动态路由表
export const asyncRoutes = reduce(
  import.meta.glob("./modules/*.ts", { eager: true }),
  (prev, cur) => [...prev, ...cur.default],
  []
);

//静态路由表
const syncRoutes = {
  home: {
    path: "/welcome",
    name: "welcome",
    meta: {
      locale: "欢迎",
      icon: "icon-apps",
    },
    component: () => import("@/views/Welcome/index.vue"),
  },
};

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      redirect: "/welcome",
      children: [syncRoutes.home, ...asyncRoutes],
    },
  ],
});

export default router;

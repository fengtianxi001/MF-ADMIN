import { IconApps, IconDragDot } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const form: routesType[] = [
  {
    path: "/test",
    name: "test",
    meta: {
      locale: "测试页面",
      icon: IconApps,
    },
    component: RouterView,
    children: [
      {
        path: "/test/pagea",
        name: "testPageA",
        meta: {
          locale: "测试页面A",
          icon: IconApps,
        },
        component: () => import("@/views/Test/PageA/index.vue"),
      },
      {
        path: "/test/pageb",
        name: "testPageB",
        meta: {
          locale: "测试页面B",
          icon: IconApps,
        },
        component: () => import("@/views/Test/PageB/index.vue"),
      },
    ],
  },
];

export default form;

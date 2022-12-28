import { IconApps } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const form: routesType[] = [
  {
    path: "/form",
    name: "form",
    meta: {
      locale: "表单",
      icon: IconApps,
    },
    component: RouterView,
    children: [
      {
        path: "/form/base",
        name: "formBase",
        meta: {
          locale: "基本表单",
          icon: IconApps,
        },
        component: () => import("@/views/Table/index.vue"),
      },
      {
        path: "/form/step",
        name: "formStep",
        meta: {
          locale: "分布表单",
          icon: IconApps,
        },
        component: () => import("@/views/Table/index.vue"),
      },
    ],
  },
];

export default form;

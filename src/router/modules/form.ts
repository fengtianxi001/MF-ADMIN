import { IconApps } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

export default [
  {
    path: "/form",
    name: "form",
    meta: {
      locale: "系统表单",
      icon: IconApps,
    },
    component: RouterView,
    children: [
      {
        path: "/form/base",
        name: "formBase",
        meta: {
          locale: "基础表单",
          icon: IconApps,
        },
        component: () => import("@/views/Form/FormBase/index.vue"),
      },
    ],
  },
] as routesType[];

import { IconApps, IconDragDot } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const form: routesType[] = [
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
          icon: IconDragDot,
        },
        component: () => import("@/views/Form/FormBase/index.vue"),
      },
      {
        path: "/form/step",
        name: "formStep",
        meta: {
          locale: "分步表单",
          icon: IconDragDot,
        },
        component: () => import("@/views/Form/FormStep/index.vue"),
      },
    ],
  },
];

export default form;

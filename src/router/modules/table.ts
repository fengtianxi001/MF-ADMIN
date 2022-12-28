import { IconApps } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const table: routesType[] = [
  {
    path: "/table",
    name: "table",
    meta: {
      locale: "表格",
      icon: IconApps,
    },
    component: RouterView,
    children: [
      {
        path: "/table/base",
        name: "tableBase",
        meta: {
          locale: "基本表格",
          icon: IconApps,
        },
        component: () => import("@/views/Table/index.vue"),
      },
    ],
  },
];

export default table;

import { IconApps, IconDragDot } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const table: routesType[] = [
  {
    path: "/table",
    name: "table",
    meta: {
      locale: "系统表格",
      icon: IconApps,
    },
    redirect: "/table/base",
    component: RouterView,
    children: [
      {
        path: "/table/base",
        name: "tableBase",
        meta: {
          locale: "基础表格",
          icon: IconDragDot,
        },
        component: () => import("@/views/Table/TableBase/index.vue"),
      },
      {
        path: "/table/inline-edit",
        name: "tableInlineEdit",
        meta: {
          locale: "编辑表格",
          icon: IconDragDot,
        },
        component: () => import("@/views/Table/TableInlineEdit/index.vue"),
      },
    ],
  },
];

export default table;

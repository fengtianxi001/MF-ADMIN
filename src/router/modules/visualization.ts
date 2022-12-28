import { IconApps } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const visualization: routesType[] = [
  {
    path: "/visualization",
    name: "visualization",
    meta: {
      locale: "数据可视化",
      icon: IconApps,
    },
    component: RouterView,
    children: [
      {
        path: "/visualization/base",
        name: "tableBase",
        meta: {
          locale: "多维数据分析",
          icon: IconApps,
        },
        component: () => import("@/views/Table/index.vue"),
      },
    ],
  },
];

export default visualization;

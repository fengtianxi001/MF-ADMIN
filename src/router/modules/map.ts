import { IconApps } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";
import type { routesType } from "../types";

const map: routesType[] = [
  {
    path: "/map",
    name: "map",
    meta: {
      locale: "摄像机",
      icon: IconApps,
    },
    redirect: "/map/base",
    component: RouterView,
    children: [
      {
        path: "/map/base",
        name: "mapBase",
        meta: {
          locale: "基础地图",
          icon: IconApps,
        },
        component: () => import("@/views/Camera/Cameras/index.vue"),
      },
    ],
  },
];

export default map;

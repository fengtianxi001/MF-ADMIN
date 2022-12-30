import type { RouteRecordRaw } from "vue-router";
export type routesType = RouteRecordRaw & {
  meta: {
    roles?: string[]; //配置能访问该页面的角色，如果不匹配，则会被禁止访问该路由页面
    requiresAuth?: boolean; //是否需要登录鉴权
    icon?: any; // 菜单配置icon
    locale: string; //菜单名
    hideInMenu?: boolean; //是否在左侧菜单中隐藏该
    hideChildrenInMenu?: boolean; //强制在左侧菜单中显示单项
    activeMenu?: boolean; //高亮设置的菜单项
    order?: boolean; //排序路由菜单项。如果设置该值，值越高，越靠前
    noAffix?: boolean; //如果设置为true，标签将不会添加到tab-bar中
    ignoreKeepAlive?: boolean; //如果设置为true页面将不会被缓存
  };
  children?: routesType[];
};

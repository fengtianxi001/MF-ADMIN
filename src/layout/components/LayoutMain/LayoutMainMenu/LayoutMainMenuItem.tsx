import { size } from "lodash";
import { defineComponent, type PropType } from "vue";
import type { routesType } from "@/router/types";
import { SubMenu, MenuItem } from "@arco-design/web-vue";

const LayoutMainMenuItem = defineComponent({
  name: "LayoutMainMenuItem",
  props: {
    routes: {
      type: Array as PropType<routesType[]>,
      required: true,
    },
  },
  setup(props) {
    const hasChild = (route: routesType) => {
      if (!route.children) return false;
      const cache = route.children.filter((item) => !item.meta?.hideInMenu);
      return size(cache) >= 1;
    };
    const hasOnlyOneChild = (route: routesType) => {
      const cache = route.children?.filter((item) => !item.meta?.hideInMenu);
      return size(cache) === 1;
    };
    return () => {
      return props.routes.map((route) => {
        if (!hasChild(route)) {
          return (
            <MenuItem key={route.path}>
              {{
                default: () => <span>{route?.meta?.locale}</span>,
                icon: () => <route.meta.icon class="menu-icon" />,
              }}
            </MenuItem>
          );
        } else if (hasOnlyOneChild(route)) {
          const cache = route.children![0];
          return (
            <MenuItem key={cache.path}>
              {{
                default: () => <span>{cache?.meta?.locale}</span>,
                icon: () => <cache.meta.icon class="menu-icon" />,
              }}
            </MenuItem>
          );
        } else {
          return (
            <SubMenu key={route.path}>
              {{
                title: () => <span>{route?.meta?.locale}</span>,
                icon: () => <route.meta.icon class="menu-icon" />,
                default: () => <LayoutMainMenuItem routes={route!.children} />,
              }}
            </SubMenu>
          );
        }
      });
    };
  },
});

export default LayoutMainMenuItem;

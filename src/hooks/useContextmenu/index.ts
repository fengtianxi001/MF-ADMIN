import { createVNode, render } from "vue";
import ContextMenu from "./components/ContextMenu.vue";
import type { ContextmenuItemType } from "./types";

export type OptionsType = ContextmenuItemType[];

function useContextmenu(options: OptionsType) {
  const onContextmenu = (event: MouseEvent) => {
    const template = document.createElement("template");
    const params = {
      left: event.clientX,
      top: event.clientY,
      zIndex: 999,
      minWidth: 100,
    };
    const instance = createVNode(ContextMenu, { options, params });
    render(instance, template);
    document.body.appendChild(instance.el as HTMLElement);
  };
  return {
    onContextmenu,
  };
}

export default useContextmenu;

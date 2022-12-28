import { type Ref, ref, computed } from "vue";

import { IconCaretUp, IconCaretDown } from "@arco-design/web-vue/es/icon";

function useCollapseDom(container: Ref<HTMLElement | undefined>) {
  const collapsed = ref(false);
  const icon = computed(() => {
    if (collapsed.value) return IconCaretDown;
    return IconCaretUp;
  });
  const toggle = () => {
    collapsed.value = !collapsed.value;
    collapsed.value ? onHide() : onShow();
  };

  const onShow = () => {
    const element = container.value as HTMLElement;
    element.style.overflow = "hidden";
    const height = element.children[0].clientHeight + "px";
    element.style.height = height;
    element.style.opacity = "1";
  };

  const onHide = () => {
    const element = container.value as HTMLElement;
    const height = element.children[0].clientHeight + "px";
    element.style.height = height;
    setTimeout(() => {
      element.style.height = "0px";
      element.style.padding = "0px";
      element.style.opacity = "0";
    }, 0);
  };

  return {
    collapsed,
    icon,
    toggle,
  };
}
export default useCollapseDom;

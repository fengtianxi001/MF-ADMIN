<template>
  <transition name="contextmenu-submenu-fade">
    <div
      v-if="visible"
      class="contextmenu"
      :style="menuStyle"
      @contextmenu="(e) => e.preventDefault()"
    >
      <ul class="contextmenu_body">
        <li
          v-for="(item, index) in options"
          :key="index"
          @mousedown="onClick(item.click)"
        >
          <component :is="item.icon" v-if="item.icon" />
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { ContextmenuItemType } from "../types";
import { useVisible } from "@/hooks";
import { isFunction } from "lodash";

interface PropsType {
  options: Array<ContextmenuItemType>;
  params: {
    left: number;
    top: number;
    zIndex: number;
    minWidth: number;
  };
}
const props = defineProps<PropsType>();
const mouseDownListener = () => {
  hide();
};
const mouseWheelListener = () => {
  // console.log("wheel");
};
const { visible, hide } = useVisible(true, {
  onBeforeShow: () => {
    document.addEventListener("mousedown", mouseDownListener);
    document.addEventListener("mousewheel", mouseWheelListener);
  },
  onBeforeHide: () => {
    document.removeEventListener("mousedown", mouseDownListener);
    document.removeEventListener("mousewheel", mouseWheelListener);
  },
});
const menuStyle = computed(() => {
  const { left, top, zIndex, minWidth } = props.params;
  return {
    left: left + "px",
    top: top + "px",
    minWidth: minWidth + "px",
    zIndex: zIndex,
  };
});
const onClick = (cb: (() => void) | undefined) => {
  isFunction(cb) && cb();
};
//监听用户点击操作
</script>
<style lang="scss" scoped>
.contextmenu {
  position: fixed;
  border-radius: var(--border-radius-small);
  background-color: var(--color-bg-popup);
  border: 1px solid var(--color-fill-3);
  .contextmenu_body {
    padding: 4px;
    li {
      padding: 4px 8px;
      height: 26px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      border-radius: var(--border-radius-small);
      color: var(--color-text-2);
      &:hover {
        background-color: var(--color-fill-2);
        color: rgb(var(--primary-6));
      }
    }
  }
}
</style>
<style>
.contextmenu-submenu-fade-enter-active,
.contextmenu-submenu-fade-leave-active {
  transition: opacity 0.1s;
}

.contextmenu-submenu-fade-enter,
.contextmenu-submenu-fade-leave-to {
  opacity: 0;
}
</style>

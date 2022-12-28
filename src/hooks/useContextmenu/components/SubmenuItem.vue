<template>
  <div
    class="contextmenu_item"
    :class="{ needHover: !item.children }"
    @mousedown.stop.self="onClick(item)"
  >
    <div class="contextmenu_item_icon">
      <component v-if="item.icon" :is="icons[item.icon]" />
    </div>
    <div class="contextmenu_item_label">
      <span>{{ item.label }}</span>
      <ul v-if="item.children" class="contextmenu_item_children">
        <li
          v-for="(child, index) in item.children"
          :key="index"
          @mousedown.stop.self="child.click"
        >
          {{ child.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ContextmenuItemType } from "../types";
import * as icons from "@arco-design/web-vue/es/icon";
interface PropsType {
  item: ContextmenuItemType;
}
const props = defineProps<PropsType>();
const onClick = (item: ContextmenuItemType) => {
  //console.log('submenuItem:item.click', item);
  if (item.click) item.click();
};
</script>
<style lang="scss" scoped>
.contextmenu_item {
  font-size: 13px;
  line-height: 30px;
  color: #fff;
  padding: 0 4px;
  cursor: pointer;
  display: flex;
  grid-gap: 4px;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &.needHover:hover {
    background-color: #ffffff1a;
  }
  .contextmenu_item_icon {
    width: 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contextmenu_item_label {
    flex: 1;
  }
}
.contextmenu_item_children {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 8px;
  margin-bottom: 6px;
  margin-top: 2px;
  padding-right: 20px;
  position: relative;
  z-index: 99999;
  li {
    display: flex;
    width: 100%;
    height: 22px;
    font-size: 12px;
    border-radius: 10px;
    background-color: #ffffff1a;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #ffffff4d;
    }
  }
}
</style>

<template>
  <div class="layout-main-tabs">
    <BaseContextmenu
      v-for="(item, index) in list"
      :key="index"
      :configs="item.contextmenu"
    >
      <div
        class="tab-item"
        :class="{ active: item.active.value }"
        @click="item.onClick"
      >
        <component v-if="item.icon" :is="item.icon" class="tab-item-icon" />
        <span>{{ item.origin.title }}</span>
      </div>
    </BaseContextmenu>
  </div>
</template>
<script setup lang="ts">
import BaseContextmenu from "@/components/BaseContextmenu/index.vue";
import { useTabs } from "@/stores/tabs";
import { computed, toRefs } from "vue";
import { IconPushpin, IconHeart } from "@arco-design/web-vue/es/icon";
const tabsStore = useTabs();
const { tabs, current } = toRefs(tabsStore);

const list = computed(() => {
  return tabs.value.map((item) => {
    const isHome = item.path === "/";
    const contextmenu = [
      {
        label: "重新加载",
        click: () => tabsStore.tabReload(item),
      },
      {
        label: "关闭其他",
        click: () => tabsStore.tabOthersClose(item),
      },
      {
        label: item.fixed ? "取消固定" : "固定",
        disabled: isHome,
        click: () => tabsStore.tabToggleFixed(item),
      },
      {
        label: "关闭",
        disabled: isHome,
        click: () => tabsStore.tabClose(item),
      },
    ];
    return {
      origin: item,
      contextmenu,
      active: computed(() => current.value.path === item.path),
      icon: isHome ? IconHeart : item.fixed ? IconPushpin : null,
      onClick: () => tabsStore.tabChange(item),
    };
  });
});
</script>
<style lang="scss" scoped>
@import "../../../styles/variable.scss";
.layout-main-tabs {
  @include flex(row, $justify: flex-start, $align: center, $gap: 6px);
  width: 100%;
  overflow-x: auto;
  position: fixed;
  top: calc(1px + #{$layout_header_height});
  left: 0;
  width: 100%;
  height: 34px;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  padding: 5px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  .tab-item {
    @include flex(row, $justify: center, $align: center);
    position: relative;
    height: 100%;
    padding: 0 6px;
    flex-shrink: 0;
    font-size: 12px;
    user-select: none;
    background-color: var(--color-fill-2);
    color: var(--color-text-1);
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    overflow: hidden;

    &.active {
      color: #fff;
      background-color: rgb(var(--primary-6));
    }
    .tab-item-icon {
      margin-right: 4px;
    }
  }
}
</style>

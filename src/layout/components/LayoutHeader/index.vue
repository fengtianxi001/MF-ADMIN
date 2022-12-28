<template>
  <div class="layout-header">
    <div class="layout-header-main">
      <BaseBrand />
      <div class="header-operate">
        <div
          v-for="(item, index) in OPERATE_LIST"
          :key="index"
          class="header-operate-item"
          @click="item.onClick"
        >
          <component :is="item.icon" />
        </div>
        <AuthorProfile />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { IconQuestion } from "@arco-design/web-vue/es/icon";
import { useTheme, useFullscreen, useGuide } from "@/hooks";
import BaseBrand from "@/components/BaseBrand/index.vue";
import guideStep from "./guideStep";
import AuthorProfile from "./AuthorProfile.vue";

const { themeIcon, themeToggle } = useTheme();
const { fullscreenIcon, fullscreenToggle } = useFullscreen();
const { guideStart } = useGuide(guideStep);

const OPERATE_LIST = reactive([
  {
    icon: themeIcon,
    onClick: themeToggle,
  },
  {
    icon: fullscreenIcon,
    onClick: fullscreenToggle,
  },
  {
    icon: IconQuestion,
    onClick: guideStart,
  },
]);
</script>
<style lang="scss" scoped>
@import "../../styles/variable.scss";
.layout-header {
  @include flex($justify: center, $align: center);
  @include position($position: fixed, $top: 0, $left: 0, $z-index: 100);
  height: $layout_header_height;
  -webkit-app-region: drag;
  user-select: none;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  .layout-header-main {
    @include flex($justify: space-between, $align: center);
    flex: 1;
    color: #fff;
    height: 100%;
  }
  .header-operate {
    height: 100%;
    padding: 0 12px;
    @include flex($justify: flex-end, $align: center, $gap: 10px);
    .header-operate-item {
      @include flex($justify: center, $align: center);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid rgb(var(--gray-2));
      background-color: var(--color-fill-2);
      color: rgb(var(--gray-8));
      cursor: pointer;
    }
  }
}
</style>

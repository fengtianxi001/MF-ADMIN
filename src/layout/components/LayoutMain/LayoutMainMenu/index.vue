<template>
  <a-menu
    class="layout-content-menu"
    :level-indent="10"
    :selected-keys="selectedKey"
    :style="{ width: '190px' }"
    show-collapse-button
    auto-open
    @menu-item-click="onMenuItemClick"
  >
    <LayoutMainMenuItem :routes="asyncRoutes" />
  </a-menu>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { asyncRoutes } from "@/router";
import LayoutMainMenuItem from "./LayoutMainMenuItem";

const route = useRoute();
const router = useRouter();
const selectedKey = computed(() => [route.path]);
const onMenuItemClick = (key: string) => router.push(key);
</script>
<style lang="scss" scoped>
@import "../../../styles/variable.scss";
.layout-content-menu {
  @include position($position: fixed, $top: 0, $left: 0, $z-index: 99);
  user-select: none;
  height: $layout-content-height;
  margin-top: $layout_header_height;
  border-right: 1px solid var(--color-border);
  :deep(.arco-menu-icon) {
    font-size: 18px;
  }
}
</style>

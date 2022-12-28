<template>
  <div
    class="base-collapse"
    :class="{ collapsed: collapsed }"
    :style="style"
    @dblclick.stop="() => {}"
    @mousedown.stop="() => {}"
    @mouseover.stop="() => {}"
    @wheel.stop.passive="() => {}"
  >
    <div class="collapse-title" @click.stop="toggle">
      <span>{{ title }}</span>
      <component :is="icon"></component>
    </div>
    <div ref="container" class="collapse-content">
      <a-spin :loading="loading" tip="信息加载中">
        <slot></slot>
      </a-spin>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCollaspeDom } from "@/hooks";
import { computed } from "vue";
import { ref } from "vue";

interface PropsType {
  title: string;
  width?: string;
  loading?: boolean;
}
const props = defineProps<PropsType>();
const container = ref();
const { icon, collapsed, toggle } = useCollaspeDom(container);
const style = computed(() => ({ width: props.width || "auto" }));
</script>
<style lang="scss" scoped>
.base-collapse {
  width: 200px;
  cursor: default;
  background-color: var(--color-bg-2);
  .collapse-title {
    display: flex;
    padding: 10px 10px 10px 20px;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
    color: var(--color-text-1);

    &::before {
      content: "";
      position: absolute;
      left: 10px;
      width: 3px;
      height: 14px;
      background-color: rgb(var(--primary-6));
    }
  }
  .collapse-content {
    transition: height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    & > div {
      padding: 0 10px 10px;
      width: 100%;
    }
  }
}
</style>

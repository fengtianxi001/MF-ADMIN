<template>
  <BaseContextmenu :configs="element.contextmenu">
    <div
      class="tab-item handle"
      :class="{ active: element.active.value }"
      @click="element.onClick"
      :data-draggable="true"
    >
      <component v-if="element.icon" :is="element.icon" class="tab-item-icon" />
      <span>{{ element.origin.title }}</span>
    </div>
  </BaseContextmenu>
</template>
<script setup lang="ts">
import BaseContextmenu from "@/components/BaseContextmenu/index.vue";
interface PropsType {
  element: any;
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
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
</style>

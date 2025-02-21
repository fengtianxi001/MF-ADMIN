<template>
  <div class="layout-tabs">
    <div class="tabs-left">
      <div class="tabs-arrow">
        <TabArrow
          :on-scroll="onScroll"
          :visible="overflow"
          direction="forward"
        />
      </div>
    </div>
    <div class="tabs-midden" ref="container">
      <TabCard v-for="(tab, index) in tabs" :key="index" :data="tab" />
    </div>
    <div class="tabs-right">
      <div class="tabs-arrow">
        <TabArrow
          :on-scroll="onScroll"
          :visible="overflow"
          direction="backward"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTabs } from './hooks'
import { watch, nextTick } from 'vue'
import { tabs } from '@/layout/stores/tabs'

import TabCard from './TabCard.vue'
import TabArrow from './TabArrow.vue'

const { container, overflow, onOverflow, onScroll, onScrollToActive } =
  useTabs()

watch(
  () => tabs,
  () => {
    nextTick(() => {
      onScrollToActive()
      onOverflow()
    })
  },
  {
    deep: true,
    immediate: true,
  }
)
</script>
<style lang="scss" scoped>
.layout-tabs {
  box-sizing: border-box;
  display: flex;
  grid-gap: 4px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  padding: 0 4px;
  user-select: none;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  .tabs-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    background-color: var(--color-fill-2);
    &:hover {
      cursor: pointer;
      background-color: var(--color-fill-3);
    }
  }
  .tabs-left {
    flex-shrink: 0;
  }
  .tab-right {
    flex-shrink: 0;
  }
  .tabs-midden {
    display: flex;
    flex: 1;
    grid-gap: 4px;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

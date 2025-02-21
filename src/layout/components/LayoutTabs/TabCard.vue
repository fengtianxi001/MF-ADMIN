<template>
  <BaseContextmenu :configs="dataSource.contextmenu">
    <div
      class="tab-card"
      :class="{ active: dataSource.active.value }"
      @click="dataSource.onclick"
    >
      <span class="tab-title">
        {{ dataSource.origin.title }}
      </span>
      <icon-close class="tab-close" @click.stop="() => tabClose(props.data)" />
    </div>
  </BaseContextmenu>
</template>
<script setup lang="ts">
import { BaseContextmenu } from '@/components'
import { IconClose } from '@arco-design/web-vue/es/icon'
import { computed } from 'vue'
import {
  current,
  tabReload,
  tabOthersClose,
  tabToggleFixed,
  tabClose,
  tabChange,
} from '@/layout/stores/tabs'

interface PropsType {
  data: any
}

const props = defineProps<PropsType>()

const dataSource = computed(() => {
  const isHome = props.data.path === '/'
  const contextmenu = [
    {
      label: '重新加载',
      click: () => tabReload(props.data),
    },
    {
      label: '关闭其他',
      click: () => tabOthersClose(props.data),
    },
    // {
    //   label: props.data.fixed ? '取消固定' : '固定',
    //   disabled: isHome,
    //   click: () => tabToggleFixed(props.data),
    // },
    {
      label: '关闭',
      disabled: isHome,
      click: () => tabClose(props.data),
    },
  ]

  return {
    origin: { ...props.data },
    contextmenu,
    active: computed(() => current.value.path === props.data.path),
    onclick: () => tabChange(props.data),
    onclose: () => tabClose(props.data),
  }
})
</script>
<style lang="scss" scoped>
.tab-card {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 24px;
  padding: 0 15px 0 10px;
  font-size: 12px;
  cursor: pointer;
  background-color: var(--color-fill-2);
  &:hover {
    background-color: var(--color-fill-3);
    .tab-close {
      display: block;
    }
  }
  &.active {
    color: #fff;
    background-color: rgb(var(--arcoblue-6));
    .tab-close {
      background-color: rgb(var(--arcoblue-5));
      &:hover {
        background-color: rgb(var(--arcoblue-4));
      }
    }
  }
  .tab-close {
    position: absolute;
    right: 0;
    box-sizing: border-box;
    display: none;
    width: 15px;
    height: 100%;
    padding: 2px;
    background-color: var(--color-fill-3);
    &:hover {
      background-color: var(--color-fill-4);
    }
  }
}
</style>

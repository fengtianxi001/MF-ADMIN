<template>
  <div class="layout-brand">
    <img
      class="layout-brand-logo"
      src="@/layout/assets/favicon.png"
      :class="{ collapsed }"
    />
    <div v-show="!collapsed" class="layout-brand-name">设备管理系统</div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  collapsed?: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  collapsed: false,
})
</script>
<style lang="scss" scoped>
.layout-brand {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 48px;
  color: #fff;
  cursor: pointer;
  user-select: none;

  // background-color: #0e0e0e;
  .layout-brand-logo {
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    padding: 12px;
    overflow: hidden;
    object-fit: contain;
    border-radius: 50%;
    &.collapsed {
      display: 'flex';
      align-items: 'center';
      justify-content: 'center';
    }
  }
  .layout-brand-name {
    font-size: 14px;
    font-weight: bolder;
  }
}
</style>

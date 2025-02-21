<template>
  <div class="layout-header">
    <div class="header-left">
      <HeaderTrigger v-model:collapsed="collapsed" />
      <HeaderBreadcrumb />
    </div>
    <div class="header-right">
      <HeaderTheme />
      <HeaderRefresh />
      <HeaderNotify />
      <HeaderUser />
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderBreadcrumb from './HeaderBreadcrumb.vue'
import HeaderTrigger from './HeaderTrigger.vue'
import HeaderUser from './HeaderUser.vue'
import HeaderTheme from './HeaderTheme.vue'
import HeaderNotify from './HeaderNotify.vue'

import HeaderRefresh from './HeaderRefresh.vue'

import { computed } from 'vue'

interface PropsType {
  collapsed: boolean
}

const props = defineProps<PropsType>()

const emit = defineEmits(['update:collapsed'])

const collapsed = computed({
  get: () => props.collapsed,
  set: (val) => emit('update:collapsed', val),
})
</script>
<style lang="scss" scoped>
.layout-header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 10px;
  color: #000;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  .header-left,
  .header-right {
    display: flex;
    grid-gap: 12px;
    align-items: center;
  }
}
</style>

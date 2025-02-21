<template>
  <div class="header-trigger" @click="onclick">
    <IconMenuFold v-show="!collapsed" />
    <IconMenuUnfold v-show="collapsed" />
  </div>
</template>
<script setup lang="ts">
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-vue/es/icon'

interface PropsType {
  collapsed: boolean
}
const props = defineProps<PropsType>()

const emit = defineEmits(['update:collapsed'])
const onclick = () => {
  emit('update:collapsed', !props.collapsed)
}
</script>
<style lang="scss" scoped>
.header-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: var(--color-text-1);
  cursor: pointer;
  background-color: var(--color-fill-2);
  &:hover {
    background-color: var(--color-fill-3);
  }
}
</style>

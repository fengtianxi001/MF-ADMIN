<template>
  <div v-show="visible" class="tab-arrow" @click="onScroll(direction)">
    <component :is="component" />
  </div>
</template>
<script setup lang="ts">
import { shallowRef, watch } from 'vue'
import { IconLeft, IconRight } from '@arco-design/web-vue/es/icon'

interface PropsType {
  visible?: boolean
  direction: 'forward' | 'backward'
  onScroll: (direction: 'forward' | 'backward') => void
}
const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
  direction: 'forward',
})

const component = shallowRef<any>(IconLeft)

watch(
  () => props.direction,
  (direction) => {
    component.value = direction === 'forward' ? IconLeft : IconRight
  },
  { immediate: true }
)
</script>
<style lang="scss" scoped>
.tab-arrow {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 20px;
  margin: 0 4px;
  color: var(--color-text-1);
  cursor: pointer;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}
</style>

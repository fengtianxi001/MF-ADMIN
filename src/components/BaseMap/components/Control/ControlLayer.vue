<template>
  <BaseCollspse title="图层管理" width="160px">
    <div class="control-layer">
      <li v-for="({ visible, layer }, name) in list" :key="name">
        <a-checkbox v-model="visible.value" @change="onUpdateLayer(visible, layer)">{{ name }} </a-checkbox>
      </li>
      <!-- <span v-for="(item, key) in list" :key="key">{{ key }}</span> -->
    </div>
  </BaseCollspse>
</template>
<script setup lang="ts">
import { inject, type ShallowReactive } from 'vue';
import BaseCollspse from '@/components/BaseCollapse/index.vue';
interface PropsType {
  list: ShallowReactive<any>;
}
defineProps<PropsType>();
const mapInstance = inject<any>('mapInstance');
const onUpdateLayer = (visible: any, layer: any) => {
  const map = mapInstance.map.value;
  if (!map) return void 0;
  if (visible.value) {
    map.addLayer(layer);
  } else {
    map.removeLayer(layer);
  }
  return void 0;
};
</script>
<style lang="scss" scoped>
.control-layer {
  background-color: var(--color-bg-2);
  user-select: none;
  li {
    display: flex;
    align-items: center;
    height: 24px;
    :deep(.arco-checkbox) {
      padding-left: 0;
      .arco-checkbox-label {
        font-size: 13px;
      }
    }
  }
}
</style>

<template>
  <BaseCollspse title="地图参数" width="160px">
    <ul class="control-coord-picker">
      <li>
        <a-tag>纬度:</a-tag>
        <span>{{ data.lat.toFixed(4) }}</span>
      </li>
      <li>
        <a-tag>经度:</a-tag>
        <span>{{ data.lng.toFixed(4) }}</span>
      </li>
      <template v-if="state.isDev">
        <li>
          <a-tag>开启取点:</a-tag>
          <a-switch v-model="state.single" size="small" type="round" />
        </li>
        <li>
          <a-tag>开启连续取点:</a-tag>
          <a-switch v-model="state.continuous" size="small" type="round" />
        </li>
      </template>
    </ul>
  </BaseCollspse>
</template>
<script setup lang="ts">
import BaseCollspse from '@/components/BaseCollapse/index.vue';
import { Message } from '@arco-design/web-vue';
import { computed } from 'vue';
import { inject, reactive, watchEffect } from 'vue';

interface PropsType {
  data: { lat: number; lng: number };
}
defineProps<PropsType>();
const mapInstance = inject<any>('mapInstance');

const state = reactive({
  isDev: import.meta.env.DEV,
  continuous: false,
  single: false,
  coordinates: [] as any[],
});
const mode = computed(() => {
  if (state.continuous) return 'continuous';
  if (state.single) return 'single';
  return 'none';
});

const picker = (e: any) => {
  const latlng = e.latlng;
  const lat = latlng.lat.toFixed(4);
  const lng = latlng.lng.toFixed(4);

  if (mode.value === 'continuous') {
    state.coordinates.push([lat, lng]);
    Message.success('经纬度信息已成功复制到粘贴板');
  } else if (mode.value === 'single') {
    state.coordinates = [lat, lng];
    Message.success('经纬度信息已成功复制到粘贴板');
  }
  navigator.clipboard.writeText(JSON.stringify(state.coordinates, null, 2));
  // navigator.clipboard.writeText(`[${lat.toFixed(4)}, ${lng.toFixed(4)}]`);
  // Message.success("经纬度信息已成功复制到粘贴板");
};

watchEffect(() => {
  state.continuous && (state.single = false);
  state.single && (state.continuous = false);
  const element = document.querySelector('.leaflet-grab') as HTMLElement;
  if (state.continuous || state.single) {
    element && (element.style.cursor = 'crosshair');
    mapInstance.map.value.on('click', picker);
  } else {
    element && (element.style.cursor = 'grab');
    mapInstance.map.value?.off('click', picker);
  }
});
</script>
<style lang="scss" scoped>
.tips {
  font-size: 12px;
}
.control-coord-picker {
  background-color: var(--color-bg-2);
  display: flex;
  flex-direction: column;
  gap: 6px;
  li {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 12px;
    color: var(--color-text-1);
  }
}
</style>

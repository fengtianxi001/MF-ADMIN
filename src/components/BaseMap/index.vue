<template>
  <div ref="container" class="base-map">
    <div class="board-left">
      <slot></slot>
    </div>

    <div class="board-right">
      <ControlLayer :list="mapInstance.groupList" />
      <ControlCoordPicker :data="mapInstance.coordPicker" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMap } from '@/hooks';
import { onMounted, provide, ref } from 'vue';
import ControlLayer from './components/Control/ControlLayer.vue';
import ControlCoordPicker from './components/Control/ControlCoordPicker.vue';

const container = ref<HTMLElement | null>(null);
const mapInstance = useMap(container, {
  center: [26.3503, 119.8294],
  zoom: 13,
  zoomControl: false,
  attributionControl: false,
  tile: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
});

onMounted(() => {
  mapInstance.initialize();
});
provide('mapInstance', mapInstance);
</script>
<style lang="scss" scoped>
.base-map {
  width: 100%;
  height: 100%;
  position: relative;
  .board-left {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;
    width: 0;
    height: calc(100% - 24px);
  }
  .board-right {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 999;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;
    // width: 0;
    height: calc(100% - 24px);
  }
}
</style>

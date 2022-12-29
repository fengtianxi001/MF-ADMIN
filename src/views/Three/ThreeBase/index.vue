<template>
  <div class="page-container">
    <BaseCard title="基础场景" style="height: 100%">
      <div class="demo" ref="element"></div>
    </BaseCard>
  </div>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import { useThree } from "@/hooks";
import * as THREE from "three";
import { onMounted, onUnmounted } from "vue";
const { element, scene, camera, renderer, renderMixins, control, render } =
  useThree();

onMounted(() => {
  renderer.value.setClearColor(0x000000, 0);
  camera.value.position.set(0, 0, 100);
  control.value.update();
  const axesHelper = new THREE.AxesHelper(50);
  scene.value.add(axesHelper);
  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const meterial = new THREE.MeshBasicMaterial({
    color: 0x3473ff,
    wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, meterial);
  scene.value.add(cube);
  renderMixins.set("rotate", () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  });
  onUnmounted(() => {
    renderMixins.delete("rotate");
  });
  render();
});
</script>
<style lang="scss" scoped>
.demo {
  height: 100%;
  position: relative;
}
</style>

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
import { onMounted } from "vue";
const {
  element,
  scene,
  camera,
  renderer,
  control,
  render,
  loadGLTF,
  loadAnimate,
} = useThree();

onMounted(async () => {
  camera.value.position.set(2, 2, -6);
  console.log("camera.value", (camera.value.castShadow = true));
  control.value.target = new THREE.Vector3(0, 1, 0);
  renderer.value.setClearColor(0x000000, 0);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 20, 0);
  scene.value.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(-3, 10, -10);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 2;
  dirLight.shadow.camera.bottom = -2;
  dirLight.shadow.camera.left = -2;
  dirLight.shadow.camera.right = 2;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
  scene.value.add(dirLight);

  //   const mesh = new THREE.Mesh(
  //     new THREE.PlaneGeometry(100, 100),
  //     new THREE.MeshLambertMaterial()
  //   );
  //   mesh.rotation.x = -Math.PI / 2;
  //   mesh.receiveShadow = true;
  //   mesh.castShadow = true;
  //   scene.value.add(mesh);

  const { scene: object, animations } = await loadGLTF(
    `${import.meta.env.VITE_API_DOMAIN}/model/Soldier.glb`
  );
  object.traverse((child: any) => {
    if (child.isMesh) object.castShadow = true;
  });
  const skeleton = new THREE.SkeletonHelper(object);
  skeleton.visible = false;
  scene.value.add(skeleton);
  loadAnimate(object, animations, animations[1]["name"]);
  scene.value.add(object);
  renderer.value.outputEncoding = THREE.sRGBEncoding;
  renderer.value.shadowMap.enabled = true;
  render();
});
</script>
<style lang="scss" scoped>
.demo {
  height: 100%;
  position: relative;
}
</style>

import { isFunction } from "lodash";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { onMounted, ref, shallowRef } from "vue";
import useLoading from "@/hooks/useLoading";
import ThreeBase from "./core";
import TWEEN from "@tweenjs/tween.js";
import * as THREE from "three";

import {
  CSS2DObject,
  type CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function useThree() {
  const { loading, openLoading, closeLoading } = useLoading(true, 500);
  const scene = shallowRef<THREE.Scene>();
  const camera = shallowRef<THREE.Camera>();
  const renderer = shallowRef<THREE.WebGLRenderer>();
  const CSSRenderer = shallowRef<CSS2DRenderer>();
  const control = shallowRef<OrbitControls>();
  const mixers: any = [];
  const clock = new THREE.Clock();
  const composers = new Map();
  const renderMixins = new Map();
  const element = ref<HTMLElement | undefined>();
  onMounted(() => {
    const el = element.value as HTMLElement;
    scene.value = ThreeBase.initScene();
    camera.value = ThreeBase.initCamera(el);
    renderer.value = ThreeBase.initRenderer(el);
    CSSRenderer.value = ThreeBase.initCSSRender(el);
    control.value = ThreeBase.initControl(
      camera.value,
      CSSRenderer.value!.domElement
    );
  });
  const render = () => {
    const delta = new THREE.Clock().getDelta();
    renderer.value!.render(scene.value!, camera.value!);
    const mixerUpdateDelta = clock.getDelta();
    mixers.forEach((mixer: any) => mixer.update(mixerUpdateDelta));
    composers.forEach((composer) => composer.render(delta));
    renderMixins.forEach((mixin) => isFunction(mixin) && mixin());
    CSSRenderer.value!.render(scene.value!, camera.value!);
    TWEEN.update();
    requestAnimationFrame(() => render());
  };

  const loadModels = async (tasks: Promise<any>[]) => {
    openLoading();
    await Promise.all(tasks);
    closeLoading();
  };
  const loadGLTF = (url: string): Promise<GLTF> => {
    const loader = new GLTFLoader();
    const onProgress = () => {};
    const onCompleted = (object: GLTF, resolve: any) => {
      resolve(object);
    };
    return new Promise<GLTF>((resolve) => {
      loader.load(
        url,
        (object: GLTF) => onCompleted(object, resolve),
        onProgress
      );
    });
  };

  const loadAnimate = (
    mesh: THREE.Mesh | THREE.AnimationObjectGroup | THREE.Group,
    animations: Array<THREE.AnimationClip>,
    animationName: string
  ) => {
    const mixer = new THREE.AnimationMixer(mesh);
    const clip = THREE.AnimationClip.findByName(animations, animationName);
    if (!clip) return void 0;
    const action = mixer.clipAction(clip);
    action.play();
    mixers.push(mixer);
  };
  const addLabel = (element: HTMLElement, position: THREE.Vector3) => {
    const label = new CSS2DObject(element);
    console.log("position", position);
    label.position.set(position.x, position.y, position.z);
    scene.value?.add(label);
    return label;
  };
  return {
    element,
    loading,
    scene,
    camera,
    renderer,
    CSSRenderer,
    control,
    mixers,
    clock,
    composers,
    renderMixins,
    addLabel,
    render,
    loadGLTF,
    loadAnimate,
    loadModels,
  };
}

export default useThree;

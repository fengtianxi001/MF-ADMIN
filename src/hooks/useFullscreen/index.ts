import { computed, type Ref } from "vue";
import { useFullscreen as Fullscreen } from "@vueuse/core";
import {
  IconFullscreenExit,
  IconFullscreen,
} from "@arco-design/web-vue/es/icon";
function useFullscreen(target?: Ref<HTMLElement | null>) {
  const {
    isFullscreen,
    enter: fullscreenEnter,
    exit: fullscreenExit,
    toggle: fullscreenToggle,
  } = Fullscreen(target);
  const fullscreenIcon = computed(() =>
    isFullscreen.value ? IconFullscreenExit : IconFullscreen
  );
  return {
    isFullscreen,
    fullscreenIcon,
    fullscreenEnter,
    fullscreenExit,
    fullscreenToggle,
  };
}

export default useFullscreen;

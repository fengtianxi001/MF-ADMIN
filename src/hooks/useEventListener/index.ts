import { onMounted, type Ref, isRef, onUnmounted } from "vue";

type noop = (...p: any) => void;

type Options = {
  target?: string | Ref<any> | Window | Document | HTMLElement | Element;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};

function useEventListener(
  eventName: string,
  handler: noop,
  options: Options = {}
) {
  const getTarget = () => {
    let target;
    if (!options.target) {
      target = window;
    } else if (typeof options.target === "string") {
      target = document.querySelector(options.target);
    } else if (isRef(options.target)) {
      target = options.target.value;
    } else {
      target = options.target;
    }
    return target;
  };
  onMounted(() => {
    const target = <any>getTarget();
    if (!target.addEventListener) return void 0;
    target.addEventListener(eventName, handler, options);
  });
  onUnmounted(() => {
    const target = <any>getTarget();
    if (!target.removeEventListener) return void 0;
    target.removeEventListener(eventName, handler, options);
  });
}

export default useEventListener;

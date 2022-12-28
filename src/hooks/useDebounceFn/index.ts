import { debounce, isFunction } from 'lodash';
import { onUnmounted } from 'vue';

type noop = (...args: any[]) => any;
interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}
function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  // if (isFunction(fn)) {
  //   console.error(`useDebounceFn expected parameter is a function, got ${typeof fn}`);
  // }
  const wait = options?.wait ?? 1000;
  const debounced = debounce(
    (...args: Parameters<T>): ReturnType<T> => {
      return fn(...args);
    },
    wait,
    options
  );
  onUnmounted(() => {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}

export default useDebounceFn;

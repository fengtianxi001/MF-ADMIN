import { isFunction, size } from 'lodash';
import { ref, watch, onUnmounted } from 'vue';
import useLoading from '@/hooks/useLoading';
import useDebounceFn from '@/hooks/useDebounceFn';

function useRequest(service: ServiceType, options?: OptionsType) {
  const { loading, openLoading, closeLoading } = useLoading(false, options?.loadingDelay ?? 0);
  const data = ref(options?.defaultData ?? null);
  let timer: any;
  //请求函数
  const _run = async () => {
    openLoading();
    //请求前的钩子函数 返回false则不执行请求
    if (isFunction(options?.onBefore)) {
      const result = await options?.onBefore();
      if (result === false) return void 0;
    }
    //服务请求及参数处理
    const serviceParams = isFunction(options?.defaultParams)
      ? await options?.defaultParams()
      : options?.defaultParams ?? [];
    const response = await service(...serviceParams);
    //响应结果处理
    data.value = isFunction(options?.formatResult) ? await options?.formatResult(response) : response;
    closeLoading();
    //请求后的钩子函数
    isFunction(options?.onFinally) && (await options?.onFinally());
  };
  const { run } = useDebounceFn(_run, { wait: options?.debounceWait ?? 0 });
  //是否手动执行
  options?.manual !== true && run();
  //是否轮询
  options?.pollingInterval !== undefined && (timer = setInterval(run, options?.pollingInterval));
  //是否依赖刷新
  if (options?.refreshDeps && size(options?.refreshDeps) > 0) {
    watch(() => options?.refreshDeps, run, { deep: true });
  }
  onUnmounted(() => {
    //清除轮询
    timer !== undefined && clearInterval(timer);
  });
  return {
    loading,
    data,
    run,
  };
}

type ServiceType = (params?: any) => Promise<any>;

type OptionsType = {
  manual?: boolean;
  debounceWait?: number;
  loadingDelay?: number;
  refreshDeps?: any[];
  defaultData?: any;
  defaultParams?: any;
  pollingInterval?: number;
  formatResult?: (res: any) => any;
  onBefore?: () => void;
  onFinally?: () => void;
};

export default useRequest;

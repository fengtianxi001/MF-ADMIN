import { isFunction } from 'lodash';
import { ref, watch, type WatchStopHandle } from 'vue';
interface OptionsType {
  formmatter?: (data: any) => any;
  manual?: boolean;
}
function useTable<DataType>(service: any, options?: OptionsType) {
  const loading = ref(false);
  const selected = ref<string[]>([]);
  const pagination = ref({
    current: 1,
    size: 5,
    total: 0,
  });
  const dataSource = ref<DataType>();
  const search = ref<any>({});
  let pagatioWatch: WatchStopHandle | undefined;
  const run = (args?: Record<any, any>) => {
    loading.value = true;
    const params = {
      ...pagination.value,
      ...search.value,
      ...args,
    };
    isFunction(service) &&
      service(params).then((response: any) => {
        if (options && isFunction(options?.formmatter)) {
          const { data: dataSource, pagination: paginationSource } = options.formmatter(response);
          dataSource.value = dataSource;
          pagination.value = paginationSource;
        } else {
          //客制化部分
          console.log('response', response);
          dataSource.value = response.data;
          pagination.value = {
            current: response.current,
            size: response.size,
            total: response.total,
          };
        }
        loading.value = false;
        if (pagatioWatch) {
          pagatioWatch();
        }
        //开始监听分页变化
        pagatioWatch = watch(pagination, () => run(), {
          deep: true,
        });
      });
  };
  if (!options?.manual) {
    run();
  }
  return {
    selected,
    loading,
    pagination,
    dataSource,
    search,
    run,
  };
}

export default useTable;

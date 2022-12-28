import { ref } from 'vue';
import { useLoading } from '@/hooks';
import type { TableColumnData } from '@arco-design/web-vue';
function useLocationTable<T>(service: (query: string) => Promise<any>) {
  const { loading, openLoading, closeLoading } = useLoading();
  const dataSource = ref<T[]>([]);
  const query = ref('');
  const run = async () => {
    openLoading();
    const res = await service(query.value);
    dataSource.value = res;
    closeLoading();
  };
  run();
  return {
    loading,
    dataSource,
    query,
    run,
  };
}

export default useLocationTable;

export type TableColumnDataType<T> = TableColumnData & {
  render?: (data: { record: T; column: any; rowIndex: number }) => any;
};

// type Override<P, S> = Omit<P, keyof S> & S;

// export type TableColumnDataType<T> = Array<
//   Override<
//     TableColumnData,
//     {
//       render?: (data: { record: T; column: any; rowIndex: number }) => any;
//     }
//   >
// >;

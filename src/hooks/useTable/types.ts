import type { TableColumnData } from '@arco-design/web-vue';

export type TableColumnDataType<T> = TableColumnData & {
  render?: (data: { record: T; column: any; rowIndex: number }) => any;
};

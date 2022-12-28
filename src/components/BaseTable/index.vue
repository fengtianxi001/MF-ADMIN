<template>
  <Table v-bind="{ ...$attrs, ...attrs }" :pagination="false" :bordered="false"></Table>
  <Pagination
    v-if="pagination"
    class="pagination"
    v-model:current="pagination.current"
    v-model:page-size="pagination.size"
    :total="pagination.total"
    :show-total="false"
  />
</template>
<script setup lang="ts">
import { Table, Pagination } from '@arco-design/web-vue';
import { computed, reactive } from 'vue';
interface PropsType {
  pagination?: {
    current: number;
    size: number;
    total: number;
  };
  selection?: boolean;
}
const props = defineProps<PropsType>();

const attrs = computed(() => {
  const cache: any = {};
  if (props.selection) {
    cache.rowSelection = reactive({
      type: 'checkbox',
      showCheckedAll: true,
      onlyCurrent: false,
    });
  }
  console.log('cache', cache);
  return cache;
});
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>

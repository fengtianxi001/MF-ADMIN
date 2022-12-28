<template>
  <BaseCollapse title="人员定位" width="300px" :loading="loading">
    <BoardPanel>
      <a-input v-model="query" size="mini" placeholder="人员搜索" @change="run" />
      <a-table
        size="small"
        :columns="columns"
        :data="dataSource"
        :bordered="false"
        :pagination="false"
        @row-click="onRowClick"
      />
    </BoardPanel>
  </BaseCollapse>
</template>
<script setup lang="tsx">
import { forEach } from 'lodash';
import { Badge } from '@arco-design/web-vue';
import { inject, watchEffect } from 'vue';
import { locationStaffList, type LocationStaffListType } from '@/api/Location';
import type { MapInstanceType } from '@/components/BaseMap/types';
import useLocationTable from '../hooks/useLocationTable';
import BaseCollapse from '@/components/BaseCollapse/index.vue';
import UserMarker from '@/components/BaseMap/components/Marker/UserMarker.vue';
import BoardPanel from '../components/BoardPanel.vue';
import BaseUserCard from '@/components/BaseUserCard/index.vue';
const mapInstance = inject<MapInstanceType>('mapInstance');

const columns = [
  {
    title: '基本信息',
    dataIndex: 'name',
    width: 140,
    render: ({ record }: any) => {
      return <BaseUserCard data={record} />;
    },
  },
  {
    title: '所属单位',
    dataIndex: 'department',
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: ({ record }: any) => {
      const status = record.status === 1 ? 'success' : 'normal';
      const text = record.status === 1 ? '在线' : '离线';
      return <Badge status={status} text={text} />;
    },
  },
];

const { dataSource, query, loading, run } = useLocationTable<LocationStaffListType>(locationStaffList);

const onRowClick = (record: any) => mapInstance?.flyto(record.coordinates, 16);

watchEffect(() => {
  if (!mapInstance?.map.value) return void 0;
  forEach(dataSource.value, (record) => {
    const config = {
      component: UserMarker,
      componentProps: { data: record },
      coordinates: record.coordinates,
    };
    mapInstance.addMarker(config, '人员定位');
  });
});
</script>

<template>
  <BaseCollapse title="车辆定位" width="300px" :loading="loading">
    <BoardPanel>
      <a-input v-model="query" size="small" placeholder="车牌搜索" @change="run" />
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
import { locationCarList, type LocationCarListType } from '@/api/Location';
import type { MapInstanceType } from '@/components/BaseMap/types';
import useLocationTable from '../hooks/useLocationTable';
import BoardPanel from '../components/BoardPanel.vue';
import BaseCollapse from '@/components/BaseCollapse/index.vue';
import CarMarker from '@/components/BaseMap/components/Marker/CarMarker.vue';

const mapInstance = inject<MapInstanceType>('mapInstance');

const columns = [
  {
    title: '车牌',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '所属单位',
    dataIndex: 'department',
  },
  {
    title: '状态',
    render: ({ record }: any) => {
      const status = record.status === 1 ? 'success' : 'normal';
      const text = record.status === 1 ? '在线' : '离线';
      return <Badge status={status} text={text} />;
    },
  },
];

const { dataSource, query, loading, run } = useLocationTable<LocationCarListType>(locationCarList);
const onRowClick = (record: LocationCarListType) => mapInstance?.flyto(record.coordinates, 16);

watchEffect(() => {
  //渲染车辆点位
  if (!mapInstance?.map.value) return void 0;
  forEach(dataSource.value, (record) => {
    const config = {
      component: CarMarker,
      componentProps: { data: record },
      coordinates: record.coordinates,
    };
    mapInstance.addMarker(config, '车辆定位');
  });
});
</script>

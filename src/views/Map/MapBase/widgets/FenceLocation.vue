<template>
  <BaseCollapse title="电子围栏" width="300px" :loading="loading">
    <BoardPanel>
      <a-row :gutter="6">
        <a-col :span="16">
          <a-input v-model="query" long size="mini" placeholder="围栏名称搜索" @change="run" />
        </a-col>
        <a-col :span="8">
          <a-button size="mini" type="primary" @click="onCreate"> 添加新围栏 </a-button>
        </a-col>
      </a-row>
      <a-table
        size="small"
        :data="dataSource"
        :columns="columns"
        :bordered="false"
        :pagination="false"
        @row-click="onRowClick"
      />
    </BoardPanel>
  </BaseCollapse>
</template>
<script setup lang="tsx">
import { forEach } from 'lodash';
import { Badge, Button } from '@arco-design/web-vue';
import { inject, watchEffect } from 'vue';
import { locationFenceList, type LocationFenceListType } from '@/api/Location';
import type { MapInstanceType } from '@/components/BaseMap/types';
import useLocationTable, { type TableColumnDataType } from '../hooks/useLocationTable';
import FenceEdit from './FenceLocationEdit.vue';
import BoardPanel from '../components/BoardPanel.vue';
import BaseCollapse from '@/components/BaseCollapse/index.vue';
import Modal from '@/components/BaseModal';

const mapInstance = inject<MapInstanceType>('mapInstance');

const columns: TableColumnDataType<LocationFenceListType>[] = [
  {
    title: '围栏名称',
    dataIndex: 'name',
    width: 80,
  },
  {
    title: '告警方式',
    dataIndex: 'department',
    render: ({ record }) => (record.mode === 0 ? '出围栏告警' : '进围栏告警'),
  },
  {
    title: '状态',
    align: 'center',
    render: ({ record }) => {
      const status = record.status === 1 ? 'success' : 'normal';
      const text = record.status === 1 ? '在线' : '离线';
      return <Badge status={status} text={text} />;
    },
  },
  {
    title: '操作',
    align: 'center',
    render: ({ record }) => {
      return (
        <Button
          size='mini'
          type='text'
          onClick={(e) => {
            e.stopPropagation();
            onEdit(record as LocationFenceListType);
          }}>
          编辑
        </Button>
      );
    },
  },
];

const { dataSource, query, loading, run } = useLocationTable<LocationFenceListType>(locationFenceList);

const onRowClick = (record: LocationFenceListType) => mapInstance?.fitBounds(record.geojson);

const onCreate = async () => await Modal(FenceEdit, {});

const onEdit = async (data: LocationFenceListType) => await Modal(FenceEdit, { data });

watchEffect(() => {
  //绘制电子围栏
  if (!mapInstance?.map.value) return void 0;
  forEach(dataSource.value, (record) => {
    mapInstance?.addGeoJson(record.geojson, '电子围栏');
  });
});
</script>

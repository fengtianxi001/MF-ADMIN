<template>
  <div class="page">
    <BaseTablePro
      v-model:selected="selected"
      ref="table"
      title="我的设备列表"
      row-key="id"
      selection="checkbox"
      :service="service"
      :table-filter="tableFilter"
      :table-columns="tableColumns"
    />
  </div>
</template>
<script setup lang="tsx">
import { BaseTablePro, useTableMethods } from '@/components/BaseTable'
import { mockTableService } from '@/plugins/utils'
import { Badge, Link, Space } from '@arco-design/web-vue'
import { createBaseModal } from '@/components/BaseModal'
import {
  SecretHierarchyOptionsEnum,
  SecretHierarchyBadgeEnum,
  DeviceCategoryEnum,
  DeviceCategoryOptionsEnum,
} from '@/enums'
import { Random } from 'mockjs'
import DeviceDetail from './detail/index.vue'

const service = mockTableService(
  Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    code: `DEV-${index + 1}`,
    name: `设备名称 ${index + 1}`,
    model: `型号 ${index + 1}`,
    brand: `品牌 ${index + 1}`,
    category: Random.pick([0, 1, 2, 3, 4, 5, 6]),
    security: Random.pick([0, 1, 2, 3]),
    manufacturer: `厂商 ${index + 1}`,
    quantity: Random.natural(1, 100),
    unit: Random.pick(['个', '台']),
    registeredBy: Random.cname(),
    registerDate: Random.date('yyyy-MM-dd'),
    purchaseDate: Random.date('yyyy-MM-dd'),
  }))
)

const { table, selected, refresh } = useTableMethods()

const tableFilter = [
  {
    label: '设备编号',
    name: 'code',
    component: 'Input',
  },
  {
    label: '设备名称',
    name: 'name',
    component: 'Input',
  },
  {
    label: '设备型号',
    name: 'model',
    component: 'Input',
  },
  {
    label: '设备品牌',
    name: 'brand',
    component: 'Input',
  },
  {
    label: '设备类别',
    name: 'category',
    component: 'Select',
    props: {
      options: [...DeviceCategoryOptionsEnum],
    },
  },
  {
    label: '设备密级',
    name: 'security',
    component: 'Select',
    props: {
      options: [...SecretHierarchyOptionsEnum],
    },
  },
]

const tableColumns = [
  {
    title: '设备编号',
    dataIndex: 'code',
    align: 'left',
  },
  {
    title: '设备名称',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '设备型号',
    dataIndex: 'model',
    align: 'center',
  },
  {
    title: '设备品牌',
    dataIndex: 'brand',
    align: 'center',
  },
  {
    title: '设备类别',
    dataIndex: 'category',
    align: 'center',
    render: ({ record }: any) => {
      return DeviceCategoryEnum[record.category]
    },
  },
  {
    title: '设备密级',
    dataIndex: 'security',
    align: 'center',
    render: ({ record }: any) => {
      const item: any = SecretHierarchyBadgeEnum[record.security]
      return <Badge status={item.status} text={item.text} />
    },
  },
  {
    title: '操作',
    align: 'center',
    width: 120,
    render: ({ record }: any) => {
      return (
        <Space size={10}>
          <Link onClick={() => actions.onDetail(record)}>详情</Link>
        </Space>
      )
    },
  },
]

const actions = {
  onDetail: async (record) => {
    const result = await createBaseModal(DeviceDetail, { record })
    result && refresh()
  },
}
</script>

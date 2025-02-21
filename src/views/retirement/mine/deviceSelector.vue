<template>
  <BaseModal
    width="800px"
    :loading="loading"
    :body-style="{ padding: '10px 10px' }"
    :onBeforeConfirm="onBeforeConfirm"
  >
    <div style="height: 500px">
      <BaseTablePro
        v-model:selected="selected"
        ref="table"
        row-key="id"
        selection="checkbox"
        :service="service"
        :table-filter="tableFilter"
        :table-columns="tableColumns"
      />
    </div>
  </BaseModal>
</template>
<script setup lang="tsx">
import { BaseTablePro, BaseModal, useTableMethods } from '@/components'
import { mockTableService } from '@/plugins/utils'
import { Badge } from '@arco-design/web-vue'
import { Random } from 'mockjs'
import { SecretHierarchyBadgeEnum, DeviceCategoryEnum } from '@/enums'

interface PropsType {
  modelValue: any[]
}
const props = defineProps<PropsType>()

const { table, selected, refresh, data } = useTableMethods()

const service = mockTableService(
  Array.from({ length: 20 }, (_, index) => ({
    id: Random.id(),
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
      options: [
        {
          label: '类别1',
          value: '类别1',
        },
        {
          label: '类别2',
          value: '类别2',
        },
        {
          label: '类别3',
          value: '类别3',
        },
      ],
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
]

const onBeforeConfirm = async () => {
  const items = table.value.data.filter((item: any) => {
    return selected.value.includes(item.id)
  })
  props.modelValue.value.push(...items)
  return true
}
</script>

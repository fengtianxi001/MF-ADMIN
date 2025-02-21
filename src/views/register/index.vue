<template>
  <div class="page">
    <BaseTablePro
      v-model:selected="selected"
      ref="table"
      title="设备登记列表"
      row-key="code"
      selection="checkbox"
      :service="mock"
      :table-filter="tableFilter"
      :table-operates="tableOperates"
      :table-columns="tableColumns"
    />
  </div>
</template>
<script setup lang="tsx">
import { computed } from 'vue'
import { BaseTablePro, useTableMethods } from '@/components/BaseTable'
import { mockTableService, confirmbox } from '@/plugins/utils'
import { Link, Space } from '@arco-design/web-vue'
import { createBaseModal } from '@/components/BaseModal'
import { Random } from 'mockjs'
import { DeviceCategoryOptionsEnum, DeviceCategoryEnum } from '@/enums'
import Editor from './editor.vue'
import BatchEditor from './batchEditor.vue'

const mock = mockTableService(
  Array.from({ length: 1 }).map((_, index) => ({
    id: index,
    code: `DEV-${index}`,
    name: `设备名称 ${index}`,
    security: Random.pick([0, 1, 2, 3]),
    category: Random.pick([0, 1, 2, 3, 4, 5, 6]),
    purchaseTime: Random.date('yyyy-MM-dd'),
    warehouse: Random.cname(),
    warehouseTime: Random.date('yyyy-MM-dd'),
    model: `型号 ${index}`,
    brand: `品牌 ${index}`,
    sequence: `ASDJ00012${index}`,
    manufacturer: `生产厂商 ${index}`,
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
    label: '设备类别',
    name: 'category',
    component: 'Select',
    props: {
      options: [...DeviceCategoryOptionsEnum],
    },
  },
]

const tableOperates = computed(() => [
  {
    text: '新增设备',
    type: 'primary',
    onClick: () => actions.onCreate(),
  },
  {
    text: '批量新增',
    type: 'primary',
    onClick: () => actions.onBatchCreate(),
  },
  {
    text: '导入',
    type: 'primary',
    onClick: () => actions.onImport(),
  },
  {
    text: '导出',
    type: 'primary',
    onClick: () => actions.onExport(),
  },
  {
    text: '打印标签',
    type: 'primary',
    disabled: selected.value.length === 0,
    onClick: () => actions.onPrint(),
  },
  {
    text: '批量删除',
    type: 'primary',
    status: 'danger',
    disabled: selected.value.length === 0,
    onClick: () => actions.onDelete(selected.value),
  },
])

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
    title: '设备类别',
    dataIndex: 'category',
    align: 'center',
    render: ({ record }: any) => {
      return DeviceCategoryEnum[record.category]
    },
  },
  {
    title: '入库人',
    dataIndex: 'warehouse',
    align: 'center',
  },
  {
    title: '操作',
    align: 'center',
    width: 160,
    render: ({ record }: any) => {
      return (
        <Space size={10}>
          <Link onClick={() => actions.onEdit(record)}>编辑</Link>
          <Link onClick={() => actions.onDelete([record.id])}>删除</Link>
        </Space>
      )
    },
  },
]

const actions = {
  onCreate: async () => {
    const result = await createBaseModal(Editor, {
      mode: 'create',
      title: '设备登记',
    })
    result && refresh()
  },
  onEdit: async (record: any) => {
    const result = await createBaseModal(Editor, {
      mode: 'edit',
      title: '设备登记信息修改',
      record,
    })
    result && refresh()
  },
  onBatchCreate: async () => {
    const result = await createBaseModal(BatchEditor, {
      title: '设备批量登记',
    })
    result && refresh()
  },
  onExport: () => {},
  onImport: () => {},
  onPrint: () => {},
  onDelete: async (ids: any[]) => {
    const server = async () => userDelete(record.id)
    const result = await confirmbox('删除', server)
    result && refresh()
  },
}
</script>

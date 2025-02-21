<template>
  <div class="page">
    <BaseTablePro
      v-model:selected="selected"
      ref="table"
      title="我的报废列表"
      row-key="result"
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
import { Badge, Link, Space } from '@arco-design/web-vue'
import { createBaseModal } from '@/components/BaseModal'
import { Random } from 'mockjs'
import { ApprovalProcessBadgeEnum, ApprovalProcessOptionsEnum } from '@/enums'
import Editor from './editor.vue'

const mock = mockTableService(
  Array.from({ length: 20 }, (_, index) => {
    return {
      id: Random.id(),
      result: Random.title(),
      content: Random.title(),
      appliance: Random.cname(),
      time: Random.date('yyyy-MM-dd'),
      moderator: Random.cname(),
      status: Random.pick([0, 1, 2, 3, 4, 5, 6]),
      devices: Array.from({ length: 2 }, (_, index) => ({
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
      })),
    }
  })
)

const { table, selected, refresh } = useTableMethods()

const tableFilter = [
  {
    label: '报废原因',
    name: 'result',
    component: 'Input',
  },
  {
    label: '报废内容',
    name: 'content',
    component: 'Input',
  },
  {
    label: '状态',
    name: 'status',
    component: 'Select',
    props: {
      options: [...ApprovalProcessOptionsEnum],
    },
  },
  {
    label: '起止时间',
    name: 'range',
    component: 'RangePicker',
    props: {
      placeholder: ['起始时间', '结束时间'],
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
    },
  },
]

const tableOperates = computed(() => [
  {
    text: '新增申请',
    type: 'primary',
    onClick: () => actions.onCreate(),
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
    title: '报废原因',
    dataIndex: 'result',
    align: 'left',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: '报废内容',
    dataIndex: 'content',
    align: 'left',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: '报废人',
    dataIndex: 'appliance',
    align: 'center',
    width: 120,
  },
  {
    title: '报废时间',
    dataIndex: 'time',
    align: 'center',
    width: 160,
  },
  {
    title: '审核人',
    dataIndex: 'moderator',
    align: 'center',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    width: 160,
    render: ({ record }: any) => {
      const item = ApprovalProcessBadgeEnum[record.status]
      return <Badge status={item.status} text={item.text} />
    },
  },
  {
    title: '操作',
    align: 'center',
    width: 160,
    render: ({ record }: any) => {
      return (
        <Space size={10}>
          <Link onClick={() => actions.onEdit(record)}>编辑</Link>
          <Link onClick={() => actions.onWithdraw(record)}>撤回</Link>
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
      title: '新增报废申请',
    })
    result && refresh()
  },
  onEdit: async (record: any) => {
    const result = await createBaseModal(Editor, {
      mode: 'edit',
      title: '编辑报废申请',
      record,
    })
    result && refresh()
  },
  onWithdraw: async (record: any) => {
    const server = async () => {}
    const result = await confirmbox('撤回', server)
    result && refresh()
  },
  onDelete: async (ids: any[]) => {
    const server = async () => {}
    const result = await confirmbox('删除', server)
    result && refresh()
  },
}
</script>

<template>
  <div class="page">
    <BaseTablePro
      v-model:selected="selected"
      ref="table"
      title="申领记录列表"
      row-key="result"
      selection="checkbox"
      :service="mock"
      :table-filter="tableFilter"
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
      devices: Array.from({ length: 20 }, (_, index) => ({
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
    label: '申领原因',
    name: 'result',
    component: 'Input',
  },
  {
    label: '申领内容',
    name: 'content',
    component: 'Input',
  },
  {
    label: '申领状态',
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

const tableColumns = [
  {
    title: '申领原因',
    dataIndex: 'result',
    align: 'left',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: '申领内容',
    dataIndex: 'content',
    align: 'left',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: '申领人',
    dataIndex: 'appliance',
    align: 'center',
    width: 120,
  },
  {
    title: '申领时间',
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
    width: 100,
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
  onDetail: async (record: any) => {
    const result = await createBaseModal(Editor, {
      mode: 'edit',
      title: '申领详情',
      record,
    })
    result && refresh()
  },
}
</script>

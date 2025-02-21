<template>
  <Table
    size="small"
    :columns="column"
    :loading="loading"
    :data="data"
    :stripe="true"
    :scroll="{ y: 400 }"
    :bordered="{ cell: true }"
    :pagination="false"
  />
</template>
<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { Table, Badge, Space } from '@arco-design/web-vue'
import { useLoading } from '@/hooks'
import { mockService } from '@/plugins/utils'
import { Random } from 'mockjs'

const service = mockService(
  Array.from({ length: 20 }, () => ({
    applicant: Random.cname(),
    applicationTime: Random.datetime('yyyy-MM-dd HH:mm'),
    reviewer: Random.cname(),
    reviewTime: Random.datetime('yyyy-MM-dd HH:mm'),
    status: Random.pick([0, 1, 2, 3, 4, 5, 6]),
  }))
)

interface PropsType {
  id: any
}
const props = defineProps<PropsType>()

const column = [
  {
    title: '序号',
    dataIndex: 'applicant',
    width: 80,
    align: 'center',
    render: ({ rowIndex }: any) => {
      return <span>{rowIndex + 1}</span>
    },
  },
  {
    title: '申请人',
    dataIndex: 'applicant',
    width: 120,
    align: 'center',
  },
  {
    title: '申请时间',
    dataIndex: 'applicationTime',
    width: 150,
    align: 'center',
  },
  {
    title: '审核人',
    dataIndex: 'reviewer',
    width: 120,
    align: 'center',
  },
  {
    title: '审核时间',
    dataIndex: 'reviewTime',
    width: 150,
    align: 'center',
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    render: ({ record }: any) => {
      const enums = {
        0: {
          text: '待审核',
          color: 'normal',
        },
        1: {
          text: '审核中',
          color: 'processing',
        },
        2: {
          text: '审核通过',
          color: 'success',
        },
        3: {
          text: '审核不通过',
          color: 'danger',
        },
        4: {
          text: '已撤回',
          color: 'warning',
        },
        5: {
          text: '已完成',
          color: 'success',
        },
        6: {
          text: '逾期',
          color: 'warning',
        },
      }
      const item: any = enums[record.status]
      return (
        <Space size={10}>
          <Badge status={item.color} text={item.text} />
        </Space>
      )
    },
  },
]

const data = ref<any>([])

const { loading, openLoading, closeLoading } = useLoading(true, 200)

onMounted(async () => {
  openLoading()
  data.value = await service()
  closeLoading()
})
</script>

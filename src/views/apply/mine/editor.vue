<template>
  <BaseModal
    width="1000px"
    :loading="loading"
    :onBeforeConfirm="onBeforeConfirm"
  >
    <BaseForm
      label-width="70px"
      ref="form"
      v-model="dataSource"
      :configs="configs"
      layout="horizontal"
    />
    <div style="margin-bottom: 10px">
      <Button type="primary" @click="actions.onCreate">添加设备</Button>
    </div>
    <Table
      size="small"
      :columns="columns"
      :data="devices"
      :bordered="{ cell: true }"
      :pagination="false"
      :scroll="{ y: 300 }"
    />
  </BaseModal>
</template>
<script setup lang="tsx">
import { onMounted, nextTick, ref } from 'vue'
import { BaseForm, BaseModal, useModalForm } from '@/components'
import { Button, Link, Space, Message, Table } from '@arco-design/web-vue'
import { createBaseModal } from '@/components/BaseModal'
import { ApprovalProcessOptionsEnum, DeviceCategoryEnum } from '@/enums'
import deviceSelector from './deviceSelector.vue'

interface PropsType {
  mode: 'create' | 'edit'
  record?: any
}
const props = defineProps<PropsType>()

const { form, dataSource, loading, validate } = useModalForm()

const configs = [
  {
    label: '申领原因',
    name: 'result',
    span: 8,
    component: 'Input',
    required: true,
  },
  {
    label: '申领内容',
    name: 'content',
    span: 8,
    component: 'Input',
    required: true,
  },
  {
    label: '申领人',
    name: 'appliance',
    span: 8,
    component: 'Input',
    required: true,
  },
  {
    label: '审核人',
    name: 'moderator',
    span: 8,
    component: 'Select',
    required: true,
  },
  {
    label: '申领时间',
    name: 'time',
    span: 8,
    component: 'DatePicker',
    required: true,
    disabled: true,
  },

  {
    label: '状态',
    name: 'status',
    span: 8,
    component: 'Select',
    required: true,
    disabled: true,
    props: {
      options: [...ApprovalProcessOptionsEnum],
    },
  },
]

const devices = ref([])

const columns = [
  {
    title: '序号',
    dataIndex: 'code',
    align: 'center',
    width: 80,
    render: ({ rowIndex }: any) => {
      return rowIndex + 1
    },
  },
  {
    title: '设备编号',
    dataIndex: 'code',
    align: 'center',
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
    title: '操作',
    align: 'center',
    width: 80,
    render: ({ record }: any) => {
      return (
        <Space size={10}>
          <Link onClick={() => actions.onDelete([record.id])}>移除</Link>
        </Space>
      )
    },
  },
]

const actions = {
  onCreate: async () => {
    const result = await createBaseModal(deviceSelector, {
      title: '添加设备',
      modelValue: devices,
    })
  },
  onDelete: async (ids: any[]) => {
    const items = devices.value.filter((item: any) => !ids.includes(item.id))
    devices.value = items
  },
}

// 表单提交前的校验
const onBeforeConfirm = async () => {
  const errorMsg = await validate()
  if (errorMsg) return false
  //   if (props.mode === 'edit') {
  //     await service(dataSource.value)
  //   } else {
  //     await service(dataSource.value)
  //   }
  Message.success('操作成功')
  return true
}

onMounted(() => {
  nextTick(() => {
    if (props.mode === 'edit') {
      dataSource.value = { ...props.record }
      devices.value = props.record.devices ? [...props.record.devices] : []
    }
  })
})
</script>

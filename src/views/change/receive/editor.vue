<template>
  <BaseModal
    width="1000px"
    ok-text="变更办理"
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
import { Table } from '@arco-design/web-vue'
import { ApprovalProcessOptionsEnum } from '@/enums'

interface PropsType {
  mode: 'create' | 'edit'
  record?: any
}
const props = defineProps<PropsType>()

const { form, dataSource, loading, validate } = useModalForm()

const configs = [
  {
    label: '变更原因',
    name: 'result',
    span: 8,
    component: 'Input',
    required: true,
    disabled: true,
  },
  {
    label: '变更内容',
    name: 'content',
    span: 8,
    component: 'Input',
    required: true,
    disabled: true,
  },
  {
    label: '变更人',
    name: 'appliance',
    span: 8,
    component: 'Input',
    required: true,
    disabled: true,
  },
  {
    label: '审核人',
    name: 'moderator',
    span: 8,
    component: 'Select',
    required: true,
    disabled: true,
  },
  {
    label: '变更时间',
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
    title: '待变更设备编号',
    dataIndex: 'code',
    align: 'center',
  },
  {
    title: '待变更设备名称',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '待变更设备型号',
    dataIndex: 'model',
    align: 'center',
  },
]

onMounted(() => {
  nextTick(() => {
    if (props.mode === 'edit') {
      dataSource.value = { ...props.record }
      devices.value = props.record.devices ? [...props.record.devices] : []
    }
  })
})
</script>

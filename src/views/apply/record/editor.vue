<template>
  <BaseModal
    width="1000px"
    :loading="loading"
    :onBeforeConfirm="onBeforeConfirm"
    :footer="false"
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
import { BaseForm, BaseModal, useModalForm, BasePanel } from '@/components'
import { confirmbox } from '@/plugins/utils'
import { Button, Link, Space, Message, Table } from '@arco-design/web-vue'
import { createBaseModal } from '@/components/BaseModal'
import { ApprovalProcessOptionsEnum, DeviceCategoryEnum } from '@/enums'

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
    disabled: true,
  },
  {
    label: '申领内容',
    name: 'content',
    span: 8,
    component: 'Input',
    required: true,
    disabled: true,
  },
  {
    label: '申领人',
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

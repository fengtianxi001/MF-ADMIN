<template>
  <BaseModal
    ref="modal"
    width="1000px"
    ok-text="同意"
    cancel-text="驳回"
    :loading="loading"
  >
    <BaseDescriptions
      size="small"
      :column="3"
      :configs="configs"
      :modelValue="record"
      bordered
    />
    <Table
      style="margin-top: 15px"
      size="small"
      :columns="columns"
      :data="devices"
      :bordered="{ cell: true }"
      :pagination="false"
      :scroll="{ y: 300 }"
    />

    <BaseForm
      style="margin-top: 20px"
      label-width="70px"
      ref="form"
      v-model="dataSource"
      layout="horizontal"
      :configs="configs2"
    />
    <template #footer>
      <Space>
        <Button @click="onBeforeDeny">驳回</Button>
        <Button type="primary" @click="onBeforeConfirm">同意</Button>
      </Space>
    </template>
  </BaseModal>
</template>
<script setup lang="tsx">
import { onMounted, nextTick, ref } from 'vue'
import {
  BaseForm,
  BaseModal,
  useModalForm,
  BaseDescriptions,
} from '@/components'
import { Table, Button, Space } from '@arco-design/web-vue'

interface PropsType {
  mode: 'create' | 'edit'
  record?: any
}
const props = defineProps<PropsType>()
const modal = ref()
const { form, dataSource, loading, validate } = useModalForm()

const configs = [
  {
    label: '申请原因',
    name: 'result',
  },
  {
    label: '申请内容',
    name: 'content',
  },
  {
    label: '申请时间',
    name: 'time',
  },
  {
    label: '申请人',
    name: 'appliance',
  },
  // {
  //   label: '审核人',
  //   name: 'moderator',
  // },
]

const configs2 = [
  {
    label: '审核人',
    name: 'moderator',
    component: 'Input',
    span: 12,
    required: true,
  },
  {
    label: '审核时间',
    name: 'time',
    component: 'DatePicker',
    span: 12,
    required: true,
  },
  {
    label: '审核意见',
    name: 'approval',
    component: 'Textarea',
    span: 24,
    required: true,
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
    title: '待更换设备编号',
    dataIndex: 'code',
    align: 'center',
  },
  {
    title: '待更换设备名称',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '待更换设备型号',
    dataIndex: 'model',
    align: 'center',
  },
]

const onBeforeConfirm = async () => {
  const errorMsg = await validate()
  if (errorMsg) {
    //todo
  } else {
    modal.value.hide()
  }

  // return true
}

const onBeforeDeny = async () => {
  const errorMsg = await validate()
  if (errorMsg) {
    //todo
  } else {
    modal.value.hide()
  }
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

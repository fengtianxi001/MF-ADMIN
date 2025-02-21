<template>
  <BaseModalForm
    ref="form"
    v-model="dataSource"
    width="600px"
    label-width="100px"
    label-align="left"
    :configs="configs"
    :loading="loading"
    :onBeforeConfirm="onBeforeConfirm"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { BaseModalForm, useModalForm } from '@/components'
import { Message } from '@arco-design/web-vue'
import { SecretHierarchyOptionsEnum, DeviceCategoryOptionsEnum } from '@/enums'

const { form, dataSource, loading, validate } = useModalForm()

const configs = computed(() => [
  {
    label: '编号前缀',
    name: 'code',
    span: 12,
    component: 'Input',
    required: true,
  },
  {
    label: '名称前缀',
    name: 'name',
    span: 12,
    component: 'Input',
    required: true,
  },
  {
    label: '序号前缀',
    name: 'sequence',
    span: 12,
    component: 'Input',
    // required: true,
  },
  {
    label: '设备密级',
    name: 'secret',
    span: 12,
    component: 'Select',
    required: true,
    props: {
      options: [...SecretHierarchyOptionsEnum],
    },
  },
  {
    label: '设备类别',
    name: 'category',
    span: 12,
    component: 'Select',
    required: true,
    props: {
      options: [...DeviceCategoryOptionsEnum],
    },
  },
  {
    label: '设备数量',
    name: 'number',
    span: 12,
    component: 'InputNumber',
    required: true,
    props: {
      min: 1,
    },
  },
  {
    label: '购置时间',
    name: 'purchaseTime',
    span: 12,
    component: 'DatePicker',
    required: true,
  },
  {
    label: '入库人',
    name: 'warehouse',
    span: 12,
    component: 'Input',
    required: true,
  },
  {
    label: '入库时间',
    name: 'warehouseTime',
    span: 12,
    component: 'DatePicker',
    required: true,
  },
  {
    label: '设备型号',
    name: 'model',
    span: 12,
    component: 'Input',
    // required: true,
  },
  {
    label: '设备品牌',
    name: 'brand',
    span: 12,
    component: 'Input',
    // required: true,
  },

  {
    label: '生产厂商',
    name: 'manufacturer',
    span: 12,
    component: 'Input',
    // required: true,
  },
])

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
</script>

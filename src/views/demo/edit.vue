<template>
  <BaseModalForm
    ref="form"
    v-model="dataSource"
    width="500px"
    title="工程信息"
    :configs="configs"
    :loading="loading"
    :onBeforeConfirm="onBeforeConfirm"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { BaseModalForm, useModalForm } from '@/components'
import { Message } from '@arco-design/web-vue'

interface PropsType {
  mode: 'create' | 'edit'
  record?: any
}
const props = defineProps<PropsType>()

// const service = (params: any) => mockResponse(params)

const { form, dataSource, loading, validate } = useModalForm()

const configs = computed(() => [
  {
    span: 12,
    name: 'name',
    component: 'Input',
    label: '工程名称',
    required: true,
  },
  {
    span: 12,
    name: 'type',
    component: 'Select',
    label: '工程类型',
    required: true,
    props: {
      options: [
        {
          label: '灌区',
          value: 3,
        },
      ],
    },
  },
  {
    name: 'orgId',
    component: 'Input',
    label: '所属机构',
    required: true,
  },
  {
    name: 'charge',
    component: 'Input',
    label: '负责人',
  },
  {
    name: 'officeMobile',
    component: 'Input',
    label: '办公电话',
    rules: ['mobileRule'],
  },
  {
    name: 'chargeMobile',
    component: 'Input',
    label: '负责人联系电话',
    rules: ['mobileRule'],
  },
  {
    name: 'description',
    component: 'Textarea',
    label: '备注',
    props: {
      maxLength: 254,
      autoSize: {
        minRows: 2,
        maxRows: 5,
      },
    },
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

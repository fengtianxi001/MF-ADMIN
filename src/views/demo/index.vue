<template>
  <div class="page">
    <BaseTablePro
      v-model:selected="selected"
      ref="table"
      title="用户管理列表"
      row-key="id"
      selection="checkbox"
      :service="mock"
      :table-filter="tableFilter"
      :table-operates="tableOperates"
      :table-columns="tableColumns"
    />
  </div>
</template>
<script setup lang="tsx">
import { BaseTablePro, useTableMethods } from '@/components/BaseTable'
import { mockResponse, confirmbox } from '@/plugins/utils'
import { Badge, Link, Space } from '@arco-design/web-vue'
import { createBaseModal } from '@/components/BaseModal'
// import { userList, userDelete } from '@/apis/user'
import UserEditor from './edit.vue'
// import PasswordEditor from './src/PasswordEditor/index.vue'

const mock = () =>
  Promise.resolve({
    list: new Array(100).fill(0).map((o, i) => ({ id: i, username: i })),
    pageNum: 1,
    pageSize: 10,
    total: 100,
  })

const { table, selected, refresh } = useTableMethods()

const tableFilter = [
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
  {
    label: '用户名称',
    name: 'keyword',
    component: 'Input',
  },
]

const tableOperates = [
  {
    text: '新增用户',
    type: 'primary',
    icon: 'IconPlus',
    onClick: () => actions.onCreate(),
  },
  {
    text: '批量删除',
    type: 'primary',
    status: 'danger',
    icon: 'IconMinus',
    onClick: () => actions.onCreate(),
  },
]

const tableColumns = [
  {
    title: '用户名',
    dataIndex: 'username',
    align: 'left',
  },
  {
    title: '账号名',
    dataIndex: 'realName',
    align: 'center',
  },
  {
    title: '所属单位',
    dataIndex: 'unitName',
    align: 'center',
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    align: 'center',
  },
  // {
  //   title: '用户状态',
  //   dataIndex: 'status',
  //   align: 'center',
  //   render: ({ record }: any) => {
  //     const list: any = {
  //       0: { text: '已禁用', status: 'normal' },
  //       1: { text: '已启用', status: 'success' },
  //     }
  //     const current = list[record.status]
  //     return <Badge text={current.text} status={current.status} />
  //   },
  // },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    align: 'center',
  },
  {
    title: '操作',
    align: 'center',
    width: 320,
    render: ({ record }: any) => {
      return (
        <Space size={10}>
          <Link onClick={() => actions.onEdit(record)}>编辑</Link>
          <Link onClick={() => actions.onPasswordEdit(record)}>修改密码</Link>
          <Link onClick={() => actions.onRemoveBinding(record)}>解除绑定</Link>
          <Link onClick={() => actions.onDelete(record)}>删除</Link>
        </Space>
      )
    },
  },
]

const actions = {
  onCreate: async () => {
    const result = await createBaseModal(UserEditor, {
      mode: 'create',
      title: '创建用户',
    })
    result && refresh()
  },
  onEdit: async (record: any) => {
    // const result = await createBaseModal(UserEditor, {
    //   mode: 'edit',
    //   title: '修改用户',
    //   record,
    // })
    // result && refresh()
  },
  onPasswordEdit: async (record: any) => {
    // const result = await createBaseModal(PasswordEditor, {
    //   title: '修改密码',
    //   record,
    // })
    // result && refresh()
  },
  onRemoveBinding: async (record: any) => {
    // const server = async () => {}
    // const result = await confirmbox('解除绑定', server)
    // result && refresh()
  },
  onDelete: async (record: any) => {
    // const server = async () => userDelete(record.id)
    // const result = await confirmbox('删除', server)
    // result && refresh()
  },
}
</script>

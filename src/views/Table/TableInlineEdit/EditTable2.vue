<template>
  <BaseCard title="工程安全主要责任人">
    <template #extra>
      <BaseButtonGroup :data="tableButton"></BaseButtonGroup>
    </template>
    <a-table
      :columns="tableColumns"
      :data="tableData"
      :pagination="false"
      :bordered="false"
    >
      <template #name="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableData[rowIndex].name" />
        <span v-else> {{ record.name }}</span>
      </template>
      <template #department="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableData[rowIndex].department" />
        <span v-else> {{ record.department }}</span>
      </template>
      <template #phone="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableData[rowIndex].phone" />
        <span v-else> {{ record.phone }}</span>
      </template>
      <template #email="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableData[rowIndex].email" />
        <span v-else> {{ record.email }}</span>
      </template>
    </a-table>
  </BaseCard>
</template>
<script setup lang="tsx">
import { Message } from "@arco-design/web-vue";
import { computed, reactive, ref } from "vue";
import BaseCard from "@/components/BaseCard/index.vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";

const isEdit = ref(false);

const tableButton = computed(() => {
  const editing = [
    {
      type: "primary",
      text: "保存",
      size: "small",
      onClick: tableOperate.onSave,
    },
    {
      type: "primary",
      text: "取消",
      size: "small",
      onClick: tableOperate.onCancel,
    },
  ];
  const preEdit = [
    {
      type: "primary",
      text: "编辑",
      size: "small",
      onClick: tableOperate.onEdit,
    },
  ];
  return isEdit.value ? editing : preEdit;
});
const tableColumns: any = [
  {
    title: "责任人类型",
    dataIndex: "type",
  },
  {
    title: "姓名",
    width: 200,
    dataIndex: "name",
    slotName: "name",
  },
  {
    title: "工作单位",
    width: 200,
    dataIndex: "department",
    slotName: "department",
  },
  {
    title: "联系方式",
    width: 200,
    dataIndex: "phone",
    slotName: "phone",
  },
  {
    title: "邮件",
    dataIndex: "email",
    slotName: "email",
  },
];
const tableData = reactive<any[]>([
  {
    id: "1",
    type: "部门责任人",
    name: "张三",
    department: "某省某市某区某街道",
    phone: "18000000000",
    email: "fengtianxi001@example.com",
  },
  {
    id: "2",
    type: "单位责任人",
    name: "李四",
    department: "某省某市某区某街道",
    phone: "17000000000",
    email: "fengtianxi001@example.com",
  },
  {
    id: "3",
    type: "行政责任人",
    name: "王五",
    department: "某省某市某区某街道",
    phone: "17000000000",
    email: "fengtianxi001@example.com",
  },
  {
    id: "4",
    type: "技术责任人",
    name: "赵六",
    department: "某省某市某区某街道",
    phone: "17000000000",
    email: "fengtianxi001@example.com",
  },
  {
    id: "5",
    type: "巡查责任人",
    name: "钱七",
    department: "某省某市某区某街道",
    phone: "17000000000",
    email: "fengtianxi001@example.com",
  },
]);

const tableOperate = {
  onEdit: () => (isEdit.value = true),
  onCancel: () => (isEdit.value = false),
  onSave: () => {
    Message.success("保存成功");
    isEdit.value = false;
  },
};
</script>
<style lang="scss" scoped></style>

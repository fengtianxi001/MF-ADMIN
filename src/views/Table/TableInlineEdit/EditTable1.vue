<template>
  <BaseCard title="工程安全主要责任人">
    <a-table
      :columns="tableColumns"
      :data="tableData"
      :pagination="false"
      :bordered="false"
    >
      <template #name="{ record, column }">
        <a-input
          v-if="cacheData[record.id]"
          v-model="cacheData[record.id][column.dataIndex]"
        />
        <span v-else> {{ record.name }}</span>
      </template>
      <template #department="{ record, column }">
        <a-input
          v-if="cacheData[record.id]"
          v-model="cacheData[record.id][column.dataIndex]"
        />
        <span v-else> {{ record.department }}</span>
      </template>
      <template #phone="{ record, column }">
        <a-input
          v-if="cacheData[record.id]"
          v-model="cacheData[record.id][column.dataIndex]"
        />
        <span v-else> {{ record.phone }}</span>
      </template>
      <template #email="{ record, column }">
        <a-input
          v-if="cacheData[record.id]"
          v-model="cacheData[record.id][column.dataIndex]"
        />
        <span v-else> {{ record.email }}</span>
      </template>
    </a-table>
  </BaseCard>
</template>
<script setup lang="tsx">
import { cloneDeep } from "lodash";
import { Message } from "@arco-design/web-vue";
import { reactive } from "vue";
import BaseCard from "@/components/BaseCard/index.vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";

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
  {
    title: "操作",
    dataIndex: "action",
    align: "center",
    width: 200,
    render: ({ record }: any) => {
      const editing = [
        {
          type: "text",
          text: "保存",
          onClick: () => tableOperate.onSave(record.id),
        },
        {
          type: "text",
          text: "取消",
          onClick: () => tableOperate.onCancel(record.id),
        },
      ];
      const preEdit = [
        {
          type: "text",
          text: "编辑",
          onClick: () => tableOperate.onEdit(record.id),
        },
      ];
      const config = cacheData[record.id] ? editing : preEdit;
      return <BaseButtonGroup data={config}></BaseButtonGroup>;
    },
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
const cacheData = reactive<any>({});

const tableOperate = {
  onEdit: (id: string) => {
    cacheData[id] = cloneDeep(
      tableData.filter((item: any) => id === item.id)[0]
    );
  },
  onCancel: (id: string) => delete cacheData[id],
  onSave: async (id: string) => {
    Object.assign(
      tableData.filter((item: any) => id === item.id)[0],
      cacheData[id]
    );
    Message.success("保存成功");
    delete cacheData[id];
  },
};
</script>
<style lang="scss" scoped></style>

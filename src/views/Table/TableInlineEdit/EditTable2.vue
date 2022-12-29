<template>
  <BaseCard title="工程安全主要责任人" :loading="tableLoading">
    <template #extra>
      <BaseButtonGroup :data="tableButton"></BaseButtonGroup>
    </template>
    <a-table
      :columns="tableColumns"
      :data="tableData"
      :pagination="false"
      :bordered="false"
    >
      <template #principalName="{ record, rowIndex }">
        <UserPicker
          v-if="isEdit"
          v-model="tableEditData[rowIndex].principalId"
        />
        <span v-else> {{ record.principalName }}</span>
      </template>
      <template #department="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableEditData[rowIndex].department" />
        <span v-else> {{ record.department }}</span>
      </template>
      <template #contact="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableEditData[rowIndex].contact" />
        <span v-else> {{ record.department }}</span>
      </template>
      <template #phone="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableEditData[rowIndex].phone" />
        <span v-else> {{ record.phone }}</span>
      </template>
      <template #email="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableEditData[rowIndex].email" />
        <span v-else> {{ record.email }}</span>
      </template>
      <template #address="{ record, rowIndex }">
        <a-input v-if="isEdit" v-model="tableEditData[rowIndex].address" />
        <span v-else> {{ record.address }}</span>
      </template>
    </a-table>
  </BaseCard>
</template>
<script setup lang="tsx">
import { cloneDeep } from "lodash";
import { Message } from "@arco-design/web-vue";
import { computed, ref } from "vue";
import { useRequest, useBoolean, useLoading } from "@/hooks";
import { getProjectPrincipalList, saveProjectPrincipal } from "@/api/Project";
import BaseCard from "@/components/BaseCard/index.vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";
import UserPicker from "@/components/BaseForm/components/UserPicker/index.vue";

const { boolean: isEdit, setFalse, setTrue } = useBoolean(false);
const {
  loading: saveLoading,
  openLoading: openSaveLoading,
  closeLoading: closeSaveLoading,
} = useLoading();
const tableButton = computed(() => {
  const editing = [
    {
      type: "primary",
      text: "保存",
      size: "small",
      loading: saveLoading.value,
      disabled:
        JSON.stringify(tableData.value) === JSON.stringify(tableEditData.value),
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
    title: "责任人姓名",
    width: 200,
    slotName: "principalName",
  },
  {
    title: "责任人电话",
    width: 200,
    slotName: "contact",
  },
  {
    title: "责任人邮件",
    slotName: "email",
  },
  {
    title: "责任人工作单位",
    slotName: "department",
  },
  {
    title: "责任人通讯地址",
    slotName: "address",
  },
];
const tableEditData = ref<any>([]);
const {
  data: tableData,
  loading: tableLoading,
  run,
} = useRequest(getProjectPrincipalList, {
  defaultData: [],
  formatResult: (res) => res.data,
});
const tableOperate = {
  onEdit: () => {
    tableEditData.value = cloneDeep([...tableData.value]);
    setTrue();
  },
  onCancel: setFalse,
  onSave: async () => {
    openSaveLoading();
    await saveProjectPrincipal(tableEditData.value);
    closeSaveLoading();
    Message.success("保存成功");
    setFalse();
    run();
  },
};
</script>
<style lang="scss" scoped></style>

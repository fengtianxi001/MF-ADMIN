<template>
  <div class="page-container">
    <BaseCard title="工程项目列表">
      <BaseTableFilter
        v-model="search"
        label-width="70px"
        :configs="tableFilter"
        :query="run"
      />
      <BaseButtonGroup :data="tableButton" />
      <BaseTable
        v-model:selectedKeys="selected"
        row-key="id"
        :selection="true"
        :loading="loading"
        :columns="tableColumns"
        :data="dataSource"
        :pagination="pagination"
      />
    </BaseCard>
  </div>
</template>
<script setup lang="tsx">
import { size } from "lodash";
import { useTable } from "@/hooks";
import { getProjectList } from "@/api/Project";
import { Tag, Badge } from "@arco-design/web-vue";
import { computed, reactive } from "vue";
import ProjectForm from "./ProjectForm.vue";
import Modal from "@/components/BaseModal";
import BaseConfirm from "@/components/BaseConfirm";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";
import ProjectProfile from "./ProjectProfile.vue";
import BaseUserCard from "@/components/BaseUserCard/index.vue";
//表格筛选配置项
const tableFilter = reactive([
  {
    name: "name",
    component: "Input",
    label: "工程名称",
    formItemProps: {
      labelColFlex: "100px",
    },
  },
  {
    name: "principalId",
    component: "UserPicker",
    label: "工程负责人",
  },
  {
    name: "code",
    component: "Input",
    label: "工程编码",
  },
  {
    name: "type",
    component: "Select",
    label: "工程类型",
    props: {
      options: [
        {
          label: "土木工程",
          value: "1",
        },
        {
          label: "水利工程",
          value: "2",
        },
      ],
    },
  },
  {
    name: "status",
    component: "Select",
    label: "工程状态",
    props: {
      options: [
        {
          label: "正常",
          value: 1,
        },
        {
          label: "异常",
          value: 0,
        },
      ],
    },
  },
  {
    name: "createTime",
    component: "RangePicker",
    label: "建档时间",
    props: {
      format: "YYYY-MM-DD",
      placeholder: ["开始时间", "结束时间"],
    },
  },
]);
//表格按钮配置项
const tableButton = computed(() => [
  {
    type: "primary",
    status: "danger",
    disabled: size(selected.value) === 0,
    onClick: () => tableOperate.onDelect(selected.value),
    text: "批量删除",
  },
  {
    type: "primary",
    onClick: tableOperate.onCreate,
    text: "新增工程",
  },
]);
//表格列配置项
const tableColumns = [
  {
    title: "工程简介",
    width: 200,
    render: (record: any) => {
      const data = {
        name: record.name,
        picture: record.picture,
        description: record.address,
      };
      return <ProjectProfile data={data} />;
    },
  },
  {
    title: "工程负责人",
    width: 150,
    render: (record: any) => <BaseUserCard data={record.principal} />,
  },
  {
    title: "工程编码",
    align: "center",
    render: (record: any) => <Tag color="arcoblue">{record.code}</Tag>,
  },
  {
    title: "工程类型",
    align: "center",
    dataIndex: "type",
  },
  {
    title: "所属机构",
    align: "center",
    dataIndex: "organization",
  },
  {
    title: "工程状态",
    align: "center",
    dataIndex: "status",
    render: (record: any) => {
      const status = record.status === 1 ? "success" : "normal";
      const text = record.status === 1 ? "正常" : "异常";
      return <Badge status={status} text={text} />;
    },
  },
  {
    title: "建档时间",
    align: "center",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    align: "center",
    width: 150,
    render: (record: any) => {
      const configs = [
        {
          type: "text",
          text: "编辑",
          onClick: () => tableOperate.onEdit(record),
        },
        {
          type: "text",
          text: "删除",
          status: "danger",
          onClick: () => tableOperate.onDelect([record.id]),
        },
      ];
      return <BaseButtonGroup data={configs}></BaseButtonGroup>;
    },
  },
];
//获取表格数据
const { selected, loading, dataSource, search, pagination, run } =
  useTable(getProjectList);
//表格数据操作
const tableOperate = {
  onDelect: (ids: Array<string>) => {
    BaseConfirm({
      title: "确认删除",
      content: `确定要删除这${size(ids)}条报告吗?`,
      onBeforeOk: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      },
    });
  },
  onCreate: async () => {
    const result = await Modal(ProjectForm);
    result && run();
  },
  onEdit: async (record: any) => {
    const result = await Modal(ProjectForm, { id: record.id });
    result && run();
  },
};
</script>

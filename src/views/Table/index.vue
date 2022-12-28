<template>
  <div class="page-container">
    <BaseCard title="基本表格">
      <BaseTableFilter
        :configs="filterConfig"
        v-model="search"
        :query="run"
        label-width="60px"
        label-align="left"
      />
      <a-space wrap>
        <a-button
          type="primary"
          status="danger"
          :disabled="size(selected) === 0"
          @click="tableOperate.onDelect(selected)"
        >
          批量删除
        </a-button>
        <a-button type="primary" @click="tableOperate.onCreate"
          >新增报告</a-button
        >
      </a-space>
      <BaseTable
        v-model:selectedKeys="selected"
        row-key="id"
        :selection="true"
        :loading="loading"
        :columns="columns"
        :data="dataSource"
        :pagination="pagination"
      />
    </BaseCard>
  </div>
</template>
<script setup lang="tsx">
import { size } from "lodash";
import { useTable } from "@/hooks";
import { reactive } from "vue";
import { Button, ButtonGroup, Tag } from "@arco-design/web-vue";
import { IconBranch } from "@arco-design/web-vue/es/icon";
import { BreakdownPage, type BreakdownPageType } from "@/api/Breakdown";
import type { TableColumnDataType } from "@/hooks/useTable/types";
import BaseCard from "@/components/BaseCard/index.vue";
import BaseTableFilter from "@/components/BaseTableFilter/index.vue";
import BaseTable from "@/components/BaseTable/index.vue";
import BaseUserCard from "@/components/BaseUserCard/index.vue";
import BaseConfirm from "@/components/BaseConfirm";
import Modal from "@/components/BaseModal";
import Edit from "./Edit.vue";

const filterConfig = reactive([
  {
    name: "theme",
    component: "Input",
    label: "主题名称",
    formItemProps: {
      labelColFlex: "100px",
    },
  },
  {
    name: "order",
    component: "Input",
    label: "工单号",
  },
  {
    name: "sender",
    component: "UserPicker",
    label: "发送人",
  },
  {
    name: "node",
    component: "Select",
    label: "流程节点",
    props: {
      options: [
        {
          label: "节点1",
          value: "1",
        },
        {
          label: "节点2",
          value: "2",
        },
      ],
    },
  },
  {
    name: "createTimeRange",
    component: "RangePicker",
    label: "时间范围",
    props: {
      format: "YYYY-MM-DD",
      placeholder: ["开始时间", "结束时间"],
    },
  },
]);

const columns: TableColumnDataType<BreakdownPageType>[] = [
  {
    title: "主题",
    width: 200,
    dataIndex: "theme",
  },
  {
    title: "工单号",
    dataIndex: "order",
  },
  {
    title: "发送人",
    render: ({ record }) => <BaseUserCard data={record.sender}></BaseUserCard>,
  },
  {
    title: "流程节点",
    dataIndex: "node",
    render: ({ record }) => (
      <Tag>
        {{
          icon: <IconBranch />,
          default: record.node,
        }}
      </Tag>
    ),
  },
  {
    title: "发送时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    align: "center",
    width: 150,
    render: ({ record }) => (
      <ButtonGroup>
        <Button type="text" onClick={() => tableOperate.onEdit(record)}>
          编辑
        </Button>
        <Button
          type="text"
          status="danger"
          onClick={() => tableOperate.onDelect([record.id])}
        >
          删除
        </Button>
      </ButtonGroup>
    ),
  },
];

const { selected, loading, dataSource, search, pagination, run } =
  useTable<BreakdownPageType>(BreakdownPage);

const tableOperate = {
  onDelect: (ids: Array<string>) => {
    const content =
      size(ids) > 1
        ? `确定要删除这${size(ids)}条报告吗？`
        : "确定要删除这条报告吗？";
    BaseConfirm({
      title: "确认删除",
      content,
      onBeforeOk: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return true;
      },
    });
  },
  onCreate: async () => {
    const result = await Modal(Edit, { mode: "create" });
    if (result) run();
  },
  onEdit: async (record: any) => {
    const result = await Modal(Edit, { mode: "edit", record });
    console.log("result", result);
  },
};
</script>

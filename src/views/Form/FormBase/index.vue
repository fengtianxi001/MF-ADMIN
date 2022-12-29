<template>
  <div class="page-container form-base">
    <BaseCard title="工程特征信息表单" :loading="loading">
      <template #extra>
        <BaseButtonGroup :data="formButton" />
      </template>
      <BaseForm
        class="form"
        ref="form"
        layout="vertical"
        :configs="configs"
        v-model="data"
        label-width="100px"
      />
    </BaseCard>
  </div>
</template>
<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRequest, useForm, useBoolean } from "@/hooks";
import { Message } from "@arco-design/web-vue";
import { getProjectFeature } from "@/api/Project";
import { isEqual, cloneDeep } from "lodash";

const { boolean: canSave, setTrue, setFalse } = useBoolean(false);
const { form, validate, resetFields } = useForm();
let watcher: any = null;
const { data, loading, run } = useRequest(getProjectFeature, {
  defaultData: {},
  formatResult: (res) => res,
  onBefore: () => {
    watcher && watcher();
    resetFields();
  },
  onFinally: (res) => {
    const copy = cloneDeep(res);
    watcher = watchEffect(() =>
      isEqual(copy, data.value) ? setFalse() : setTrue()
    );
  },
});

// //表单提交
const onSubmit = async () => {
  const error = await validate();
  !error && Message.success("操作成功");
};

const formButton = computed(() => [
  {
    type: "primary",
    size: "small",
    disabled: !canSave.value,
    onClick: onSubmit,
    text: "保存变更",
  },
  {
    type: "primary",
    size: "small",
    onClick: run,
    text: "重置",
  },
]);

const configs = [
  {
    name: "level",
    component: "Select",
    label: "工程等别",
    required: true,
    props: {
      options: [
        { value: 1, label: "I" },
        { value: 2, label: "II" },
        { value: 3, label: "III" },
        { value: 4, label: "IV" },
        { value: 5, label: "V" },
      ],
    },
  },
  {
    name: "size",
    component: "Select",
    label: "工程规模",
    props: {
      options: [
        { value: 1, label: "大型" },
        { value: 2, label: "中型" },
        { value: 3, label: "小型" },
      ],
    },
  },
  {
    name: "type",
    component: "Select",
    label: "工程类型",
    props: {
      options: [
        { value: 1, label: "大地工程" },
        { value: 2, label: "结构工程" },
        { value: 3, label: "地震工程" },
        { value: 4, label: "水利工程" },
      ],
    },
  },
  {
    name: "structure",
    component: "Select",
    label: "工程结构",
    props: {
      options: [
        { value: 1, label: "线构材" },
        { value: 2, label: "面构材" },
        { value: 3, label: "空间构材" },
      ],
    },
  },
  {
    name: "seismicGrade",
    component: "InputNumber",
    label: "工程抗震等级",
    props: {
      max: 15,
      min: 0,
      precision: 0,
    },
  },
  {
    name: "industry",
    component: "Select",
    label: "工程领域",
    props: {
      options: [
        { value: 1, label: "公共设施" },
        { value: 2, label: "社会性基础设施" },
      ],
    },
  },
  {
    name: "area",
    component: "InputNumber",
    label: "工程面积(平方公里)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      precision: 2,
    },
  },
  {
    name: "price",
    component: "InputNumber",
    label: "工程造价(万元)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      precision: 2,
    },
  },
  {
    name: "baseType",
    component: "Select",
    label: "工程地基特性",
    props: {
      options: [
        { value: 0, label: "天然地基" },
        { value: 1, label: "人工地基" },
      ],
    },
  },
  {
    name: "baseHeight",
    component: "InputNumber",
    label: "工程地基厚度(米)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "monitorType",
    label: "工程监测方式",
    component: "Select",
    props: {
      options: [
        { value: 0, label: "传感器" },
        { value: 1, label: "人工巡检" },
      ],
    },
  },
  {
    name: "status",
    component: "Select",
    label: "工程建设情况",
    props: {
      options: [
        { value: 0, label: "在建" },
        { value: 1, label: "已建" },
      ],
    },
  },
  {
    name: "certification",
    label: "工程施工单位资质",
    component: "Select",
    props: {
      options: [
        { value: 0, label: "国营单位" },
        { value: 1, label: "私营企业" },
      ],
    },
  },
  {
    name: "maintOutlay",
    label: "平均年运行维护成本(万元)",
    component: "InputNumber",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      precision: 2,
    },
  },
  {
    name: "startDate",
    component: "DatePicker",
    label: "开工时间",
    props: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      style: { width: "100%" },
    },
  },
  {
    name: "endDate",
    component: "DatePicker",
    label: "建成时间",
    props: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      style: { width: "100%" },
    },
  },
  {
    name: "department",
    component: "Select",
    label: "归口管理部门",
    props: {
      options: [
        { value: 1, label: "水利部门" },
        { value: 2, label: "电力部们" },
        { value: 3, label: "农业部门" },
        { value: 4, label: "林业部门" },
        { value: 5, label: "城建部门" },
        { value: 6, label: "航运部门" },
        { value: 7, label: "环保部门" },
        { value: 9, label: "其他部门" },
      ],
    },
  },
];
</script>
<style lang="scss">
.form-base {
  .form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 40px;
    width: 100%;
  }
}
</style>

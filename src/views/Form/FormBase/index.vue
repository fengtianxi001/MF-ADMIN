<template>
  <div class="page-container form-base">
    <BaseCard title="基础表单">
      <template #extra>
        <BaseButtonGroup :data="formButton" style="margin-bottom: 10px" />
      </template>
      <Spin :loading="loading">
        <BaseForm
          class="form"
          ref="formRef"
          layout="vertical"
          :configs="configs"
          v-model="form"
          label-width="100px"
        />
      </Spin>
    </BaseCard>
  </div>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import { useRequest } from "@/hooks";
import { Message, Spin } from "@arco-design/web-vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";

import BaseForm from "@/components/BaseForm/index.vue";
import { ref } from "vue";
const fetchData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({});
    }, 1000)
  );
const {
  data: form,
  loading,
  run,
} = useRequest(fetchData, {
  defaultData: {},
  formatResult: (res) => res,
});

// //表单提交
const formRef = ref();
const onSubmit = async () => {
  const error = await formRef.value.validate();
  !error && Message.success("操作成功");
};

const formButton = [
  {
    type: "primary",
    size: "small",
    onClick: onSubmit,
    text: "提交",
  },
  {
    type: "primary",
    size: "small",
    onClick: run,
    text: "重置",
  },
];
const configs = [
  {
    name: "resType",
    component: "Select",
    label: "水库类型",
    required: true,
    props: {
      options: [
        { value: 1, label: "山丘水库" },
        { value: 2, label: "平原水库" },
        { value: 3, label: "地址水库" },
      ],
    },
  },
  {
    name: "engGrad",
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
    name: "engScal",
    component: "Select",
    label: "工程规模",
    props: {
      options: [
        { value: 1, label: "大(1)型" },
        { value: 2, label: "大(2)型" },
        { value: 3, label: "中型" },
        { value: 4, label: "小(1)型" },
        { value: 5, label: "小(2)型" },
        { value: 6, label: "其他" },
      ],
    },
  },
  {
    name: "watShedArea",
    component: "InputNumber",
    label: "流域面积(km^2)",

    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "uppLevFlco",
    component: "InputNumber",
    label: "防洪高水位(m)",

    props: {
      max: Math.pow(10, 5) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 3,
    },
  },
  {
    name: "normWatLev",
    component: "InputNumber",
    label: "正常蓄水位(m)",

    props: {
      max: Math.pow(10, 5) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 3,
    },
  },
  {
    name: "normPoolStagArea",
    component: "InputNumber",
    label: "应水面面积(km^2)",
    props: {
      max: Math.pow(10, 4) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "normPoolStagCap",
    component: "InputNumber",
    label: "库容(10m^3)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "flLowLimLev",
    component: "InputNumber",
    label: "防洪限制水位(m)",
    props: {
      max: Math.pow(10, 5) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 3,
    },
  },
  {
    name: "flLowLimLevCap",
    component: "InputNumber",
    label: "防洪限制库容(10^4m^3)",

    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "deadLev",
    component: "InputNumber",
    label: "死水位(m)",
    props: {
      max: Math.pow(10, 5) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 3,
    },
  },
  {
    name: "totCap",
    component: "InputNumber",
    label: "总库容(10^4m^3)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "benResCap",
    component: "InputNumber",
    label: "兴利库容(10^4m^3)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "deadCap",
    component: "InputNumber",
    label: "死库容(10^4m^3)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "storFlCap",
    component: "InputNumber",
    label: "调洪库容(10^4m^3)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "flcoCap",
    component: "InputNumber",
    label: "防洪库容(10^4m^3)",
    props: {
      max: Math.pow(10, 7) - 1,
      min: 0,
      style: { width: "100%" },
      precision: 2,
    },
  },
  {
    name: "engStat",
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
    name: "compDate",
    component: "DatePicker",
    label: "建成时间",
    props: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      style: { width: "100%" },
    },
  },
  {
    name: "admDep",
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

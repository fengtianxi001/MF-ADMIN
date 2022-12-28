<template>
  <BaseCard title="工程基本信息">
    <a-descriptions class="project-info" size="mini" :data="data" :column="5">
      <a-descriptions-item
        v-for="(item, index) of data"
        :key="index"
        :label="item.label"
      >
        <a-tag>{{ item.value }}</a-tag>
      </a-descriptions-item>
    </a-descriptions>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
const data = [
  {
    label: "工程名字",
    value: "某某工程",
  },
  {
    label: "负责人",
    value: "肛肠科冯主任",
  },
  {
    label: "负责人联系方式",
    value: "18000000000",
  },
  {
    label: "工程建档时间",
    value: "2022-02-02 12:12:12",
  },
  {
    label: "管理单位",
    value: "北京市肛肠科医院",
  },
  {
    label: "工程地址",
    value: "北京市海淀区中关村大街",
  },
  {
    label: "工程等级",
    value: "一级",
  },
  {
    label: "工程类型",
    value: "新建",
  },
];
</script>
<style lang="scss" scoped>
.project-info {
  :deep(.arco-descriptions-row) {
    &:not(:last-child) {
      .arco-descriptions-item-label,
      .arco-descriptions-item-value {
        padding-bottom: 15px;
      }
    }
  }
}
</style>

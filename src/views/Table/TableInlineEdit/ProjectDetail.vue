<template>
  <BaseCard title="工程基本信息" :loading="loading">
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
import { getProjectDetail } from "@/api/Project";
import { useRequest } from "@/hooks";

const { data, loading } = useRequest(getProjectDetail, {
  defaultParams: [1],
  defaultData: {},
  formatResult: (res) => {
    return [
      {
        label: "工程名字",
        value: res.name,
      },
      {
        label: "工程负责人",
        value: res.principal?.name,
      },
      {
        label: "工程编码",
        value: res.code,
      },
      {
        label: "工程类型",
        value: res.type,
      },
      {
        label: "管理单位",
        value: res.department,
      },
      {
        label: "工程地址",
        value: res.address,
      },
      {
        label: "所属机构",
        value: res.organization,
      },
      {
        label: "工程状态",
        value: res.status === 1 ? "正常" : "停用",
      },
      {
        label: "建档时间",
        value: res.createTime,
      },
    ];
  },
});
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

<template>
  <Card class="base-card" v-bind="$attrs">
    <template #extra>
      <slot name="extra"></slot>
    </template>

    <slot></slot>
  </Card>
</template>
<script setup lang="ts">
import { Card } from "@arco-design/web-vue";
</script>
<style lang="scss" scoped>
.base-card {
  border-radius: 4px;
  border: none;
  :deep(.arco-card-header) {
    border: none;
    padding: 14px 20px 18px;
    height: auto;
  }
  :deep(.arco-card-body) {
    padding: 0 20px 20px;
  }
}
</style>

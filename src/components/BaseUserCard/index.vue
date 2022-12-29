<template>
  <div class="base-user-card">
    <BaseAvatar class="user-avatar" :name="data.name" :size="32" />
    <div class="user-info">
      <div class="user-info-name">{{ data.name }}</div>
      <div class="user-info-title">{{ data.title }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseAvatar from "@/components/BaseAvatar/index.vue";
interface PropsType {
  data: {
    name: string;
    title: string;
  };
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.base-user-card {
  display: flex;
  gap: 6px;
  align-items: center;
  .user-info-name {
    font-size: 12px;
    color: var(--color-text-1);
    line-height: 18px;
  }
  .user-info-title {
    font-size: 12px;
    color: #999;
    line-height: 18px;
  }
}
</style>

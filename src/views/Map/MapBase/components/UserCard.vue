<template>
  <div class="user-card">
    <Avatar :size="30" class="avatar">{{ name.slice(0, 1) }}</Avatar>
    <div class="info">
      <div class="name">{{ name }}</div>
      <div class="title">{{ title }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Avatar } from "@arco-design/web-vue";
interface PropsType {
  name: string;
  title: string;
}
defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.user-card {
  display: flex;
  align-items: center;
  .avatar {
    flex-shrink: 0;
  }
  .info {
    margin-left: 8px;
    font-size: 12px;
    .name {
      color: #333;
    }
    .title {
      color: #999;
    }
  }
}
</style>

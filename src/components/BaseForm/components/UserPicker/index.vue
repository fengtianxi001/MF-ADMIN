<template>
  <Select allow-search>
    <Option
      v-for="user in userList"
      :key="user.id"
      :value="user.id"
      :label="user.name"
    >
      <BaseUserCard class="user-picker-option" :data="user" />
    </Option>
  </Select>
</template>
<script setup lang="ts">
import { Select, Option } from "@arco-design/web-vue";
import BaseUserCard from "@/components/BaseUserCard/index.vue";
interface PropsType {}
const props = defineProps<PropsType>();

const userList = [
  {
    id: 1,
    name: "张三",
    title: "总经理",
  },
  {
    id: 2,
    name: "李四",
    title: "总经理",
  },
  {
    id: 3,
    name: "王五",
    title: "总经理",
  },
];
</script>
<style lang="scss" scoped>
.user-picker-option {
  box-sizing: content-box;
  padding: 4px 0;
}
</style>

<template>
  <Select allow-search>
    <Option
      v-for="user in data"
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
import { getUserList } from "@/api/User";
import { useRequest } from "@/hooks";

const { data } = useRequest(getUserList, {
  defaultData: [],
  formatResult: (res) => res,
});
</script>
<style lang="scss" scoped>
.user-picker-option {
  box-sizing: content-box;
  padding: 4px 0;
}
</style>

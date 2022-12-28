<template>
  <Space nowrap>
    <Button v-for="(item, index) in data" :key="index" v-bind="{ ...item }">
      {{ item.text }}
    </Button>
  </Space>
</template>
<script setup lang="ts">
import { Space, Button } from "@arco-design/web-vue";
interface PropsType {
  data: any[];
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped></style>

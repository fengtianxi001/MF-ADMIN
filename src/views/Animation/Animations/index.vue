<template>
  <div class="demo"></div>
</template>
<script setup lang="ts">
interface PropsType {}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 10000px;
  background-color: #fff;
}
</style>

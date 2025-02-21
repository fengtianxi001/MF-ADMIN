<template>
  <div class="header-user">
    <img src="../../assets/avatar.png" alt="" />
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.header-user {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  overflow: hidden;
  color: #fff;
  cursor: pointer;
  background-color: rgba(var(--primary-6), 0.9);
  border-radius: 50%;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>

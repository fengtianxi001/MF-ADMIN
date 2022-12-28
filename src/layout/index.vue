<template>
  <div class="layout">
    <LayoutHeader />
    <LayoutMain />
  </div>
</template>
<script setup lang="ts">
import LayoutHeader from "./components/LayoutHeader/index.vue";
import LayoutMain from "./components/LayoutMain/index.vue";
</script>
<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100%;
  background-color: var(--color-fill-2);
}
</style>

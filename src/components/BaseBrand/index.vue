<template>
  <div class="header-brand">
    <img class="header-brand-logo" :src="app.logo" alt="logo" />
    <span class="header-brand-name">{{ app.name }}</span>
  </div>
</template>
<script setup lang="ts">
import { useApp } from "@/stores/app";
const app = useApp().state;
</script>
<style lang="scss" scoped>
.header-brand {
  height: 100%;
  @include flex($gap: 6px, $align: center);
  color: var(--color-text-1);
  padding: 0 12px;
  .header-brand-logo {
    width: 28px;
    height: 28px;
  }
  .header-brand-name {
    font-size: 22px;
    font-weight: bolder;
    font-family: Rubik;
  }
}
</style>

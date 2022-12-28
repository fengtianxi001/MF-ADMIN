<template>
  <div class="board-panel">
    <slot></slot>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.board-panel {
  display: grid;
  grid-gap: 10px;
  :deep(.arco-input.arco-input-size-small) {
    font-size: 12px;
  }
  :deep(.arco-table-size-small) {
    .arco-table-td,
    .arco-table-th {
      .arco-table-cell {
        padding: 4px 8px;
        font-size: 12px;
      }
    }
  }
}
</style>

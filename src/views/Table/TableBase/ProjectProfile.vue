<template>
  <div class="project-profile">
    <a-image :width="40" :height="40" :src="data.picture" />
    <div class="info">
      <div class="name">{{ data.name }}</div>
      <div class="desc">{{ data.description }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface PropsType {
  data: {
    name: string;
    picture: string;
    description: string;
  };
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.project-profile {
  @include flex($justify: flex-start, $align: center, $gap: 6px);
  width: 200px;
  .info {
    @include flex($direction: column, $justify: center, $align: flex-start);
    .name {
      font-size: 14px;
    }
    .desc {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

<template>
  <div class="base-avatar" :style="style">{{ firstLetter }}</div>
</template>
<script setup lang="ts">
import useAvatar from './hooks/useAvatar';
interface PropsType {
  name: string;
  size?: number;
}
const props = defineProps<PropsType>();
const { style, firstLetter } = useAvatar(props.name, props.size);
</script>
<style lang="scss" scoped>
.base-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #fff;
  border-radius: 50%;
}
</style>

<template>
  <div class="header-refresh" @click="onHandler">
    <IconRefresh :spin="spin" class="icon"></IconRefresh>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { IconRefresh } from '@arco-design/web-vue/es/icon'
// interface PropsType {}
// const props = defineProps<PropsType>()

const spin = ref(false)

const onHandler = async () => {
  spin.value = true
  setTimeout(() => {
    window.location.reload()
  }, 500)
}
</script>
<style lang="scss" scoped>
.header-refresh {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  overflow: hidden;
  font-size: 16px;
  color: var(--color-text-1);
  cursor: pointer;
  background-color: var(--color-fill-2);
  border-radius: 50%;
  &:hover {
    background-color: var(--color-fill-3);
  }
}
</style>

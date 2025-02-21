<template>
  <div class="header-theme" @click="onHandler">
    <IconSunFill v-show="AppTheme === 'dark'" />
    <IconMoonFill v-show="AppTheme !== 'dark'" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IconSunFill, IconMoonFill } from '@arco-design/web-vue/es/icon'
import { AppTheme } from '@/layout/stores/settings'

const onHandler = async (event: MouseEvent) => {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )
  AppTheme.value = AppTheme.value === 'dark' ? 'light' : 'dark'

  const isDark = AppTheme.value === 'dark'

  const transition = document.startViewTransition(() => {
    const root = document.documentElement
    root.classList.remove(isDark ? 'dark' : 'light')
    root.classList.add(isDark ? 'light' : 'dark')
    document.body.setAttribute('arco-theme', isDark ? 'dark' : 'light')
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : [...clipPath],
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      }
    )
  })
}

onMounted(() => {
  const isDark = AppTheme.value === 'dark'
  document.body.setAttribute('arco-theme', isDark ? 'dark' : 'light')
})
</script>
<style lang="scss" scoped>
.header-theme {
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
<style>
.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 999;
}
::view-transition-old(root) {
  z-index: 999;
  mix-blend-mode: normal;
  animation: none;
}
::view-transition-new(root) {
  z-index: 1;
  mix-blend-mode: normal;
  animation: none;
}
</style>

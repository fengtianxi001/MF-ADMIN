<template>
  <Menu
    class="layout-menu"
    theme="dark"
    auto-open
    auto-scroll-into-view
    auto-open-selected
    accordion
    style="user-select: none"
    :selected-keys="keys"
    :popup-max-height="500"
    :level-indent="15"
    @menu-item-click="onclick"
  >
    <LayoutMenuItem :routes="routes" />
  </Menu>
</template>
<script setup lang="ts">
import { Menu } from '@arco-design/web-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LayoutMenuItem from './MenuItem'

interface PropsType {
  routes: any[]
}
defineProps<PropsType>()

const route = useRoute()
const router = useRouter()
const keys = computed(() => route.matched.map((item) => item.path))

const onclick = (key: string) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
  if (regex.test(key)) {
    window.open(key, '_blank')
  } else {
    router.push(key)
  }
}
</script>
<style lang="scss">
@import './reset';
.layout-menu {
  height: calc(100% - 49px);
  :deep(.arco-menu-inner) {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}
</style>

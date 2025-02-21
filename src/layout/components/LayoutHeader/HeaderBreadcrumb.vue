<template>
  <Breadcrumb class="header-breadcrumb">
    <BreadcrumbItem
      class="header-breadcrumb-item"
      v-for="{ name, path } in dataSource"
      :key="path"
      @click="onclick(path)"
    >
      {{ name }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from '@arco-design/web-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const router = useRouter()

const dataSource = computed(() =>
  route.matched
    .map(({ path, meta: { title: name } }) => ({
      path,
      name,
    }))
    .filter((item) => item.name)
)

const onclick = (path: string) => {
  router.push(path)
}
</script>
<style lang="scss">
.header-breadcrumb {
  user-select: none;
  .header-breadcrumb-item {
    cursor: pointer;
  }
}
</style>

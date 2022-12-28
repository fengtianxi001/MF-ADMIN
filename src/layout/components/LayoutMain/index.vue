<template>
  <div class="layout-main">
    <LayoutMainMenu v-model:collapsed="collapsed" />
    <LayoutMainTabs :style="style" />
    <div class="layout-content" :style="style">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import LayoutMainMenu from "./LayoutMainMenu/index.vue";
import LayoutMainTabs from "./LayoutMainTabs/index.vue";
const collapsed = ref(false);

const style = computed(() => ({
  marginLeft: collapsed.value ? "48px" : "190px",
}));

onMounted(() => {
  window.addEventListener("resize", () => {
    const { clientWidth } = document.body;
    collapsed.value = clientWidth < 1200 ? true : false;
  });
});
</script>
<style lang="scss">
@import "../../styles/variable.scss";
.layout-main {
  @include flex(row, flex-start, flex-start);
  background-color: var(--color-fill-2);
  .layout-content {
    display: grid;
    margin-top: calc(#{$layout_header_height} + 34px);
    min-height: calc(#{$layout_content_height} - 34px);
    flex: 1;
    background-color: var(--color-fill-2);
    box-sizing: border-box;
  }
}
</style>

<template>
  <div ref="container" class="picker-trigger"></div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, ref, watchEffect } from "vue";
import useMap from "../hooks/useMap";
interface PropsType {
  value: any;
}
const props = defineProps<PropsType>();
const container = ref();
const { initialize, addGeoJson, emptyLayer } = useMap(container);

onMounted(() => {
  nextTick(() => {
    initialize();
    watchEffect(() => {
      if (props.value) {
        emptyLayer();
        addGeoJson(props.value);
      } else {
        emptyLayer();
      }
    });
  });
});
</script>
<style lang="scss" scoped>
.picker-trigger {
  width: 100%;
  height: 100%;
  background-color: var(--color-fill-2);
  border-radius: var(--border-radius-small);
}
</style>

<template>
  <div class="marker">
    <div class="marker-dot"></div>
    <Popover
      title="车辆信息"
      position="right"
      class="marker-label"
      trigger="hover"
    >
      <div class="marker-popup">
        <span>{{ data.name }}</span>
      </div>
      <template #content>
        <ul class="marker-descriptions">
          <li
            v-for="({ label, value }, index) in listData"
            :key="index"
            class="marker-descriptions-item"
          >
            <Tag class="label">{{ label }}:</Tag>
            <span class="value">{{ value }}</span>
          </li>
        </ul>
        <Button
          type="primary"
          style="width: 100%; margin-top: 4px"
          size="mini"
          @click="viewTo3D"
        >
          查看详细信息
        </Button>
      </template>
    </Popover>
  </div>
</template>
<script setup lang="ts">
import { Popover, Tag, Button } from "@arco-design/web-vue";
import { onMounted, ref } from "vue";

interface ProsType {
  data: any;
}
const props = defineProps<ProsType>();
const listData = ref<any[]>([]);
const viewTo3D = () => {};
onMounted(() => {
  listData.value = [
    {
      label: "车牌",
      value: props.data.name,
    },
    {
      label: "坐标",
      value: `${props.data.coordinates[0]}, ${props.data.coordinates[1]}`,
    },
    {
      label: "状态",
      value: props.data.status === 1 ? "在线" : "离线",
    },
    {
      label: "时间",
      value: "2022-09-01 12:00:00",
    },
  ];
});
</script>
<style lang="scss" scoped>
.marker {
  position: relative;
  width: 12px;
  height: 12px;
  .marker-dot {
    width: 100%;
    height: 100%;
    background-color: #3b82f7;
    border-radius: 50%;
    border: 2px solid #fff;
    transform-origin: center center;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .marker-popup {
    width: 65px;
    height: 26px;
    border-radius: 2px;
    border: 2px solid #fff;
    overflow: hidden;
    position: absolute;
    bottom: 16px;
    left: calc(-32.5px + 8px);
    background-color: #1453ff;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    span {
      transform-origin: center center;
      transform: scale(0.89);
    }
  }
  .marker-label {
    :deep(.arco-popover-popup-content) {
      border: none !important;
    }
  }
}
.marker-descriptions {
  font-size: 12px;
  margin: 10px 0;
  display: grid;
  grid-gap: 6px;
  .marker-descriptions-item {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 13px;
  }
}
</style>

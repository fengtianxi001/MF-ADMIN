<template>
  <div class="color-picker">
    <div class="color-picker-input" :style="style" @click="onClick">
      <span v-if="isEmpty">{{ placeholder }}</span>
    </div>
    <span v-if="!isEmpty" class="color-picker-empty" @click="onEmpty">
      <icon-close />
    </span>
    <input ref="inputRef" v-model="color" type="color" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";
import { IconClose } from "@arco-design/web-vue/es/icon";
interface PropsType {
  modelValue: any;
}
const props = defineProps<PropsType>();
const emit = defineEmits(["update:modelValue"]);
const inputRef = ref();
const color = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
const onClick = () => {
  inputRef.value.click();
  inputRef.value.focus();
};
const style = computed(() => {
  return {
    backgroundColor: color.value || "transparent",
  };
});
const placeholder = computed(() => {
  return color.value ? "" : "请选择颜色";
});
const isEmpty = computed(() => {
  return !color.value;
});
const onEmpty = () => {
  color.value = undefined;
};
</script>
<style lang="scss" scoped>
.color-picker {
  box-sizing: border-box;
  position: relative;
  border-radius: var(--border-radius-small);
  background-color: var(--color-fill-2);
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: #f2f3f5;
  height: 28px;
  padding: 4px;
  display: flex;
  padding-right: 8px;
  gap: 8px;
  width: 100%;
  transition: color 0.1s cubic-bezier(0, 0, 1, 1),
    border-color 0.1s cubic-bezier(0, 0, 1, 1), background-color 0.1s;
  cursor: pointer;
  &:hover {
    background-color: var(--color-fill-3);
  }
  &:has(input:focus-within) {
    border-color: rgb(var(--primary-6));
  }
  .color-picker-input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 8px;
    color: #8f96a1;
    font-size: 14px;
    border-radius: 2px;
    position: relative;
  }
  .color-picker-empty {
    //   position: absolute;
    //   right: 4px;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: var(--color-text-2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
      background-color: var(--color-fill-4);
    }
  }
  input {
    width: 10px;
    height: 10px;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.arco-form-item-status-error {
  .color-picker {
    background-color: var(--color-danger-light-1);
  }
}
</style>

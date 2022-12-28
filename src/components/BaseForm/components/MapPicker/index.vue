<template>
  <div class="polygon-picker" @click="onClick">
    <div v-show="!modelValue" class="picker-placeholder">{{ placeholder }}</div>
    <PickerTrigger v-if="modelValue" :value="modelValue" />
    <span v-show="modelValue" class="color-picker-empty" @click.stop="onEmpty">
      <icon-close />
    </span>
  </div>
</template>
<script setup lang="ts">
import Modal from "@/components/BaseModal";
import PickerModal from "./components/PickerModal.vue";
import PickerTrigger from "./components/PickerTrigger.vue";
import { IconClose } from "@arco-design/web-vue/es/icon";

interface PropsType {
  placeholder?: string;
  modelValue?: any;
}
const props = defineProps<PropsType>();
const emit = defineEmits(["update:modelValue"]);
const onClick = async () => {
  const result = await Modal(PickerModal, { modelValue: props.modelValue });
  emit("update:modelValue", result);
};
const onEmpty = () => {
  emit("update:modelValue", undefined);
};
</script>
<style lang="scss" scoped>
.polygon-picker {
  width: 100%;
  height: 80px;
  background-color: var(--color-fill-2);
  border-radius: var(--border-radius-small);
  transition: color 0.1s cubic-bezier(0, 0, 1, 1),
    border-color 0.1s cubic-bezier(0, 0, 1, 1), background-color 0.1s;
  position: relative;
  cursor: pointer;
  padding: 4px;
  &:hover {
    background-color: var(--color-fill-3);
  }
  .picker-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    padding-left: 12px;
    padding-top: 4px;
    color: #8f96a1;
    font-size: 14px;
  }
}
.color-picker-empty {
  position: absolute;
  right: 8px;
  top: 4px;
  z-index: 999;
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
.arco-form-item-status-error {
  .polygon-picker {
    background-color: var(--color-danger-light-1);
  }
}
</style>

<template>
  <Modal
    :visible="visible"
    cancel-text="取消"
    ok-text="提交"
    title-align="center"
    :width="800"
    :unmount-on-close="true"
    :on-before-ok="onBeforeOk"
    @ok="onOk"
    @cancel="onClose"
  >
    <Spin :loading="loading">
      <slot></slot>
    </Spin>
  </Modal>
</template>
<script setup lang="ts">
import { useVisible } from "@/hooks";
import { Modal } from "@arco-design/web-vue";
import { isFunction } from "lodash";
import { Spin } from "@arco-design/web-vue";
const { visible, hide } = useVisible(true);
interface PropsType {
  onBeforeConfirm?: () => Promise<boolean>;
  onConfirm?: () => void;
  onCancel?: () => void;
  resolve?: (value: any) => void;
  loading?: boolean;
}
const props = defineProps<PropsType>();
const onOk = async () => {
  const { onConfirm, resolve } = props;
  if (isFunction(onConfirm)) {
    const result = await onConfirm();
    if (result !== false) {
      resolve?.(true);
      hide();
    }
  } else {
    hide();
    resolve?.(true);
  }
};
const onBeforeOk = async () => {
  const { onBeforeConfirm, resolve } = props;
  if (isFunction(onBeforeConfirm)) {
    const result = await onBeforeConfirm();
    if (result === false) {
      return false;
    }
  }
  resolve?.(true);
  return true;
};
const onClose = () => {
  const { onCancel, resolve } = props;
  isFunction(onCancel) && onCancel();
  isFunction(resolve) && resolve(false);
  hide();
};
</script>

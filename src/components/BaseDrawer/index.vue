<template>
  <Drawer :visible="visible" @ok="onOk" @cancel="onClose" unmountOnClose>
    <slot></slot>
  </Drawer>
</template>
<script setup lang="ts">
import { useVisible } from '@/hooks';
import { Drawer } from '@arco-design/web-vue';
import { isFunction } from 'lodash';
const { visible, hide } = useVisible(true);
interface PropsType {
  onBeforeConfirm?: () => Promise<boolean>;
  onConfirm?: () => void;
  onCancel?: () => void;
  resolve?: (value: any) => void;
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

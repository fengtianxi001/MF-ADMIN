<template>
  <Modal :title="title" width="500px" :onBeforeConfirm="onBeforeConfirm">
    <BaseForm ref="formRef" v-model="form" :configs="configs" size="small" />
  </Modal>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { LocationFenceListType } from '@/api/Location/types';
import Modal from '@/components/BaseModal/index.vue';
import BaseForm from '@/components/BaseForm/index.vue';
import { Message } from '@arco-design/web-vue';

interface PropsType {
  data?: LocationFenceListType;
}
const props = defineProps<PropsType>();

const configs = computed(() => [
  {
    label: '围栏名称',
    name: 'name',
    component: 'Input',
    required: true,
  },
  {
    label: '告警方式',
    name: 'mode',
    component: 'Select',
    required: true,
    props: {
      options: [
        { label: '出围栏告警', value: 0 },
        { label: '进围栏告警', value: 1 },
      ],
    },
  },
  {
    label: '缓冲时间',
    name: 'buffer',
    component: 'Select',
    required: true,
    props: {
      options: [
        { label: '5秒', value: 5 },
        { label: '10秒', value: 10 },
        { label: '20秒', value: 20 },
        { label: '30秒', value: 30 },
      ],
    },
  },
  {
    label: '围栏颜色',
    name: 'color',
    component: 'ColorPicker',
    required: true,
  },
  {
    label: '围栏区域',
    name: 'geojson',
    component: 'MapPicker',
    required: true,
  },
]);

const form = ref({});
const formRef = ref();
const title = computed(() => (props.data ? '编辑围栏' : '添加新围栏'));

const onBeforeConfirm = async () => {
  const errorMsg = await formRef.value.validate();
  if (errorMsg) return false;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  Message.success('操作成功');
  return true;
};

onMounted(() => {
  if (!props.data) return void 0;
  form.value = { ...props.data };
});
</script>

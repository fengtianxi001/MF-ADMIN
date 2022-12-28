<template>
  <Modal :title="title" width="500px" :onBeforeConfirm="onBeforeConfirm">
    <BaseForm ref="formRef" v-model="form" :configs="configs" size="small" />
  </Modal>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { LocationFenceListType } from "@/api/Location/types";
import Modal from "@/components/BaseModal/index.vue";
import BaseForm from "@/components/BaseForm/index.vue";
import { Message } from "@arco-design/web-vue";

interface PropsType {
  record?: any;
  mode: "create" | "edit";
}
const props = defineProps<PropsType>();

const configs = computed(() => [
  {
    label: "报告主题",
    name: "theme",
    component: "Input",
    required: true,
  },
  {
    label: "工单号",
    name: "order",
    component: "Input",
    required: true,
  },
  {
    label: "发送人",
    name: "sender",
    component: "UserPicker",
    required: true,
  },
  {
    label: "节点",
    name: "node",
    component: "Select",
    required: true,
    props: {
      options: [
        { label: "节点1", value: 1 },
        { label: "节点2", value: 2 },
        { label: "节点3", value: 3 },
      ],
    },
  },
]);

const form = ref<any>({});
const formRef = ref();

const title = computed(() => {
  const ENUM = {
    create: "新建故障分析报告",
    edit: "编辑故障分析报告",
  };
  return ENUM[props.mode];
});

const onBeforeConfirm = async () => {
  const errorMsg = await formRef.value.validate();
  if (errorMsg) return false;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  Message.success("操作成功");
  return true;
};

onMounted(() => {
  if (["edit", "preview"].includes(props.mode)) {
    const cache = { ...props.record };
    cache.sender = cache.sender.id;
    form.value = cache;
  }
});
</script>

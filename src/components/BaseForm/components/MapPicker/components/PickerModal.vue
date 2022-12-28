<template>
  <Modal v-model:visible="visible" title="地理信息拾取" :footer="false">
    <div ref="container" class="picker-modal-wrap"></div>
    <div class="picker-modal-operate">
      <Button type="primary" :disabled="isEmpty" @click="onEmpty">
        清空信息
      </Button>
      <Button type="primary" @click="onEdit"> 编辑 </Button>
      <Button type="primary" :disabled="!canSave" @click="onSave">
        保存数据
      </Button>
    </div>
  </Modal>
</template>
<script setup lang="ts">
import Modal from "@/components/BaseModal/index.vue";
import useMap from "../hooks/useMap";
import { nextTick, onMounted, reactive, ref } from "vue";
import { Button } from "@arco-design/web-vue";
import { computed } from "vue";
import { useVisible } from "@/hooks";

interface PropsType {
  modelValue: any;
  resolve: (value: any) => void;
}

const props = defineProps<PropsType>();
const container = ref();
const { visible, hide } = useVisible(true);
const state = reactive({
  status: 0 as 0 | 1 | 2,
  data: undefined as any,
});
// const emit = defineEmits(["update:modelValue"]);
const { initialize, addGeoJson, drawLayer, emptyLayer } = useMap(container);
const isEmpty = computed(() => !state.data);
const canSave = computed(() => state.status === 2);
const onEmpty = () => {
  emptyLayer();
  state.data = undefined;
  state.status = 2;
};
const onEdit = async () => {
  state.data = undefined;
  const result = await drawLayer();
  state.data = result;
  state.status = 2;
};
const onSave = () => {
  props.resolve(state.data);
  hide();
};
onMounted(() => {
  nextTick(() => {
    initialize();
    if (props.modelValue) {
      addGeoJson(props.modelValue);
      state.data = props.modelValue;
      state.status = 1;
    }
  });
});
</script>
<style lang="scss" scoped>
.picker-modal-wrap {
  min-height: 500px;
  background-color: var(--color-fill-2);
}
.picker-modal-operate {
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #dedede;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
</style>

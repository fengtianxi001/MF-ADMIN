<template>
  <div class="base-table-filter">
    <BaseForm
      class="table-filter"
      v-model="form"
      layout="inline"
      label-align="left"
      v-bind="$attrs"
      ref="formRef"
      :configs="configs"
      :style="filterStyle"
    />
    <div class="table-operate" :style="btnStyle">
      <a-button type="primary" :loading="searchLoading" @click="onQuery">
        <template #icon>
          <IconSearch />
        </template>
        <template #default>筛选</template>
      </a-button>
      <a-button :loading="resetLoading" @click="onReset">
        <template #icon>
          <IconRefresh />
        </template>
        <template #default>重置</template>
      </a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLoading } from "@/hooks";
import { isFunction } from "lodash";
import { computed, ref, type StyleValue } from "vue";
import { IconSearch, IconRefresh } from "@arco-design/web-vue/es/icon";
import type { BaseFormConfigType } from "@/components/BaseForm/types";
import BaseForm from "@/components/BaseForm/index.vue";
// import BaseButton from '@/components/BaseButton/index.vue';

interface PropsType {
  configs: BaseFormConfigType[];
  modelValue: any;
  query: () => void;
  grid?: number;
}
const props = defineProps<PropsType>();
const emit = defineEmits(["update:modelValue"]);
const form = ref({});
const formRef = ref();
const {
  loading: searchLoading,
  openLoading: openSearchLoading,
  closeLoading: closeSearchLoading,
} = useLoading(false);
const {
  loading: resetLoading,
  openLoading: openResetLoading,
  closeLoading: closeResetLoading,
} = useLoading(false);

const onQuery = async () => {
  emit("update:modelValue", form.value);
  if (isFunction(props.query)) {
    openSearchLoading();
    await props.query({
      current: 1,
    });
    closeSearchLoading();
  }
};

const onReset = async () => {
  formRef.value.resetFields({});
  emit("update:modelValue", form.value);
  if (isFunction(props.query)) {
    openResetLoading();
    await props.query({
      current: 1,
    });
    closeResetLoading();
  }
};
const btnStyle = computed<StyleValue>(() => {
  const grid = props.grid || 3;
  return props.configs.length > grid ? { flexDirection: "column" } : {};
});
const filterStyle = computed<StyleValue>(() => {
  const grid = props.grid || 3;
  return {
    gridTemplateColumns: `repeat(${grid}, 1fr)`,
  };
});
</script>
<style lang="scss" scoped>
.base-table-filter {
  display: flex;
  border-bottom: 1px solid var(--color-neutral-3);
  padding-bottom: 20px;
  margin-bottom: 12px;

  :deep(.arco-form-layout-inline .arco-form-item) {
    margin: 0;
  }
  :deep(.arco-picker-size-medium) {
    width: 100%;
  }
}
.table-filter {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 12px;
  grid-column-gap: 24px;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
}
.table-operate {
  display: flex;
  grid-gap: 12px;
  padding-left: 12px;
  margin-left: 12px;
  border-left: 1px solid var(--color-neutral-3);
}
</style>

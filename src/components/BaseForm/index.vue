<template>
  <Form ref="formRef" :model="modelValue" v-bind="$attrs">
    <FormItem
      v-for="config in props.configs"
      :key="config.name"
      :field="config.name"
      :label="config.label"
      :name="config.name"
      v-bind="config.formItemProps"
      :required="config.required"
      :label-col-flex="labelWidth"
    >
      <component
        :is="components[config.component]"
        v-model="form[config.name]"
        v-bind="config.props"
        :placeholder="createPlaceholder(config)"
        :allow-clear="true"
      />
    </FormItem>
  </Form>
</template>
<script setup lang="ts">
import { Form, FormItem } from '@arco-design/web-vue';
import * as AntComponents from '@arco-design/web-vue';
import CustomComponents from './components';
import type { BaseFormConfigType } from './types';
import { forEach } from 'lodash';
import { computed, onUnmounted, ref } from 'vue';

const components = {
  ...AntComponents,
  ...CustomComponents,
} as any;

interface PropsType {
  configs: BaseFormConfigType[];
  modelValue: any;
  labelWidth?: string;
}

const props = defineProps<PropsType>();

const createPlaceholder = (config: BaseFormConfigType) => {
  if (config?.props?.placeholder) return config.props.placeholder;
  const done = config.component === 'Input' ? '输入' : '选择';
  return `请${done}${config.label?.replace(':', '')}`;
};
const formRef = ref();
const form: Record<string, any> = computed({
  get: () => props.modelValue,
  set: () => {},
});
const resetFields = () => {
  formRef.value.resetFields();
};
onUnmounted(() => {
  forEach(props.configs, (config) => {
    form[config.name] = config.defaultValue || void 0;
  });
});
const validate = async () => {
  return await formRef.value.validate();
};
defineExpose({
  resetFields,
  validate,
});
</script>

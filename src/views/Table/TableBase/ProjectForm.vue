<template>
  <BaseModal
    title="工程信息表单"
    width="500px"
    :onBeforeConfirm="onBeforeConfirm"
    :loading="loading"
  >
    <BaseForm
      ref="form"
      v-model="data"
      size="small"
      :configs="configs"
      :loading="loading"
    />
  </BaseModal>
</template>
<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
import { computed, onMounted } from "vue";
import { useForm } from "@/hooks";
import { useRequest } from "@/hooks";
import { getProjectDetail, updateProject, addProject } from "@/api/Project";
interface PropsType {
  id?: any;
}
const props = defineProps<PropsType>();
//表单数据源
const { data, run, loading } = useRequest(getProjectDetail, {
  manual: true,
  defaultParams: [props.id],
  defaultData: {},
  formatResult: (res) => {
    res.principalId = res.principal?.id;
    return res;
  },
});
//获取表单组件实例
const { form, validate } = useForm();
//表单配置
const configs = computed(() => [
  {
    name: "name",
    component: "Input",
    label: "工程名称",
    required: true,
    formItemProps: {
      labelColFlex: "100px",
    },
  },
  {
    name: "principalId",
    component: "UserPicker",
    label: "工程负责人",
  },
  {
    name: "code",
    component: "Input",
    label: "工程编码",
  },
  {
    name: "type",
    component: "Select",
    label: "工程类型",
    props: {
      options: [
        {
          label: "土木工程",
          value: "1",
        },
        {
          label: "水利工程",
          value: "2",
        },
      ],
    },
  },
  {
    name: "status",
    component: "Select",
    label: "工程状态",

    props: {
      options: [
        {
          label: "正常",
          value: 1,
        },
        {
          label: "异常",
          value: 0,
        },
      ],
    },
  },
  {
    label: "工程划区",
    name: "geojson",
    component: "MapPicker",
  },
]);
//表单提交前的校验
const onBeforeConfirm = async () => {
  const errorMsg = await validate();
  if (errorMsg) return false;
  const methods = props.id ? updateProject : addProject;
  await methods(data.value);
  Message.success("操作成功");
  return true;
};
//初始化表单数据
onMounted(() => {
  if (props.id) run();
});
</script>

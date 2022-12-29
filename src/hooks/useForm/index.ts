import { isFunction } from "lodash";
import { ref } from "vue";

function useForm() {
  const form = ref();
  const validate = (params?: any) => {
    const cache = form.value?.validate;
    if (isFunction(cache)) {
      return cache(params);
    } else {
      return Promise.resolve([]);
    }
  };

  const resetFields = (params?: any) => {
    const cache = form.value?.resetFields;
    if (isFunction(cache)) {
      return cache(params);
    } else {
      return Promise.resolve([]);
    }
  };
  const validateField = (params?: any) => {
    const cache = form.value?.validateField;
    if (isFunction(cache)) {
      return cache(params);
    } else {
      return Promise.resolve([]);
    }
  };
  const clearValidate = (params?: any) => {
    const cache = form.value?.clearValidate;
    if (isFunction(cache)) {
      return cache(params);
    }
  };
  const setFields = (params?: any) => {
    const cache = form.value?.setFields;
    if (isFunction(cache)) {
      return cache(params);
    }
  };
  return {
    form,
    validate,
    resetFields,
    validateField,
    clearValidate,
    setFields,
  };
}
export default useForm;

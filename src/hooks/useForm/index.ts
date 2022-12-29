import { isFunction } from "lodash";
import { ref } from "vue";

function useForm() {
  const form = ref();
  const validate = () => {
    const cache = form.value?.validate;
    if (isFunction(cache)) {
      return form.value?.validate();
    } else {
      return Promise.resolve([]);
    }
  };

  const reset = () => {
    const cache = form.value?.resetFields;
    if (isFunction(cache)) {
      return form.value?.resetFields();
    } else {
      return Promise.resolve([]);
    }
  };
  return { form, validate, reset };
}
export default useForm;

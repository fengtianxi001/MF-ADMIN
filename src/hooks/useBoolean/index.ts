import { ref } from "vue";

function useBoolean(defaultValue = false) {
  const boolean = ref(defaultValue);
  const setTrue = () => {
    return (boolean.value = true);
  };
  const setFalse = () => {
    return (boolean.value = false);
  };
  const toggle = () => {
    return (boolean.value = !boolean.value);
  };
  return {
    boolean,
    setTrue,
    setFalse,
    toggle,
  };
}

export default useBoolean;

import { reactive } from "vue";
import { defineStore } from "pinia";
import logo from "@/assets/images/favicon.png";

export const useApp = defineStore("app", () => {
  const state = reactive({
    logo,
    name: import.meta.env.VITE_APP_NAME,
  });
  return { state };
});

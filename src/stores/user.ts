import { reactive } from "vue";
import { defineStore } from "pinia";
import avatar from "@/assets/images/avatar.jpeg";
export const useUser = defineStore("user", () => {
  const info = reactive({
    avatar,
    name: "肛肠科冯主任",
    email: "625362207@qq.com",
    bio: "一位意志坚定的共产主义战士",
  });
  return {
    info,
  };
});

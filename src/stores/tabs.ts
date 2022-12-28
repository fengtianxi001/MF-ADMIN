import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { findIndex, remove } from "lodash";
import router from "@/router";
import type { RouteLocationNormalized } from "vue-router";

interface TabsType {
  title: string;
  path: string;
  fixed: boolean;
}

export const useTabs = defineStore("tabs", () => {
  const home = { title: "首页", path: "/welcome", fixed: true };
  const tabs = ref<TabsType[]>([home]);
  const current = computed<TabsType>(() => ({
    title: <string>router.currentRoute.value.meta.locale,
    path: router.currentRoute.value.path,
    fixed: false,
  }));

  //新增标签
  const tabAppend = (tab: RouteLocationNormalized) => {
    if (tab.path === home.path) return void 0;
    const isExit = tabs.value.some((item) => item.path === tab.path);
    if (isExit) return void 0;
    tabs.value.push({
      title: (tab.meta.locale as string) ?? "未命名",
      path: tab.path,
      fixed: false,
    });
  };

  //刷新标签
  const tabReload = (tab: TabsType) => {
    const isCurrent = current.value.path === tab.path;
    if (isCurrent) return window.location.reload();
    router.push(tab.path);
  };
  //关闭标签
  const tabClose = (tab: TabsType) => {
    //因为会始终保留一个首页标签, 所以不需要做空判断
    //1.先判断是否是当前标签, 如果是, 则跳转到下一个标签,如果不是, 则直接删除
    const isCurrent = current.value.path === tab.path;
    if (isCurrent) {
      const index = findIndex(tabs.value, (item) => item.path === tab.path);
      const next = tabs.value[index + 1] || tabs.value[index - 1];
      router.push(next?.path || "/");
    }
    remove(tabs.value, (item) => item.path === tab.path);
  };
  //关闭其他标签
  const tabOthersClose = (tab: TabsType) => {
    //保留当前标签、固定标签、首页, 然后删除其他标签
    const survival = tabs.value
      .filter(
        (item) =>
          item.fixed || item.path === tab.path || item.path === home.path
      )
      .map((item) => item.path);
    remove(tabs.value, (item) => !survival.includes(item.path));
    router.push(tab.path || "/");
  };
  //标签切换
  const tabChange = (tab: TabsType) => {
    router.push(tab.path);
  };
  //标签固定
  const tabToggleFixed = (tab: TabsType) => {
    tab.fixed = !tab.fixed;
  };
  return {
    tabs,
    current,
    tabAppend,
    tabClose,
    tabReload,
    tabOthersClose,
    tabChange,
    tabToggleFixed,
  };
});

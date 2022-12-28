import { useTabs } from "./stores/tabs";
import router from "./router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

router.beforeEach((to, from, next) => {
  const tabsStore = useTabs();
  tabsStore.tabAppend(to);
  nprogress.start();
  next();
});

router.afterEach(() => {
  nprogress.done();
});

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Arco from "@arco-design/web-vue";

import "@/permission";
import "@/assets/styles/initialize.scss";
import "@/assets/styles/reset.scss";
import "@arco-design/web-vue/dist/arco.less";
import "@/mock";
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Arco);
app.mount("#app");

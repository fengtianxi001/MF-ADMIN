import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
const mdPlugin = require("vite-plugin-markdown"); // 需要通过commenJs方式引用
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
    mdPlugin.plugin({
      mode: ["html"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "@/assets/styles/mixins.scss" as *;
            @use "@/assets/styles/variable" as *;
            
          `,
      },
      less: {
        modifyVars: {
          "border-radius-medium": "0px",
        },
        javascriptEnabled: true,
      },
    },
  },
});

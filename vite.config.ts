import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [],
      dirs: ["src/components"],
      directoryAsNamespace: true,
      dts: "types/components.d.ts",
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

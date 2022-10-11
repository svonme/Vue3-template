/**
 * @file Vite Config
 * @author svon.me@gmail.com
 */

// @ts-ignore
import argv from "@fengqiaogang/argv";
import vuePlugin from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import _ from "lodash";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import {defineConfig} from "vite";
import WindCSS from "vite-plugin-windicss";



// @ts-ignore
export default defineConfig(async function() {
  
  return {
    base: "/",
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        },
      }
    },
    resolve: {
      extensions: [".ts", ".vue", ".js", ".tsx"],
      alias: {
        "src/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      vuePlugin(),
      WindCSS(),
      vueJsx({}),
      AutoImport({
        resolvers: [ElementPlusResolver({
          importStyle: "sass"
        })],
      }),

      Components({
        dts: true,
        include: [/\.vue$/],
        extensions: ["vue"],
        directoryAsNamespace: true,
        exclude: [/node_modules/, /\.git/, /\.nuxt/],
        resolvers: [
          ElementPlusResolver({
            importStyle: "css"
          })
        ],
      }),
    ],
  };
});

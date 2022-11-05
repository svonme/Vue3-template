/**
 * @file Vite Config
 * @author svon.me@gmail.com
 */

import path from "path";
import {defineConfig} from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import WindCSS from "vite-plugin-windicss";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

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
        resolvers: [
          AntDesignVueResolver({
            importStyle: "less"
          })
        ],
      }),

      Components({
        dts: true,
        include: [/\.vue$/],
        extensions: ["vue"],
        directoryAsNamespace: true,
        exclude: [/node_modules/, /\.git/, /\.nuxt/],
        resolvers: [
          AntDesignVueResolver({
            importStyle: "css"
          })
        ],
      }),
    ],
    server: {
      port: 8080,
      host: "0.0.0.0",
      https: false,
      hmr: {
        protocol: 'ws',
        host: '127.0.0.1',
        port: 8080,
      }
    },
  };
});

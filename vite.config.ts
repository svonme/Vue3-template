import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import jsx from "@vitejs/plugin-vue-jsx";
import htmlPlugin from "vite-plugin-html-config";

// https://vitejs.dev/config/
export default defineConfig(function({ mode }) {
  const env = loadEnv(mode, "./");
  
  const headScripts = [];
  // 引入 iconfont
  if (env.VITE_APP_ICONFONT) {
    headScripts.push({ defer: true, src: env.VITE_APP_ICONFONT });
  }
  
  return {
    cacheDir: ".cache",
    resolve: {
      extensions: [".ts", ".vue", ".js", ".tsx"],
      alias: {
        "src/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      vue(), 
      jsx(),
      htmlPlugin({ headScripts }),
    ]
  }
})

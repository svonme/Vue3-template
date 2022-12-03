import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindCSS from "vite-plugin-windicss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: ".cache",
  resolve: {
    extensions: [".ts", ".vue", ".js", ".tsx"],
    alias: {
      "src/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    WindCSS()
  ]
})

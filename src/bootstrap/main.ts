/**
 * @file Application
 */
import type { App } from "vue";
import { createSSRApp } from "vue";
import { createRouter } from "src/router/";
import application from "./app.vue";

/**
 * @file 创建 Vue 实例
 * @param data
 */
export function createApp(data: object = {}) {
  const app: App = createSSRApp(application);
  const router = createRouter();
  app.use(router);
  return { app, router };
}

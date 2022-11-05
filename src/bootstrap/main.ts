/**
 * @file Application
 */
import type { App } from "vue";
import { createSSRApp } from "vue";
import application from "./app.vue";
import { createRouter } from "src/router/";
import { beforeEach } from "src/router/hook";

/**
 * @file 创建 Vue 实例
 */
export function createApp() {
  const app: App = createSSRApp(application);
  
  const router = createRouter();
  router.beforeEach(beforeEach);

  app.use(router);
  return { app, router };
}

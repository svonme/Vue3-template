/**
 * @file Application
 * @author svon.me@gmail.com
 */

import application from "./app.vue";
import { createPinia } from "pinia";
import { createApp as create } from "vue";
import { createRouter } from "src/router/";
import { beforeEach } from "src/router/hook";

import type { App } from "vue";

/**
 * @file 创建 Vue 实例
 */
export function createApp() {
  const app: App = create(application);

  const store = createPinia();
  app.use(store);

  const router = createRouter();
  router.beforeEach(beforeEach);

  app.use(router);
  return { app, router };
}

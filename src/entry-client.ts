/**
 * @file 客户端
 * @author svon.me@gmail.com
 */

// 引入 tailwindcss
import "virtual:windi.css";
import "virtual:windi-devtools";
// 引入项目全局样式
import "src/styles/main.less";

import { AppId } from "./config/index";
import { routerConfig } from "src/router/config";


import type { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router";
import { createApp } from "./bootstrap/main";

const main = async function () {
  const { app, router } = createApp();
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
    const matched = to.matched;
    if (matched && matched.length > 0) {
      next();
    } else {
      // 如果当前路由无匹配状态，则默认跳转至 404 页面
      next(routerConfig.common.E404);
    }
  });

  await router.isReady();
  app.mount(`#${AppId}`, true);
  
};

setTimeout(main);

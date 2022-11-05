/**
 * @file 监听路由变化
 */


import * as RouterAlias from "src/router/alias";
import type { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router";


export const beforeEach = function(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) {
  const matched = to.matched;
  if (matched && matched.length > 0) {
    document.title = to.name as string;
    next();
  } else {
    // 如果当前路由无匹配状态，则默认跳转至 404 页面
    next({
      name: RouterAlias.NotFount.name
    });
  }
}
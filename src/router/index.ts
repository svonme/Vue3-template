/**
 * @file 路由
 * @author svon.me@gmail.com
 */

import { routerConfig } from "./config";
import type { Router, RouteRecordRaw } from "vue-router";
import { createRouter as _createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[]  = [
  {
    path: "/",
    component: () => import("src/layout/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("src/pages/home/index.vue"),
      },
      {
        name: "404",
        path: routerConfig.common.E404(),
        component: () => import("src/pages/common/404.vue"),
      },
    ],
  },
  {
    path: "/:(.*)",
    redirect: {
      name: "404"
    },
  },
];

export function createRouter(): Router {
  return _createRouter({
    routes,
    history: createWebHistory(),
  });
}
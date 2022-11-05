/**
 * @file 路由
 * @author svon.me@gmail.com
 */

import * as alias from "./alias";
import type { Router, RouteRecordRaw } from "vue-router";
import { createRouter as _createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[]  = [
  {
    path: "/",
    component: () => import("src/layout/index.vue"),
    children: [
      {
        path: "",
        redirect: {
          name: alias.Home.name
        }
      },
      {
        ...alias.Home,
        component: () => import("src/pages/home/index.vue"),
      },
      {
        ...alias.NotFount,
        component: () => import("src/pages/common/404.vue"),
      },
    ],
  },
];

export function createRouter(): Router {
  return _createRouter({
    routes,
    history: createWebHistory(),
  });
}
/**
 * @file 路由别名
 * @author svon.me@gmail.com
 */

import type { RouteRecordBase } from "src/types/common";
 
export const Home: RouteRecordBase = {
  name: "Home",
  path: "/home"
}

export const NotFount: RouteRecordBase = {
  name: "Not Fount",
  path: "/404"
}
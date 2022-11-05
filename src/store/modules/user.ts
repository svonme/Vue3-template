/**
 * @file 用户数据
 * @author svon.me@gmail.com
 */

import _ from "lodash-es";
import { defineStore } from "pinia";
import { UserIfno } from "src/types/user";

interface State {
  info: UserIfno
}

export const userStore = defineStore("user", {
  state (): State {
    return {
      info: new UserIfno()
    };
  },
  getters: {
  },
  actions: {
    // 获取用户信息
    async loadUserInfo() {
      console.log("加载用户数据");
    }
  }
});
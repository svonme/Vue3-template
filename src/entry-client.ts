/**
 * @file 客户端
 * @author svon.me@gmail.com
 */

// 引入 tailwindcss
import "virtual:windi.css";
// 引入项目全局样式
import "src/styles/main.less";

import { AppName } from "./config/index";
import { createApp } from "./bootstrap/main";

const main = async function () {
  const { app, router } = createApp();

  await router.isReady();
  
  app.mount(`#${AppName}`, true);
};

setTimeout(main);

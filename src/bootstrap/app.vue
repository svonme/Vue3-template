<script setup lang="ts">
/**
 * @file Application
 * @author svon.me@gmail.com
 */

import { ref } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { ConfigProvider } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

import type { Locale } from "ant-design-vue/es/locale-provider";

const locale = ref<Locale>(zhCN);
dayjs.locale("zh-cn");

</script>

<template>
  <ConfigProvider :locale="locale">
    <router-view />
  </ConfigProvider>
</template>

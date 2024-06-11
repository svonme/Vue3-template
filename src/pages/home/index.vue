<script setup lang="ts">
/**
 * @file Home
 * @author svon.me@gmail.com
 */

import {ref} from "vue";
import { Result } from "ant-design-vue";
import { SmileTwoTone } from "@ant-design/icons-vue";

const message = ref<string>("Vue3 template");


</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <Result status="success">
      <template #icon>
        <SmileTwoTone />
      </template>
      <template #title>
        <h1 class="text-primary text-opacity-60 p-4.25">{{ message }}</h1>
        <h2>Hello</h2>
      </template>
    </Result>
  </div>
</template>

<style scoped lang="scss">
h1 {
  @apply font-normal text-2xl;
  @screen xl {
    @apply text-3xl;
  }
}
</style>

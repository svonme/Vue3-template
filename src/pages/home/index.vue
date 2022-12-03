<script setup lang="ts">
/**
 * @file Home
 * @author svon.me@gmail.com
 */

import {ref} from "vue";
import { Result } from "ant-design-vue";
import { SmileTwoTone } from "@ant-design/icons-vue";

const message = ref<string>("Hello Vue3 tempate");

</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <Result status="success">
      <template #icon>
        <smile-twoTone />
      </template>
      <template #title>
        <h1 class="text-black text-opacity-85">{{ message }}</h1>
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

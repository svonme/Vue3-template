<script setup lang="ts">
/**
 * @file Home
 * @author svon.me@gmail.com
 */

import {ref} from "vue";
import { Result } from "ant-design-vue";
import { SmileTwoTone } from "@ant-design/icons-vue";

const title = ref<string>("Hello World");

</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <Result status="success" :title="title">
      <template #icon>
        <smile-twoTone />
      </template>
    </Result>
  </div>
</template>

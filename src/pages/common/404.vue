<script setup lang="ts">
/**
 * @file 404
 * @author svon.me@gmail.com
 */

import * as RouterAlias from "src/router/alias";
import { Result, Button } from "ant-design-vue";
</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <Result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <RouterLink :to="{ name: RouterAlias.Home.name }">
          <Button type="primary">
            <span class="font-600">Back Home</span>
          </Button>
        </RouterLink>
      </template>
    </Result>
  </div>
</template>

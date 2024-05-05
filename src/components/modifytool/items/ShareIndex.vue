<script setup>
import {ElMessage} from "element-plus";
import {FRONT_URL} from "@/base/request/config.ts";
import * as store from "@/base/store.ts";

function copy() {
  navigator.clipboard.writeText(FRONT_URL+'/visit/'+store.singleData.user.username).then(() => {
    ElMessage({
      message: "分享链接复制成功,分享给你的朋友吧！",
      type: 'success'
    })
  }).catch(err => {
    console.error('复制到剪贴板失败:', err);
  });
}
</script>

<template>
  <li class="icon-content" @click="copy">
    <a
        data="share"
    >
      <div class="filled" ></div>
      <span class="material-symbols-outlined">
share
</span>
    </a>
    <div class="tooltip" >复制分享链接</div>
  </li>

</template>

<style scoped>

</style>
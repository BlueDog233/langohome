<script setup lang="ts">

import * as store from "@/base/store.ts";
import ToolsController from "@/components/modifytool/ToolsController.vue";
import HiddenCompoent from "@/components/HiddenCompoent.vue";
import Terminal from "@/components/modifytool/Terminal.vue";
</script>

<template>
  <transition name="el-fade-in-linear">
    <div class="bg" v-if="store.singleData.user.isPublished"></div>
  </transition>
  <div class="view">
    <div class="change-model" :style="{boxShadow:store.singleData.user.isPublished?'10px 10px 2rem 1px rgba(45, 208, 71, 0.62)':'10px 10px 2rem 1px rgba(0, 0, 0, 0.84)'}" >
      <iframe class="new" :srcdoc="store.singleData.user.html"></iframe>
    </div>
  </div>
  <ToolsController></ToolsController>
  <HiddenCompoent></HiddenCompoent>
  <Terminal></Terminal>
</template>

<style scoped>
.new{
  width: 100%;
  height: 100%;
  background: white;
}
.change-model{
  width: 100vw;
  height: 100vh;
}
.title{
  width: 100%;
  position: absolute;
  text-align: center; /* Aligns text within the title box */
  font-size: 2rem;
  display: block;
  color: rgba(49, 34, 34, 0.84);
}
.bg{
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(122, 211, 115, 0.45);
}

.change-model{
  transform: scale(.85);
;
  border-radius: 20px;
}
</style>
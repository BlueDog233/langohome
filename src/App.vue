<script setup>


import TemplateOne from "@/template/TemplateOne.vue";
import TemplateZero from "@/template/TemplateZero.vue";
import ToolsController from "@/components/modifytool/ToolsController.vue";
import TemplatePage from "@/pages/NewPage.vue";
import * as Stronge from '@/base/Stronge.ts'
import HiddenCompoent from "@/components/HiddenCompoent.vue";
import {reactive} from "vue";
import Terminal from "@/components/modifytool/Terminal.vue";
const user=reactive(Stronge.userStroge.user)
</script>
<template>

  <div id="app">
    <transition name="el-fade-in-linear">
    <div class="bg" v-if="user.ispublished"></div>
    </transition>
    <div class="view">
      <div class="title">模板名称---模板作者</div>
      <div class="change-model" :style="{boxShadow:user.ispublished?'10px 10px 2rem 1px rgba(45, 208, 71, 0.62)':'10px 10px 2rem 1px rgba(0, 0, 0, 0.84)'}">
        <TemplateOne></TemplateOne>
      </div>
    </div>
    <ToolsController></ToolsController>
    <HiddenCompoent></HiddenCompoent>
    <Terminal></Terminal>
  </div>

</template>

<style scoped>
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
#app{
  width: 100vw;
  height: 100vh;
}
</style>

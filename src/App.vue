<script setup>


import TemplateOne from "@/template/TemplateOne.vue";
import TemplateZero from "@/template/TemplateZero.vue";
import ToolsController from "@/components/modifytool/ToolsController.vue";
import TemplatePage from "@/pages/NewPage.vue";
import * as Stronge from '@/base/Stronge.ts'
import HiddenCompoent from "@/components/HiddenCompoent.vue";
import {reactive} from "vue";
import * as store from '@/base/store.ts'
import Terminal from "@/components/modifytool/Terminal.vue";
import MainPage from "@/pages/MainPage.vue";


</script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<style scoped>

#app{
  width: 100vw;
  height: 100vh;
}
</style>

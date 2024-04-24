<script setup>

import * as Stronge from "@/base/Stronge.ts";
import TemplatePage from "@/pages/NewPage.vue";
import {reactive, ref} from "vue";
import ChooseTemplate from '@/components/modifytool/pages/ChooseTemplate.vue'
import * as store from "@/base/store.ts";

</script>

<template>
  <li class="icon-content" :style="{zIndex: store.singleData.view.chooseTemplate.isVisible?'30':'0'}">
    <a
        aria-label="changemodel"
        data-social="changemodel"
        @click="store.singleData.view.chooseTemplate.isVisible=!store.singleData.view.chooseTemplate.isVisible"
    >
      <div class="filled" ></div>
      <span class="material-symbols-outlined">
move_group
</span>

    </a>
    <div class="tooltip">切换模板</div>
  </li>
    <TemplatePage v-model="store.singleData.view.chooseTemplate.isVisible" x="0" y="100">
      <ChooseTemplate></ChooseTemplate>
    </TemplatePage>

</template>

<style scoped>
.icon-content{
}
</style>
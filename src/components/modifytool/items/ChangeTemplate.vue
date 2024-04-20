<script setup>

import * as Stronge from "@/base/Stronge.ts";
import TemplatePage from "@/pages/NewPage.vue";
import {ref} from "vue";
const isChangeMode=ref(false)
</script>

<template>
  <li class="icon-content" :style="{zIndex: isChangeMode?'30':'0'}">
    <a
        aria-label="changemodel"
        data-social="changemodel"
        @click="isChangeMode=!isChangeMode"
    >
      <div class="filled" ></div>
      <span class="material-symbols-outlined">
move_group
</span>

    </a>
    <div class="tooltip">切换模板</div>
  </li>
    <TemplatePage v-model="isChangeMode" x="0" y="100"> </TemplatePage>

</template>

<style scoped>
.icon-content{
}
</style>
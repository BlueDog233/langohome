<script setup>

import {ref} from "vue";
import NewPage from "@/pages/NewPage.vue";
import SettingPage from "@/components/modifytool/pages/SettingPage.vue";
import * as store from "@/base/store.ts";


</script>

<template>
  <li class="icon-content"  @click="store.singleData.view.settingTemplate.isVisible=!store.singleData.view.settingTemplate.isVisible" :style="{zIndex: store.singleData.view.settingTemplate.isVisible?'30':'0'}">
    <a
        aria-label="usersetting"
        data-social="usersetting"
    >
      <div class="filled"></div>
      <span class="material-symbols-outlined">
manage_accounts
</span>
    </a>
    <div class="tooltip">用户设置</div>
  </li>
  <NewPage v-model="store.singleData.view.settingTemplate.isVisible" x="0" y="70">
    <SettingPage v-model="store.singleData.view.settingTemplate.isVisible"></SettingPage>
  </NewPage>
</template>

<style scoped>

</style>
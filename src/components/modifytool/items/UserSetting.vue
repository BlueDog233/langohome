<script setup>

import {ref} from "vue";
import NewPage from "@/pages/NewPage.vue";
import SettingPage from "@/components/modifytool/pages/SettingPage.vue";

const userSet=ref(false)
</script>

<template>
  <li class="icon-content"  @click="userSet=!userSet" :style="{zIndex: userSet?'30':'0'}">
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
  <NewPage v-model="userSet" x="0" y="70">
    <SettingPage v-model="userSet"></SettingPage>
  </NewPage>
</template>

<style scoped>

</style>
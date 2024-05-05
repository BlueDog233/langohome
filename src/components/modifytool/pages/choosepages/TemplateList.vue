<script setup>

import ItemPhoto from "@/components/modifytool/pages/choosepages/ItemPhoto.vue";
import * as store from "@/base/store.ts";
import {onBeforeMount, onMounted} from "vue";
import {getTemplates} from "@/base/request/requests.ts";

</script>

<template>
  <el-scrollbar height="70vh">
    <div class="list">
      <ItemPhoto :key="store.singleData.view.chooseTemplate.templates" v-for="template in store.singleData.view.chooseTemplate.templates" :template="template" @click="store.singleData.view.chooseTemplate.choose_template=template"></ItemPhoto>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  grid-auto-rows: minmax(100px, auto); /* 自动行高 */
  row-gap: 10px;
}
.list *{
  color: white;
  background: var(--color-light-gray);
  border-radius: 2px;
  box-shadow: 1px 1px 2px 2px rgba(136, 136, 136, 0.64);
}
</style>
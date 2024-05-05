<script setup lang="ts">

import * as store from "@/base/store.ts";
import ToolsController from "@/components/modifytool/ToolsController.vue";
import HiddenCompoent from "@/components/HiddenCompoent.vue";
import Terminal from "@/components/modifytool/Terminal.vue";
import {onBeforeMount, onMounted} from "vue";
import {getTemplates, getUser} from "@/base/request/requests.ts";
onBeforeMount(()=>{
  getUser().then(res=>{
    store.singleData.user=res.data
    store.singleData.user.isPublished=res.data.isPublish==1?true:false
  })
  getTemplates().then(res=>{
    store.singleData.view.chooseTemplate.templates=res.data
    store.singleData.view.chooseTemplate.choose_template=res.data[0]
  })
})
</script>

<template>
  <transition name="el-fade-in-linear">
    <div class="bg" v-if="store.singleData.user.isPublished"></div>
  </transition>
  <div class="view">
    <div class="change-model" :style="{boxShadow:store.singleData.user.isPublished?'10px 10px 2rem 1px rgba(45, 208, 71, 0.62)':'10px 10px 2rem 1px rgba(0, 0, 0, 0.84)'}" >
      <iframe style="width: 100%;height: 100%" :src="'http://localhost:8000/api/visit/mod/'+store.singleData.user.username"></iframe>
    </div>
  </div>
  <ToolsController></ToolsController>
  <HiddenCompoent></HiddenCompoent>
  <Terminal></Terminal>
</template>

<style>
.change-model{
  overflow: scroll;
  background: white;

}
#mount{
  all: initial;
  background: white;

}
html{
  overflow: hidden;
}
.new{
  width: 100%;
  height: 100%;
  background: white;
}
.change-model{
  width: 100vw;
  height: 100vh;
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
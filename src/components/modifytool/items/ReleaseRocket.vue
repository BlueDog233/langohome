<script setup>

import {ref} from "vue";
import * as store from "@/base/store.ts";
import {refreshUser, reservePublish} from "@/base/request/requests.ts";
import {exportData} from "@/base/model/dto-model.ts";


const releaseOrNo=()=>{
  reservePublish().then(()=>{
    store.singleData.user.isPublished=!store.singleData.user.isPublished
  })

}
</script>

<template>
  <li class="icon-content" >
    <a
        aria-label="launch"
        data-social="launch"
        class=""
        :style="{backgroundColor: !store.singleData.user.isPublished?'rgba(211, 17, 52, 0.7)':'rgba(103, 231, 158, 0.71)'}"
        @click="releaseOrNo"
    >
      <div class="filled"></div>
      <span class="material-symbols-outlined">
rocket_launch
</span>
    </a>
    <div class="tooltip">{{ !store.singleData.user.isPublished?'点击发布':'取消发布' }}</div>
  </li>
</template>

<style scoped>
.a{

}
</style>
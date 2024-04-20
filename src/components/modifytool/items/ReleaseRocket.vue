<script setup>

import * as Stronge from "@/base/Stronge.ts";
import {ref} from "vue";
const ispublished=ref(Stronge.userStroge.user.ispublished)

const releaseOrNo=()=>{
  Stronge.userStroge.user.ispublished=!Stronge.userStroge.user.ispublished
  ispublished.value=Stronge.userStroge.user.ispublished
}
</script>

<template>
  <li class="icon-content" >
    <a
        aria-label="launch"
        data-social="launch"
        class=""
        :style="{backgroundColor: !ispublished?'rgba(211, 17, 52, 0.7)':'rgba(103, 231, 158, 0.71)'}"
        @click="releaseOrNo"
    >
      <div class="filled"></div>
      <span class="material-symbols-outlined">
rocket_launch
</span>
    </a>
    <div class="tooltip">{{ !ispublished?'点击发布':'取消发布' }}</div>
  </li>
</template>

<style scoped>
.a{

}
</style>
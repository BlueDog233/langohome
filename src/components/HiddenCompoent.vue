<script setup>
import {ref} from "vue";
import * as Stronge from "@/base/Stronge.ts";

const scale=ref(1)
function handleWheel(event) {
  event.preventDefault(); // 阻止默认的滚动行为
  const delta = event.deltaY ? -event.deltaY : event.wheelDelta;
  const scaleFactor = 0.1; // 设定每次滚动的缩放因子
  if (delta > 0) {
    scale.value += scaleFactor; // 向上滚动放大图片
  } else {
    scale.value = Math.max(0.1, scale.value - scaleFactor); // 向下滚动缩小图片，不让其完全消失
  }
}
</script>

<template>
<div class="all" @wheel="handleWheel" v-if="Stronge.hidden.show" @click="Stronge.hidden.show=false">
  <div class="content"  :style="{scale:scale}">
    <div class="title">{{ Stronge.hidden.title }}</div>
    <img :src="Stronge.hidden.src"/>
  </div>
</div>
</template>

<style scoped>
.all{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  display: flex;
}
.content{
  text-align: center;
  background-color: white;
  box-shadow: .1rem .1rem 3rem 1rem rgba(0,0,0,.5);
  max-width: 400px;
  width: 80vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.title{
  font-size: 2rem;
  font-weight: bold;
  color: #343a40;
}
img{
  max-width: 350px;
  width: 75vw;
  margin-bottom: 20px;
}
</style>
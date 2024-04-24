<script setup>
import {ref} from "vue";
import * as Stronge from "@/base/Stronge.ts";
import VueMarkdown from 'vue-markdown-render';
import * as store from "@/base/store.ts";

const scale=ref(1)
function handleWheel(event) {
  if(Stronge.hidden.source)
    return
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
<div class="all" @wheel="handleWheel" v-if="store.singleData.view.multi_mediaDisplay.isVisible" @click="store.singleData.view.multi_mediaDisplay.isVisible=false;">
  <div class="content up"  :style="{scale:scale}">
    <div class="title">{{ store.singleData.view.multi_mediaDisplay.title }}</div>
    <img :src="store.singleData.view.multi_mediaDisplay.photoUrl"/>
    <template v-if="store.singleData.view.multi_mediaDisplay.markdownStr">
        <el-scrollbar max-height="80vh">
          <div class="markdown-content">
            <vue-markdown :source="store.singleData.view.multi_mediaDisplay.markdownStr" >
            </vue-markdown>
          </div>
        </el-scrollbar>
    </template>
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
  transition: all .5s ease;
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
<script setup>
const props=defineProps(['describe','src'])

import * as Stronge from "@/base/Stronge.ts";

</script>

<template>
<div class="img-container up" @click="Stronge.sendContent(props.describe,props.src);">
  <img :src="props.src"/>
  <div class="content">{{props.describe}}</div>
</div>
</template>

<style scoped>
.img-container{
  position: relative;
  display: inline-block;
  transition: opacity 0.3s ease;

}
img{
  max-width: 9rem;
}
.content{
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #dee2e6;
  content-visibility: hidden;
  word-wrap: anywhere;
}
.img-container:hover{
  background-color: rgba(52, 58, 64, 0.62);
}
.img-container:hover .content{
  content-visibility: visible;
}
.img-container:hover img{
  opacity: 0.5;

}
</style>
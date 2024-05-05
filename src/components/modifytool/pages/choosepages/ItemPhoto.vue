<script setup lang="ts">
import {defineProps} from 'vue'
import {Template} from "@/base/model/model.ts";
const prop=defineProps(["template"])
const template:Template=prop.template

</script>

<template>
<div class="item" style="position: relative">
  <img  :src="'http://'+template.photo[0].url" style="position: absolute;left: 0;top: 0;object-fit: fill;width: 100%;height: 100%;z-index: 1">
<div class="ta p-header down">
{{template.name}}
</div>
  <div style="flex-grow: 1"></div>
  <div class="ta p-footer up">
   {{template.author}}
  </div>
</div>
</template>

<style scoped>
.item:hover *{
  display: inline-block;

}
.item:hover{
  box-shadow: none;
}
.ta{
  display: none;
  z-index: 10;
}
.item{
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  .p-footer{
    text-align: right;
    background: linear-gradient(to top left, rgba(52, 58, 64, 0.5), rgba(236, 246, 255, 0));

  }
  .p-header{
    text-align: center;
    background: linear-gradient(to bottom, rgba(52, 58, 64, 0.5), rgba(236, 246, 255, 0));

  }
}
</style>
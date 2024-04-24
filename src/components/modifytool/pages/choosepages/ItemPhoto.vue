<script setup lang="ts">
import {defineProps} from 'vue'
import {Template} from "@/base/model/model.ts";
const prop=defineProps(["template"])
const template:Template=prop.template
</script>

<template>
<div class="item" :style="{backgroundImage: 'url('+template.photos[0].url+')'}">
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
}
.item{
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
<script setup>

import HiddenCompoent from "@/components/HiddenCompoent.vue";
import * as Stronge from "@/base/Stronge.ts";

console.log(Stronge.data['nav'][0]['img'])

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">


  <div class="follow">
    <div class="box">
      <a :href="x['href']?x['href']:'javascript:void(0);'" v-for="x in Stronge.data['nav']"><img class="icon" @click="x['href'] || Stronge.sendContent(x['title'],x['img'])" :src="x['src']"/></a>

    </div>
  </div>
</template>

<style scoped>
.fa-csdn {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
.fa-github{
  color: black !important;
}
.icon{
  width: 3rem;
  height: 3rem;
}
.box {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.box a {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: rgba(195, 217, 217, 0.62);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  line-height:5rem;
  color: var(--mellow-apricot);
  margin: 0 10px 10px 10px;
  transition-duration: 0.3s;

}
.box a:hover {
  background: gold;
  border-radius: 5px;
  color: var(--deep-sky-blue) !important;
  transform: rotate(45deg) scale(0.8);
}
.box a:hover .icon::before {
  transform: rotate(-45deg) scale(1.5);
}

.box i::before {
  transition-duration: 0.3s;
}

</style>
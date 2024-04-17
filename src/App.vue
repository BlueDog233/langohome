<script setup>

import NavCompoents from "@/components/NavCompoents.vue";
import NavElement from "@/base/NavElement.ts";
import HeadInfo from "@/components/HeadInfo.vue";
import HeadAchievement from "@/components/HeadAchievement.vue";
import PhotoCollection from "@/components/PhotoCollection.vue";
import {page} from "@/base/Stronge.ts";
import HiddenCompoent from "@/components/HiddenCompoent.vue";
import * as Stronge from "@/base/Stronge.ts";
import axios from "axios";

const navs = [new NavElement(null,'博客'), new NavElement(null,'小卖铺')]

</script>
<template>

  <div id="app">

    <div class="head">
      <div class="head-info">
        <HeadInfo/>
      </div>

      <div class="head-achievement container " style="height: calc(100vh - 60px);border-radius: 30px">
        <HeadAchievement v-if="page.page=='default'"/>
        <PhotoCollection v-if="page.page=='photo'" />
      </div>
    </div>
    <div class="wrapper">
    </div>
    <HiddenCompoent></HiddenCompoent>

  </div>

</template>

<style scoped>

.head{
  gap: 30px;
  display: grid;
  grid-template-columns: .3fr 1fr;
  grid-auto-flow: column;
  .head-info{
    display: flex;
  }
  .head-achievement{
    margin-top: 20px;
  }
}

@media screen and (max-width:  700px) {

  .head{
    gap: 30px;
    display: flex;
    flex-direction: column;
    .head-info{
      display: flex;
    }
    .head-achievement{
      margin-top: 20px;
    }
  }
}
</style>

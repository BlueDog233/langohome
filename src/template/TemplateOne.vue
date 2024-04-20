<script setup>
import '../assets/main.css'

import NavCompoents from "@/components/templaterone/NavCompoents.vue";
import NavElement from "@/base/NavElement.ts";
import HeadInfo from "@/components/templaterone/HeadInfo.vue";
import HeadAchievement from "@/components/templaterone/HeadAchievement.vue";
import PhotoCollection from "@/components/templaterone/PhotoCollection.vue";
import HiddenCompoent from "@/components/HiddenCompoent.vue";
import * as Stronge from "@/base/Stronge.ts";
import axios from "axios";
import {page} from "@/base/Stronge.ts";
</script>

<template>
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

</template>


<style scoped>
.head{
  color: var(--color-primary);

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
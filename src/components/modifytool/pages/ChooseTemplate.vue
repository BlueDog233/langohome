<style scoped>
.el-card{
  width: 90vw;
  height: 90vh;
  left: 5vw;
  top: 5vh;
  position: fixed;

}

.main{
  gap: 10px;
  display: grid;
  grid-template-columns: .4fr .6fr;
}
/* Remove this container when use*/
.component-title {
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 30px;
  left: 0;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #888;
  text-align: center;
}

.tab-container {
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 2px;

  background-color: #dadadb;
  border-radius: 9px;
}

.indicator {
  content: "";
  width: 130px;
  height: 28px;
  background: #ffffff;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 9;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  transition: all 0.2s ease-out;
}

.tab {
  width: 130px;
  height: 28px;
  position: absolute;
  z-index: 99;
  outline: none;
  opacity: 0;
}

.tab_label {
  width: 130px;
  height: 28px;

  position: relative;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  font-size: 0.75rem;
  opacity: 0.6;

  cursor: pointer;
}

.tab--1:checked ~ .indicator {
  left: 2px;
}

.tab--2:checked ~ .indicator {
  left: calc(130px + 2px);
}

.tab--3:checked ~ .indicator {
  left: calc(130px * 2 + 2px);
}

</style>

<script setup>

import {defineComponent, ref} from "vue";
import DetailInfo from "@/components/modifytool/pages/choosepages/DetailInfo.vue";
import TemplateList from "@/components/modifytool/pages/choosepages/TemplateList.vue";
import CreatorCenter from "@/components/modifytool/pages/CreatorCenter.vue";
import MyStars from "@/components/modifytool/pages/MyStars.vue";
import * as store from '@/base/store.ts'


</script>

<template>
    <el-card class="el-card" body-style="display: flex;  flex-direction: column;">
      <template #header>
        <div class="tab-container">
          <input type="radio" name="tab" id="tab1" value="template" v-model="store.singleData.view.chooseTemplate.select" class="tab tab--1"/>
          <label class="tab_label" for="tab1">模板广场</label>
          <input type="radio" name="tab" id="tab2" value="create" v-model="store.singleData.view.chooseTemplate.select" class="tab tab--2"/>
          <label class="tab_label" for="tab2">创作中心</label>
          <input type="radio" name="tab" id="tab3" value="stars" v-model="store.singleData.view.chooseTemplate.select" class="tab tab--3"/>
          <label class="tab_label" for="tab3">我的收藏</label>
          <div class="indicator"></div>
        </div>
      </template>

      <template #default>
        <el-scrollbar max-height="80vh" >

        <div style="flex-grow:1"></div>

        <div class="main" v-if="store.singleData.view.chooseTemplate.select=='template'">
          <DetailInfo ></DetailInfo>
          <TemplateList></TemplateList>
        </div>
        <CreatorCenter v-else-if="store.singleData.view.chooseTemplate.select=='create'" style="flex-grow: 1"></CreatorCenter>
        <MyStars v-else-if="store.singleData.view.chooseTemplate.select=='stars'" style="flex-grow: 1"></MyStars>
        </el-scrollbar>

      </template>

    </el-card>
</template>
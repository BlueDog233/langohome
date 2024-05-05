<script setup>
import {reactive, ref} from 'vue';

import MainSetting from "@/components/modifytool/pages/setpages/MainSetting.vue";
import {ElButton, ElForm, ElFormItem, ElInput, ElMessage} from "element-plus";
import PhotoSetting from "@/components/PhotoSetting.vue";
import VueMarkdown from 'vue-markdown-render';
import * as test from "@/base/test.ts";
import PhotoA from "@/components/modifytool/pages/setpages/PhotoA.vue";

import * as store from "@/base/store.ts";
import * as viewutil from "@/base/util/viewutil.ts";
import {exportData} from "@/base/model/dto-model.ts";
import {mixedai, refreshUser, saveInfo} from "@/base/request/requests.ts";
import {singleData} from "@/base/store.ts";


const onCommit=()=>{
  console.log(mainset.value.form)
  refreshUser(exportData(mainset.value.form))
}
const reserveInfo = () => {
  store.singleData.view.settingTemplate.infomode=!store.singleData.view.settingTemplate.infomode
};
const form=reactive({
  personality:'一般',
  describe:'',
  url:''
})
function uploadInfo(){
  saveInfo(form).then((res)=>{
    if(res.code==1){
      ElMessage({
        message: "用户信息已更新",
        type: 'success'
      })
      store.singleData.user.textData=res.data

    }
  })
  if(form.url!=''){
    if(!store.singleData.user.photoData)
      store.singleData.user.photoData=[{
        url:form.url,
        describe:form.describe
      }]
    else
      store.singleData.user.photoData.push({
          url:form.url,
          describe:form.describe
      })

  }
  form.personality='一般'
  form.describe=''
  form.url=''
}
const mainset=ref()

const set=defineModel();
</script>

<template>
<div :class="['settings',store.singleData.view.settingTemplate.infomode?'info':'normal']">

    <template v-if="store.singleData.view.settingTemplate.infomode">
      <el-card class="form left toleft" style="grid-area: left;">
        <template #header>
          图片集
        </template>
        <el-scrollbar>
          <div class="photos up">
            <PhotoA :key="store.singleData.user.photoData" v-for="x in store.singleData.user.photoData??[{url:'https://pic2.zhimg.com/v2-812f2b9e1413c13e6c82699514c3fc91_r.jpg',title:'example'}]" :src="x.url" :describe="x.describe"></PhotoA>
          </div>
        </el-scrollbar>
      </el-card>
      <el-card class="form right toright" style="grid-area: right;">
        <template #header>
          信息集
        </template>
        <el-scrollbar height="80vh">
          <div class="markdown-content" style="border: none;background-color: inherit">
            <vue-markdown :source="store.singleData.user.textData??'test'"></vue-markdown>
          </div>
        </el-scrollbar>
      </el-card>
    </template>
  <el-card class="form main">
      <template #header v-if="store.singleData.view.settingTemplate.infomode">
        <el-button @click="reserveInfo" style=";display: inline-block">
          <template #icon>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Red Hat</title>
              <path
                  d="M16.009 13.386c1.577 0 3.86-.326 3.86-2.202a1.765 1.765 0 0 0-.04-.431l-.94-4.08c-.216-.898-.406-1.305-1.982-2.093-1.223-.625-3.888-1.658-4.676-1.658-.733 0-.947.946-1.822.946-.842 0-1.467-.706-2.255-.706-.757 0-1.25.515-1.63 1.576 0 0-1.06 2.99-1.197 3.424a.81.81 0 0 0-.028.245c0 1.162 4.577 4.974 10.71 4.974m4.101-1.435c.218 1.032.218 1.14.218 1.277 0 1.765-1.984 2.745-4.593 2.745-5.895.004-11.06-3.451-11.06-5.734a2.326 2.326 0 0 1 .19-.925C2.746 9.415 0 9.794 0 12.217c0 3.969 9.405 8.861 16.851 8.861 5.71 0 7.149-2.582 7.149-4.62 0-1.605-1.387-3.425-3.887-4.512"/>
            </svg>
          </template>
          MY INFO
        </el-button>
        <el-button type="info" @click="uploadInfo(form)">上传信息</el-button>
        <el-button type="info" @click="mixedai()">AI计算</el-button>
        <div style="margin-bottom: 30px"></div>
      </template>
      <MainSetting v-model="store.singleData.view.settingTemplate.infomode" ref="mainset" v-if="!store.singleData.view.settingTemplate.infomode"  class="drdc" :user="store.singleData.user"></MainSetting>

      <template v-else>
        <el-form class="form" :model="form" label-width="70px">
          <el-form-item label="个性值">
            <el-input v-model="form.personailty"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="form.describe" type="textarea"
                      placeholder="若不传入相片则为对自己的描述,会补充至信息集"></el-input>
          </el-form-item>
          <el-form-item label="相片上传">
            <PhotoSetting v-model="form.url"></PhotoSetting>
          </el-form-item>

        </el-form>
      </template>

      <template #footer v-if="!store.singleData.view.settingTemplate.infomode">
        <el-form-item style="display: flex">
          <el-button type="info" @click="onCommit">提交</el-button>
          <el-button type="danger" @click="set=!set">取消</el-button>
          <el-button @click="reserveInfo();viewutil.sendContent('','',test.myinfoD)" style=";display: inline-block">
            <template #icon>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Red Hat</title><path d="M16.009 13.386c1.577 0 3.86-.326 3.86-2.202a1.765 1.765 0 0 0-.04-.431l-.94-4.08c-.216-.898-.406-1.305-1.982-2.093-1.223-.625-3.888-1.658-4.676-1.658-.733 0-.947.946-1.822.946-.842 0-1.467-.706-2.255-.706-.757 0-1.25.515-1.63 1.576 0 0-1.06 2.99-1.197 3.424a.81.81 0 0 0-.028.245c0 1.162 4.577 4.974 10.71 4.974m4.101-1.435c.218 1.032.218 1.14.218 1.277 0 1.765-1.984 2.745-4.593 2.745-5.895.004-11.06-3.451-11.06-5.734a2.326 2.326 0 0 1 .19-.925C2.746 9.415 0 9.794 0 12.217c0 3.969 9.405 8.861 16.851 8.861 5.71 0 7.149-2.582 7.149-4.62 0-1.605-1.387-3.425-3.887-4.512"/></svg>
            </template>
            MY INFO</el-button>
        </el-form-item>
      </template>
  </el-card>

</div>
</template>

<style scoped>
.normal{
  display: flex;
  align-items: center;
  justify-content: center;
}
.info{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    "left main right"
    "left main right"
    "left main right";
}
.form{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.settings{
  padding: 10px;
  grid-column-gap: 10px;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: -50.7vh;
  .card{
    width: 50vw;
    height: 70vh;
    background-color: #ffffff;
    box-shadow: 2px 2px .5rem .1rem rgba(42, 40, 40, 0.59);
    display: flex;
  }
}
.main{
  grid-area: main;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.toleft{
  animation: slideInFromLeft .3s ease-out forwards;
}
@keyframes slideInFromright {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.toright{
  animation: slideInFromright .3s ease-out forwards;
}
@keyframes drdc {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.drdc{
  animation: drdc .3s ease-out forwards;
}

</style>
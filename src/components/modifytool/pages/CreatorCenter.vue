<script setup>

import PhotoA from "@/components/modifytool/pages/setpages/PhotoA.vue";
import PhotoSetting from "@/components/PhotoSetting.vue";
import {reactive} from "vue";
import ZIPUpload from "@/components/modifytool/pages/choosepages/ZIPUpload.vue";
import * as requests from "@/base/request/requests.ts";
import {getTemplates} from "@/base/request/requests.ts";
import * as store from "@/base/store.ts";
const form =reactive({
  isprivate: true,
  describe:'模板描述',
  name:'模板名称',
})

const upload=()=>{
  requests.uploadTemplate(form).then(res=>{
    getTemplates().then(res=>{
      store.singleData.view.chooseTemplate.templates=res.data
      store.singleData.view.chooseTemplate.choose_template=res.data[0]
      store.singleData.view.chooseTemplate.select='template'
    })
  })
}

</script>

<template>
<div class="upload" style="display: flex;flex-direction: column;align-items: center;width: 100%;height:80vh;justify-content: center;">
  <el-form class="forms" :model="form">
    <ZIPUpload></ZIPUpload>
    <el-form-item label="是否私有">
      <el-switch  v-model="form.isprivate" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </el-form-item>
    <el-form-item label="模板描述">
      <el-input type="textarea" v-model="form.describe" placeholder="请输入模板描述"></el-input>
    </el-form-item>
    <el-form-item label="模板名称">
      <el-input v-model="form.name" placeholder="请输入模板名称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="info" @click="upload" >上传</el-button>
    </el-form-item>
  </el-form>
</div>x
</template>

<style scoped>
.forms{
  width: 70%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px .2rem .2rem rgba(150, 146, 146, 0.37);
}
</style>
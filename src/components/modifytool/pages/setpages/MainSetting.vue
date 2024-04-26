<script setup>

import {ElButton, ElForm, ElFormItem, ElInput} from "element-plus";
import PhotoSetting from "@/components/PhotoSetting.vue";
import {userStroge} from "../../../../base/Stronge.ts"
import {reactive,defineProps} from "vue";
const props =defineProps(['user'])
const form=reactive(props.user)

</script>
<template>
  <div style="width: 60vw">
    <el-form class="form" :model="form" label-width="60px" >
      <el-form-item label="用户名" >
        <el-input v-model="form['username']"></el-input>
      </el-form-item>
      <el-form-item label="注册邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="生成风格">
        <el-input v-model="form.style" type="textarea" placeholder="简约,言简意赅,尽量使用成语总结,给人一种大师风范"></el-input>
      </el-form-item>
      <el-form-item label="设置头像">
        <PhotoSetting v-model="form.avatar"></PhotoSetting>
      </el-form-item>
    </el-form>

  </div>
</template>

<style scoped>

</style>
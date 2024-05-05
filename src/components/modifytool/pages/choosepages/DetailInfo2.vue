<script setup lang="ts">
import {computed} from "vue";
import * as store from "@/base/store.ts";
import {refreshUser, useTemplate} from "@/base/request/requests.ts";
import {exportData, refreshData} from "@/base/model/dto-model.ts";
import {Template} from "@/base/model/model.ts";

const template=computed(()=>store.singleData.view.chooseTemplate.choose_template)
const use=()=>{
  useTemplate(template)
  //延迟加载
}
const star=()=>{
  if(store.singleData.user.stars.includes(template)){
    store.singleData.user.stars=store.singleData.user.stars.filter(e=>e!=template)
  }
  store.singleData.user.stars.push(template)
  refreshUser(exportData(store.singleData.user))
}
</script>

<template>
  <div class="info">
      <div class="block text-center">
        <el-carousel motion-blur direction="vertical">
          <el-carousel-item  v-for="item in template.photo" :key="item">
            <img :src="item.url" style="object-fit: cover;;width: 100%;height: 100%"/>

          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="text">
        <span class="author">{{template.author}}</span>
        <p class="describe">
            {{template.describe}}
        </p>
      </div>
      <div class="footer" style="right: 0;position: absolute;bottom: 0">
        <el-button type="info" @click="use">
          <template #icon>
          <span class="material-symbols-outlined">
credit_score
</span>
          </template>
          使用该模板
        </el-button>

        <el-button type="info" @click="star">
          <template #icon>
        <span class="material-symbols-outlined" >
star
</span>
          </template>
          收藏该模板
        </el-button>
      </div>
  </div>
</template>

<style scoped>

.footer:hover{
  color: var(--bright-gold);
}
.info{
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.34);
}
.text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .author::before{
    content: '作者:';
  }
  .author{
    font-size: 1.3rem;
    font-weight: 700;
  }
  .describe{
    word-wrap: anywhere;
    font-size: .8rem;
    color: #7c7c7c;
  }
}
.info{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: var(--color-light-gray);
}
.footer{
  padding: 5px;
  display: flex;
  gap: 5px;
}
</style>
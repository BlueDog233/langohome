<script setup>

import DetailInfo2 from "@/components/modifytool/pages/choosepages/DetailInfo2.vue";
</script>

<template>
<div class="stars" >
  <el-carousel  :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <DetailInfo2></DetailInfo2>
</div>
</template>

<style scoped>
.stars{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.now-select{

  flex-grow: 1;
  border: 1px solid black;
  display: grid;
  grid-template-columns: .4fr 1fr;
  .photo{
      height: 200px;
  }
}
</style>
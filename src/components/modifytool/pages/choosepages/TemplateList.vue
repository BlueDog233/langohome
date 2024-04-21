<script setup>

import ItemPhoto from "@/components/modifytool/pages/choosepages/ItemPhoto.vue";
</script>

<template>
  <el-scrollbar height="70vh">
    <div class="list">
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
      <ItemPhoto></ItemPhoto>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  grid-auto-rows: minmax(100px, auto); /* 自动行高 */
  row-gap: 10px;
}
.list *{
  color: white;
  background: var(--color-light-gray);
  border-radius: 2px;
  box-shadow: 1px 1px 2px 2px rgba(136, 136, 136, 0.64);
}
</style>
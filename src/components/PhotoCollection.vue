<script setup>

import PhotoItem from "@/components/item/PhotoItem.vue";
</script>

<template>
<div class="photos down">
  <span class="title">照片集</span>
  <PhotoItem></PhotoItem>
</div>
</template>

<style scoped>
.title{
  display: block;
  font-weight: bolder;
  color: var(--bright-gold);
  font-size: 2rem;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 3px solid var(--deep-sky-blue);
}
.photos{

}
</style>
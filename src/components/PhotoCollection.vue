<script setup>

import PhotoItem from "@/components/item/PhotoItem.vue";
import * as Stronge from "@/base/Stronge.ts";

console.log(Stronge.data['photos'][0].name)
</script>

<template>
<div class="photos down">
  <span class="title">照片集</span>
  <PhotoItem v-for="x in Stronge.data['photos']" :src="x.src" :describe="x.describe"></PhotoItem>
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
  margin-bottom: 20px;
}
.photos{

}
</style>
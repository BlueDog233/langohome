<script setup>

import ItemContainers from "@/components/ItemContainers.vue";
import WorkCollection from "@/components/WorkCollection.vue";
import WorkItem from "@/components/item/WorkItem.vue";
import SayItem from "@/components/item/SayItem.vue";
import BlogItem from "@/components/item/BlogItem.vue";
import SkillsItem from "@/components/item/SkillsItem.vue";
import * as Stronge from "../base/Stronge.ts";
</script>

<template>

    <div class="text-info down">
      <span class="title dance-1" style="display: inline-block">{{Stronge.data['title'][0]}}</span>
      <span class="span1">{{Stronge.data['title'][1]}}<span class="dance-2" style="color: gold;display: inline-block">{{Stronge.data.title[2]}}</span>{{Stronge.data.title[3]}}</span>
      <span class="span2">{{Stronge.data['title'][4]}}</span>
    </div>
    <ItemContainers class="down"/>
    <WorkCollection class="up">
      <WorkItem v-for="x in Stronge.data['works']" :href=x.href :name="x.name" :src="x.src "></WorkItem>
    </WorkCollection>
    <div class="more" style="margin-top: 20px">
      <BlogItem></BlogItem>
      <SayItem></SayItem>

    </div>
    <SkillsItem></SkillsItem>


</template>

<style scoped>
@media screen and (max-width: 800px) {
  .more{

    flex-direction: column;

  }
}
.more{
  display: flex;
  flex-wrap: nowrap;

  gap: 20px;
  *{
    flex-grow: 1;
  }
}
.span1{
  display: block;
  width: 100%;
  height: 2rem;
  color: var(--color-primary);
  position: inherit;
  top: 60px;
  left: 20px;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
}
.span2{

  color: var(--color-accent);
  width: 100%;
  position: inherit;
  word-wrap: anywhere;
  top: 110px;
  left: 20px;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
}
.title{
  font-size: 5rem;
}
</style>
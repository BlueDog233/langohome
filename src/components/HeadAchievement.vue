<script setup>

import ItemContainers from "@/components/ItemContainers.vue";
import WorkCollection from "@/components/WorkCollection.vue";
import WorkItem from "@/components/item/WorkItem.vue";
import SayItem from "@/components/item/SayItem.vue";
import BlogItem from "@/components/item/BlogItem.vue";
import SkillsItem from "@/components/item/SkillsItem.vue";
</script>

<template>
  <div class="container" style="height: calc(100vh - 60px);border-radius: 30px">
    <div class="text-info down">
      <span class="title dance-1" style="display: inline-block">Hello</span>
      <span class="span1">I am <span class="dance-2" style="color: gold;display: inline-block">Lango</span> , a coder</span>
      <span class="span2">Hope everything I want , everything I can do,everything I can make.Become a super man</span>
    </div>
    <ItemContainers class="down"/>
    <WorkCollection class="up">
      <WorkItem></WorkItem>
    </WorkCollection>
    <div class="more" style="margin-top: 20px">
      <BlogItem></BlogItem>

      <SayItem></SayItem>

    </div>
    <SkillsItem></SkillsItem>

  </div>

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
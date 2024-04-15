<script setup>
  import NavElement from "@/base/NavElement.ts";

  const props=defineProps(['nav'])
  const elements=props.nav
  const skip=(url)=>{
  //   todo
  }
</script>

<template>
<div class="nav-container">
  <div class="logo"></div>
  <div class="flex-grow"></div>
  <div class="nav-container-element" v-for="element in elements" v-text="element.text" @click="skip(element.url)"></div>
</div>
</template>

<style scoped>
.nav-container{
  width: 100%;
  height: 3.5rem;
  background-color: var(--color-light-gray);
  display: flex;
}
.logo{
  height: 100%;
  width: 100px;
  background-position: center;
  background-size: cover;
  background-image: url("https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240415005251697%5B2%5D.png");
}
.nav-container-element{
  width: 120px;
  text-align: center;
  padding-top: -0.2rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all .3s ease;
}
.nav-container-element:hover{
  background-color: var(--color-accent);
}
</style>
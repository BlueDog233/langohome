<script setup>
import {content} from "@/base/Stronge.ts";

const active=ref(false)
const infoC=ref('')
const labelC=ref('')
import * as Stronge from "@/base/Stronge.ts";
import {computed, ref} from "vue";
const leave=()=>{
  if (!active.value) {
    Stronge.page.page='default'
  }
}
const leaveI=()=>{
  infoC.value=''
}
const getI=(event)=>{
  infoC.value=Stronge.content.get(event.target.textContent)
}
const leaveL=()=>{
  labelC.value=''
}
const getL=(event)=>{
  labelC.value=Stronge.content.get(event.target.textContent)
}
const clz=computed(()=>{
  let c=['photo']
  if(active.value && Stronge.page.page=='photo'){
    c.push('active')
  }
  return c
})

</script>

<template>
  <div class="info">
    <div :class="clz" @mousemove="Stronge.page.page='photo';"  @mouseleave="leave" @click="active=!active;"></div>

    <div class="container" style="box-shadow: 0 0 0 black;background: inherit;height: calc(100vh - 220px)">
      <div class="glass-effect t-info down">
        <div class="title dance-1">INFO</div>
        <div class="title" @mousemove="getI($event)"  @mouseleave="leaveI" >Swust School</div>
        <div class="title" @mousemove="getI($event)"  @mouseleave="leaveI">Freshman</div>
        <div class="title">Computer university</div>
        <div class="title" @mousemove="getI($event)"  @mouseleave="leaveI">18</div>
        <div class="describe up" v-show="infoC" v-text="infoC"></div>
      </div>
      <div class="labels glass-effect up">
        <div class="L dance-2">LABEL</div>
        <div class="label" @mousemove="getL($event)"  @mouseleave="leaveL">Java</div>
        <div class="label">奇门</div>
        <div class="label">Vue</div>
        <div class="label">Mincraft</div>
        <div class="label">跑者</div>
        <div class="label">Bukkit</div>
        <div class="label">Javascript</div>
        <div class="label">Python</div>
        <div class="describe up" v-if="labelC" v-text="labelC"></div>
      </div>

    </div>

  </div>
</template>

<style scoped>

.photo:hover{
  transform: translate(-3px,-3px) rotate(10deg);
}
.active{
  box-shadow: .1rem .1rem .3rem .3rem rgba(236, 149, 13, 0.88) !important;
  transform: translate(-3px,-3px) rotate(10deg);
}
.t-info{
  display: flex;
  flex-direction: column;
  margin-top: -30px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.title:not(:first-child):hover{
  color: var(--bright-gold);
  cursor: pointer;

}
.t-info > *:not(:nth-last-child(-n+2)){
  border-bottom: 1px solid var(--color-primary);
  font-weight: normal;

}
.t-info > *:first-child{
  color: var(--bright-gold);
  display: inline-block;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
}
.labels{
  line-height:2rem;
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 20px;
}
.L{
  color: var(--bright-gold);
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
}
.label{
  color: var(--color-primary);
  height: 1.5rem;
  margin-right: 10px;
  border-radius: 10px;
  padding: 0 10px;
  display: inline-block;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);
  font-size: 1rem;
  transition: all .3s ease;
  cursor: pointer;
  line-height: 1.5rem;
}
.label:hover{
  color: var(--bright-gold);

  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0);
  transform: translate(1px,1px);
}
.card{
  line-height: 1rem;
  color: var(--color-primary);
  border-left: 5px solid #023e8a;
  display: inline-block;
  padding: 5px  ;
  margin-left: 30px;
  height: auto;
  width: calc(100% - 30px);
}
.photo{
  cursor: pointer;
  transition: all .6s ease;
  box-shadow: 3px 3px 20px rgba(0,0,0,0.2);
  width: 150px;
  height: 150px;
  margin: 20px auto;
  border-radius: 10rem;
  background-position: left;
  background-size: cover;
  background-clip: border-box;
  background-image: url("https://photofortypora.oss-cn-beijing.aliyuncs.com/BlueDog.png");
}
.info{
  position: relative;
  border: 1px solid var(--color-background);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.text-info{
  height: auto;

  width: calc(100% - 200px);
  position: absolute;
  top: 30px;
  left: 200px;
  .title{
    position: absolute;
    font-weight: 500;
    font-size: 5rem;
    top: -40px;
    left: 20px;
  }

}
.describe{
  display: block;
  word-wrap: anywhere;
  border-top: 5px solid var(--bright-gold);
  line-height: 1rem;
  padding-top: 10px;
  margin-top: 10px;
  color: #465512;
}
</style>
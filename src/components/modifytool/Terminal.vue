<script setup>
import {ref} from "vue";

const x=ref(50)
const y=ref(50)
const terminal=ref()
const isStart=ref(false)
const mouse=(e)=>{
  if (!isStart.value || e==null) {
    return
  }
  x.value=e.x
  y.value=e.y
  recalibrateElementPosition(document.querySelector(".terminal"))

}
function recalibrateElementPosition(element) {
  if (!element) {
    return;
  }

  const rect = element.getBoundingClientRect(); // 获取元素的位置和尺寸
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  // 计算元素是否超出右边界
  let newX = rect.right > windowWidth ? (windowWidth - rect.width) : rect.left;
  // 计算元素是否超出左边界
  newX = newX < 0 ? 0 : newX;

  // 计算元素是否超出底部边界
  let newY = rect.bottom > windowHeight ? (windowHeight - rect.height) : rect.top;
  // 计算元素是否超出顶部边界
  newY = newY < 0 ? 0 : newY;

  // 设置元素的新位置
  element.style.left = `${newX}px`;
  element.style.top = `${newY}px`;
}

// 使用示例
// 假设你已经有了一个具体的元素，你可以这样调用函数:
// recalibrateElementPosition(document.querySelector('.my-element'));

document.addEventListener("mousemove",mouse)
const isReal=ref(false)
const input=ref()
const inputText=ref("")
</script>

<template>
<div :class="['terminal',isReal&&'real']" ref="terminal" @click="input.focus()" @mousedown.alt="isStart=!isStart"  @dblclick="isReal=!isReal;isStart=false" :style="isReal?{left: 'calc('+x+'px - 200px)',top: 'calc('+y+'px - 200px)'}:{left: 'calc('+x+'px - 30px)',top: 'calc('+y+'px - 30px)'}">
<span class="material-symbols-outlined" style="scale: 2">
terminal
</span>
  <template v-if="isReal">
    <div style="display: flex;flex-direction: column">
      <el-scrollbar height="230px">
        <p class="user">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p class="system">aaaa</p>
        <p class="system">aaaa</p>
        <p class="system">aaaa</p>
        <p class="system">aaaa</p>

      </el-scrollbar>
      <el-scrollbar height="70px" style="border-top: 1px solid black">
        <el-input type="textarea"  v-model="inputText" ref="input" class="input" autosize  style="width: 100%;--el-input-hover-border: transparent;--el-input-focus-border-color: transparent;--el-input-border-color: transparent;--el-input-bg-color: transparent;width: 100%;height: 70px;border-radius: 10px;border: none;background-color: transparent"></el-input>
    </el-scrollbar>
    </div>
  </template>
</div>
</template>

<style scoped>
.input{
  display: block;
  line-height: 1rem;
  word-wrap: anywhere;
}
input::before{
  content:'input >'
}
.input:focus-visible{

  border: 0px;
  border-radius: 0;
  all:initial;
}
.input:focus{
  border: none;
}
p{
  text-align: left;
  word-wrap: anywhere;
  line-height: 1rem;
}
.user::before{
  content: 'user>';
  color: #fff;
}
.user{
  color: #000;
}
.system::before{
  content: 'system >';
  color: #fff;
}
.terminal{
  display: inline-block;
  text-align: center;
  line-height: 70px;
  position: fixed;
  width: 60px;
  height: 60px;
  z-index: 20;
  border-radius: 50%;
  background-color: #bdfd06;
  transition: all .5s ease;
  cursor: pointer;
}
.real{
  width: 400px;
  height: 400px;
  border-radius: 10%;
  background-color: rgba(35, 32, 32, 0.8);
  color: #9fff11;
}
.terminal:active{
  background-color: rgba(55, 62, 65, 0.62);
  color: rgba(171, 0, 0, 0.87);
}
</style>
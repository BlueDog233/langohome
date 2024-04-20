<script setup>
import ChooseTemplate from "@/components/modifytool/pages/ChooseTemplate.vue";

import ('../assets/base.css')
const isChangeMode=defineModel()
const prop=defineProps(['y','x'])
</script>

<template>

  <Transition>

<div class="select" v-if="isChangeMode">
  <div class="bg" v-if="isChangeMode" :style="{clipPath: 'circle(100% at '+prop.x+'vh '+prop.y+'vh)'}">
    <slot class="s"></slot>
  </div>
</div>
  </Transition>

</template>

<style scoped>
.select{
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  bottom: 0;
  z-index: 5;

}
.s{
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: -50vh;
}
.bg{
  width: 700%;
  height: 200%;
  background-color: rgba(90, 100, 66, 0.55);
  transition: all .3s ease;
}
.v-leave-active .bg,
.v-enter-active .bg{
  transition: width .5s ease;
}

.v-enter-from .bg,
.v-leave-to .bg{
  width: 0%;

}
</style>
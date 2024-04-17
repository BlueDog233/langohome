<script setup>
const prop=defineProps(['src','href','name'])

</script>

<template>
  <div @click="window.open(prop.href)">
    <button class="work">
      {{prop.name}}

      {{prop.src}}
    </button>
    <span class="backdrop" :style="{backgroundImage: 'url('+prop.href+')'}"></span>
  </div>
</template>

<style scoped>
.work {
  border: 0;
  position: relative;
  display: inline-block;
  text-align: center;
  word-wrap: anywhere;
  width: 90px;
  height: 90px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  padding: 0 2px;
  font-weight: 600;
  font-size: 18px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.backdrop {
  position: absolute;
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: cover;
  z-index: -1;
  border-radius: 15px;
  transform: translateX(-105%) translateY(10%);
  transition: all ease-in-out 0.5s;
  background: var(--coral-red);
}

.work:hover + .backdrop {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transform: rotate(15deg) translateX(-60px) translateY(10px);
}

.work:active,.work:active +.backdrop {
  box-shadow: none;
}
</style>
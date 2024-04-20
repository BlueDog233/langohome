<script setup>

import ReleaseRocket from "@/components/modifytool/items/ReleaseRocket.vue";
import ChangeTemplate from "@/components/modifytool/items/ChangeTemplate.vue";
import UserSetting from "@/components/modifytool/items/UserSetting.vue";
import ShareIndex from "@/components/modifytool/items/ShareIndex.vue";
</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <ul class="example-2" style="position: fixed;bottom: 5px">
    <ReleaseRocket></ReleaseRocket>
    <UserSetting></UserSetting>
    <ShareIndex></ShareIndex>
    <ChangeTemplate></ChangeTemplate>
  </ul>
</template>

<style >
ul {
  list-style: none;
}

li::after {
  content: "";
  display: block;
  height: 0px;
  transition: height 0.3s ease-in-out;
  pointer-events: none;
}



.example-2 {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.example-2 .icon-content {
  position: relative;
}
.example-2 .icon-content .tooltip {
  writing-mode: horizontal-tb;
  width: 8rem;
  position: absolute;
  left: 50%;
  transform: translateY(-140%) translateX(35%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;

}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}

.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a .filled,
.example-2 .icon-content a ~ .tooltip {
  background-color: rgba(68, 119, 140, 0.5);

}
</style>
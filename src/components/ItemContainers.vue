<script setup>

import HiddenCompoent from "@/components/HiddenCompoent.vue";
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">


  <div class="follow">
    <div class="box">
      <a href="https://www.facebook.com/astronaomical/" target="_blank"><i class="fab fa-github "></i></a>
      <a href="https://www.instagram.com/astronaomical/" target="_blank"><i class="fab fa-qq"></i></a>
      <a href="https://www.pinterest.com/astronaomical/" target="_blank"><i class="fab fa-weixin"></i></a>
      <a href="https://www.linkedin.com/in/naomi-weatherford-758385112/" target="_blank"><i class="fab fa-discord"></i></a>
      <a href="https://codepen.io/astronaomical/" target="_blank"><i class="fab fa-csdn"><svg class="fa-csdn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D"></path>
      </svg></i></a>
      <a href="https://www.behance.net/astronaomical" target="_blank"><i class="fab fa-behance"></i></a>
    </div>
  </div>
</template>

<style scoped>
.fa-csdn {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
.fa-github{
  color: black !important;
}

.box {
  margin-top: 30px;
  text-align: center;
  vertical-align: middle;
}
.box a {
  display: inline-block;
  vertical-align: text-bottom;
}
.box a:hover i {
  background: gold;
  border-radius: 5px;
  color: var(--deep-sky-blue) !important;
  transform: rotate(45deg) scale(0.8);
}
.box a:hover i::before {
  transform: rotate(-45deg) scale(1.5);
}
.box i {
  display: inline-block;
  font-size: 3rem;
  background: var(--color-border);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  line-height:5rem;
  color: var(--mellow-apricot);
  margin: 0 10px 10px 10px;
  transition-duration: 0.3s;
}
.box i::before {
  transition-duration: 0.3s;
}

</style>
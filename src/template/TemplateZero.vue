<script setup>
import('../assets/main.css')
</script>

<template>
<div class="head">
  <span class="wait-release">该用户未发布个人主页</span>
  <span class="not-found">404</span>
</div>
</template>

<style scoped>
.head{
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.wait-release{
  font-weight: 600;
  font-size: 3rem;
}
.not-found{
  color: #465512;
  font-size: 1.5rem;
}
</style>
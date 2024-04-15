<script setup>

</script>

<template>
  <div class="follow">
    <div class="box">
      <a href="https://www.facebook.com/astronaomical/" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/astronaomical/" target="_blank"><i class="fab fa-instagram "></i></a>
      <a href="https://www.pinterest.com/astronaomical/" target="_blank"><i class="fab fa-pinterest"></i></a>
      <a href="https://www.linkedin.com/in/naomi-weatherford-758385112/" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://codepen.io/astronaomical/" target="_blank"><i class="fab fa-codepen"></i></a>
      <a href="https://www.behance.net/astronaomical" target="_blank"><i class="fab fa-behance"></i></a>
    </div>
  </div>
</template>

<style scoped>
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
  transform: rotate(45deg) scale(0.8);
}
.box a:hover i::before {
  transform: rotate(-45deg) scale(1.5);
}
.box i {
  display: inline-block;
  font-size: 30px;
  background: var(--color-border);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  color: var(--color-primary);
  margin: 0 10px 10px 10px;
  transition-duration: 0.3s;
}
.box i::before {
  transition-duration: 0.3s;
}
.box i.fa::before {
  display: block;
}
</style>
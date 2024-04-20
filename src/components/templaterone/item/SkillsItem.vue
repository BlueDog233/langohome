<template>
  <div class="container all" style="color: var(--bright-gold)">
    Skills
    <div class="image-container" :style="{ transform: `translateX(-${currentScroll}px)` }">
      <!-- 硬编码的图片 URLs -->
        <div class="thing up" v-for="data in datas" >
          <img :src="data.src"/>

          <div class="text" style="">{{data.name}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import * as Stronge from "@/base/Stronge.ts";

console.log(Stronge.data['skills']);
export default {
  data() {
    return {
      datas:
       Stronge.data['skills']
      ,

    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {}
}
</script>

<style scoped>
.all {
  font-size: 2rem;

  margin-top: 20px;
  display: block;
  position: relative;
  height: fit-content;
}

.image-container {
  display: flex;

  flex-wrap: wrap;
}
.text{
  transition: all .6s ease;
  opacity: 0;
  color: rgba(0,0,0,.5);
  white-space: nowrap;
  top: 0rem;
  position: absolute;
}
.thing {
  position: relative;
  background-position: center;
  background-size: cover;
  margin: 20px;
  width: 5rem;
  height: 5rem;

  flex-shrink: 0;
  line-height: 5rem;
  text-align: center;
  cursor: pointer;
  transition: all .6s ease;
}
@keyframes circle {
  10%{
    clip-path: circle(2.9rem);
  }20%{
    clip-path: circle(2.8rem);
  }30%{
    clip-path: circle(2.7rem);
  }40%{
    clip-path: circle(2.6rem);
  }50%{
    clip-path: circle(2.5rem);
  }100%{
    clip-path: circle(2.4rem);
  }

}
img{
  width: 5rem;
  height: 5rem;
  transition: transform 0.5s linear;

}
.thing:hover{

}
.thing:hover .text{
  opacity: 1;
  transform: translateY(-1rem);

}
.thing:hover > img{
  transform: translateY(-1rem);
  animation: circle .3s ease;
  clip-path: circle(2.4rem);
  overflow: visible;
  filter: blur(2px);

}

</style>

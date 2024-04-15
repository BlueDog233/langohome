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
export default {
  data() {
    return {
      datas: [
        { "src": "https://vuejs.org/images/logo.png", "name": "Vue" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/6/61/Java_logo.png", "name": "Java" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", "name": "React" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", "name": "Sass" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", "name": "Node.js" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg", "name": "Linux" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", "name": "Python" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png", "name": "C#" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", "name": "PostgreSQL" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", "name": "Express.js" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/a/a3/.NET_Logo.svg", "name": ".NET" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", "name": "Apple" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png", "name": "Android" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg", "name": "GraphQL" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg", "name": "Angular" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", "name": "Bootstrap" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", "name": "SQL" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/4/49/Ruby_on_Rails_logo.svg", "name": "Ruby on Rails" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", "name": "CSS3" },
        { "src": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "name": "JavaScript" }
      ],

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

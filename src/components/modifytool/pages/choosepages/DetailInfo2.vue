<script setup>

</script>

<template>
  <div class="info">
      <div class="block text-center">
        <el-carousel motion-blur direction="vertical">
          <el-carousel-item  v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="text">
        <span class="author">BlueDog</span>
        <p class="describe">
          介绍啊飒飒阿萨撒旦撒犯得上反对法aaaaaaa飒阿萨撒旦撒犯得上反对法aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa阿萨飒飒啊啊</p>
      </div>
      <div class="footer" style="right: 0;position: absolute;bottom: 0">
        <el-button type="info">
          <template #icon>
          <span class="material-symbols-outlined">
credit_score
</span>
          </template>
          使用该模板
        </el-button>

        <el-button type="info">
          <template #icon>
        <span class="material-symbols-outlined" >
star
</span>
          </template>
          收藏该模板
        </el-button>
      </div>
  </div>
</template>

<style scoped>

.footer:hover{
  color: var(--bright-gold);
}
.info{
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.34);
}
.text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  .author::before{
    content: '作者:';
  }
  .author{
    font-size: 1.3rem;
    font-weight: 700;
  }
  .describe{
    word-wrap: anywhere;
    font-size: .8rem;
    color: #7c7c7c;
  }
}
.info{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: var(--color-light-gray);
}
.footer{
  padding: 5px;
  display: flex;
  gap: 5px;
}
</style>
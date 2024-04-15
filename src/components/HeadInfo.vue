<script setup>

</script>

<template>
  <div class="info">
    <div class="photo"></div>

    <div class="container" style="box-shadow: 0 0 0 black;background: inherit;height: calc(100vh - 220px)">
      <div class="glass-effect t-info down">
        <div class="title dance-1">INFO</div>
        <div class="title">Swust School</div>
        <div class="title">Freshman</div>
        <div class="title">Computer university</div>
        <div class="title">18</div>
      </div>
      <div class="labels glass-effect up">
        <div class="L dance-2">LABEL</div>
        <div class="label">Java</div>
        <div class="label">奇门</div>
        <div class="label">Vue</div>
        <div class="label">Mincraft</div>
        <div class="label">跑者</div>
        <div class="label">Bukkit</div>
        <div class="label">Javascript</div>
        <div class="label">Python</div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.t-info{
  display: flex;
  flex-direction: column;
  margin-top: -30px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.t-info > *:not(:last-child){
  border-bottom: 1px solid var(--color-primary);
  font-weight: normal;
}
.t-info > *:first-child{
  color: var(--bright-gold);
  display: inline-block;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
}
.labels{
  line-height:2rem;
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 20px;
}
.L{
  color: var(--bright-gold);
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
}
.label{
  color: var(--color-primary);
  height: 1.5rem;
  margin-right: 10px;
  border-radius: 10px;
  padding: 0 10px;
  display: inline-block;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);
  font-size: 1rem;
  transition: all .3s ease;
  cursor: pointer;
  line-height: 1.5rem;
}
.active,
.label:hover{
  color: var(--color-accent);

  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0);
  transform: translate(1px,1px);
}
.card{
  line-height: 1rem;
  color: var(--color-primary);
  border-left: 5px solid #023e8a;
  display: inline-block;
  padding: 5px  ;
  margin-left: 30px;
  height: auto;
  width: calc(100% - 30px);
}
.photo{
  box-shadow: 3px 3px 20px rgba(0,0,0,0.2);
  width: 150px;
  height: 150px;
  margin: 20px auto;
  border-radius: 10rem;
  background-position: left;
  background-size: cover;
  background-clip: border-box;
  background-image: url("https://photofortypora.oss-cn-beijing.aliyuncs.com/BlueDog.png");
}
.info{
  position: relative;
  border: 1px solid var(--color-background);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.text-info{
  height: auto;

  width: calc(100% - 200px);
  position: absolute;
  top: 30px;
  left: 200px;
  .title{
    position: absolute;
    font-weight: 500;
    font-size: 5rem;
    top: -40px;
    left: 20px;
  }

}
</style>
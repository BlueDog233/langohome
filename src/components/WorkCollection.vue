<script setup>

</script>

<template>
<div class="glass-effect">
  <span style="font-size: 1.3rem;display: inline-block;margin-bottom: 8px;color: var(--bright-gold);font-size: 2rem;font-weight: bolder">Works</span>
  <div class="works">
    <slot></slot>
  </div>

</div>
</template>

<style scoped>
.works{
display: flex;
gap: 40px;
  flex-direction: row;
}

</style>
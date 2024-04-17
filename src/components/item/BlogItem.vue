<script setup>
import * as Stronge from "@/base/Stronge.ts";

const open=(url)=>window.open(url, '_blank');
</script>

<template>
  <blog class="blog glass-effect" @click="open(Stronge.data['href'])">


    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
    </svg>
    <div class="text">
      Blog
    </div>

  </blog>
</template>

<style scoped>
.blog {
  line-height: 2.9rem;
  background-color: #ffffff00;
  border-radius: 11px;
  transition: all 0.6s ease;
  display: flex;
}

.blog:hover {
  background-color: var(--color-foreground);
  cursor: pointer;
}

.blog svg {
  width: 1.6em;
  font-size: 2rem;
  display: flex;
  transition: all 0.6s ease;
}

.blog:hover svg {
  transform: translateX(3rem);
}

.text {
  color: var(--deep-sky-blue);
  margin: 0 1.5em;
  font-size: 2rem;
}
</style>